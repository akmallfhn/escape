"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "escape2026";

type MerchItem = {
  id: string;
  name: string;
  category: string;
  price: string;
  image_url: string;
  sort_order: number;
};

type EventData = {
  id: string;
  title: string;
  venue_name: string;
  venue_sub: string;
  address: string;
  description: string;
  event_date: string;
  event_time: string;
  capacity: string;
  hero_image_url: string;
  ticket_url: string;
};

type Tab = "merch" | "event";

export default function AdminPage() {
  const [authed, setAuthed] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('admin_authed') === '1';
    }
    return false;
  });
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [tab, setTab] = useState<Tab>("merch");

  useEffect(() => {
    if (sessionStorage.getItem("admin_authed") === "1") setAuthed(true);
  }, []);

  const [merch, setMerch] = useState<MerchItem[]>([]);
  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: "ok" | "err" } | null>(null);

  const [newMerch, setNewMerch] = useState({ name: "", category: "", price: "", image_url: "", sort_order: 0 });
  const [newMerchImageFile, setNewMerchImageFile] = useState<File | null>(null);
  const [newMerchPreview, setNewMerchPreview] = useState<string | null>(null);

  const [eventDraft, setEventDraft] = useState<Partial<EventData>>({});
  const [eventImageFile, setEventImageFile] = useState<File | null>(null);
  const [eventImagePreview, setEventImagePreview] = useState<string | null>(null);

  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const merchFileRef = useRef<HTMLInputElement>(null);
  const eventFileRef = useRef<HTMLInputElement>(null);

  function showToast(msg: string, type: "ok" | "err" = "ok") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }

  async function loadMerch() {
    setLoading(true);
    const res = await fetch("/api/merchandise");
    if (res.ok) {
      const data = await res.json();
      setMerch(Array.isArray(data) ? data : []);
    }
    setLoading(false);
  }

  async function loadEvent() {
    setLoading(true);
    const res = await fetch("/api/events");
    if (res.ok) {
      const data = await res.json();
      setEvent(data);
      setEventDraft(data);
      setEventImagePreview(data.hero_image_url);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (authed) {
      loadMerch();
      loadEvent();
    }
  }, [authed]);

  function login() {
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_authed", "1");
      setAuthed(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  }

  async function uploadImage(file: File, bucket: string): Promise<string | null> {
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("bucket", bucket);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    setUploading(false);
    if (!res.ok) {
      showToast("Image upload failed", "err");
      return null;
    }
    const { url } = await res.json();
    return url;
  }

  function handleMerchImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setNewMerchImageFile(file);
    setNewMerchPreview(URL.createObjectURL(file));
  }

  function handleEventImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setEventImageFile(file);
    setEventImagePreview(URL.createObjectURL(file));
  }

  async function addMerch() {
    if (!newMerch.name || !newMerch.category || !newMerch.price) {
      return showToast("Fill in all fields", "err");
    }
    setSaving(true);
    let imageUrl = newMerch.image_url;
    if (newMerchImageFile) {
      const uploaded = await uploadImage(newMerchImageFile, "merchandise");
      if (!uploaded) { setSaving(false); return; }
      imageUrl = uploaded;
    }
    if (!imageUrl) {
      setSaving(false);
      return showToast("Please provide an image", "err");
    }
    const res = await fetch("/api/merchandise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newMerch, image_url: imageUrl }),
    });
    setSaving(false);
    if (res.ok) {
      showToast("Product added!");
      setNewMerch({ name: "", category: "", price: "", image_url: "", sort_order: 0 });
      setNewMerchImageFile(null);
      setNewMerchPreview(null);
      if (merchFileRef.current) merchFileRef.current.value = "";
      loadMerch();
    } else {
      showToast("Failed to add product", "err");
    }
  }

  async function deleteMerch(id: string) {
    setDeletingId(id);
    const res = await fetch(`/api/merchandise?id=${id}`, { method: "DELETE" });
    setDeletingId(null);
    if (res.ok) {
      showToast("Product deleted");
      setMerch(prev => prev.filter(m => m.id !== id));
    } else {
      showToast("Delete failed", "err");
    }
  }

  async function saveEvent() {
    if (!event) return;
    setSaving(true);
    let heroUrl = eventDraft.hero_image_url ?? event.hero_image_url;
    if (eventImageFile) {
      const uploaded = await uploadImage(eventImageFile, "events");
      if (!uploaded) { setSaving(false); return; }
      heroUrl = uploaded;
    }
    const payload = { ...eventDraft, hero_image_url: heroUrl };
    const res = await fetch("/api/events", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: event.id, ...payload }),
    });
    setSaving(false);
    if (res.ok) {
      showToast("Event updated!");
      const updated = await res.json();
      setEvent(updated);
      setEventDraft(updated);
      setEventImageFile(null);
    } else {
      showToast("Failed to save event", "err");
    }
  }

  async function createNewEvent() {
    const required = ["title", "venue_name", "event_date", "hero_image_url"];
    for (const f of required) {
      if (!eventDraft[f as keyof EventData]) return showToast(`Missing: ${f}`, "err");
    }
    setSaving(true);
    let heroUrl = eventDraft.hero_image_url ?? "";
    if (eventImageFile) {
      const uploaded = await uploadImage(eventImageFile, "events");
      if (!uploaded) { setSaving(false); return; }
      heroUrl = uploaded;
    }
    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...eventDraft, hero_image_url: heroUrl }),
    });
    setSaving(false);
    if (res.ok) {
      showToast("New event created and activated!");
      loadEvent();
    } else {
      showToast("Failed to create event", "err");
    }
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DA393C] mb-4">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
            <p className="text-sm text-gray-500 mt-1">Escape Content Manager</p>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="password"
              value={pw}
              onChange={e => { setPw(e.target.value); setPwError(false); }}
              onKeyDown={e => e.key === "Enter" && login()}
              placeholder="Enter admin password"
              className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-white placeholder-gray-600 text-sm outline-none focus:border-[#DA393C] transition-colors ${pwError ? "border-red-500" : "border-white/10"}`}
            />
            {pwError && <p className="text-xs text-red-400">Incorrect password</p>}
            <button
              onClick={login}
              className="w-full rounded-xl bg-[#DA393C] py-3 text-sm font-bold text-white transition hover:bg-[#b52b2d] active:scale-95"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-20 right-4 z-50 rounded-xl px-5 py-3 text-sm font-medium shadow-xl transition-all ${toast.type === "ok" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"}`}>
          {toast.msg}
        </div>
      )}

      {/* Topbar */}
      <div className="sticky top-0 z-40 border-b border-white/8 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-[#DA393C] flex items-center justify-center">
              <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <span className="font-bold text-base tracking-tight">Escape Admin</span>
          </div>
          <button
            onClick={() => { sessionStorage.removeItem("admin_authed"); setAuthed(false); }}
            className="text-xs text-gray-500 hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Tabs */}
        <div className="flex gap-1 mb-10 bg-white/5 rounded-xl p-1 w-fit">
          {(["merch", "event"] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${tab === t ? "bg-[#DA393C] text-white" : "text-gray-400 hover:text-white"}`}
            >
              {t === "merch" ? "Merchandise" : "Active Event"}
            </button>
          ))}
        </div>

        {/* MERCH TAB */}
        {tab === "merch" && (
          <div className="flex flex-col gap-10">

            {/* Add New Product */}
            <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
              <h2 className="text-lg font-bold mb-6">Add New Product</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Image upload */}
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-400 mb-2">Product Image</label>
                  <div
                    onClick={() => merchFileRef.current?.click()}
                    className="relative cursor-pointer rounded-xl border-2 border-dashed border-white/15 hover:border-[#DA393C]/60 transition-colors overflow-hidden"
                    style={{ aspectRatio: "3/2" }}
                  >
                    {newMerchPreview ? (
                      <Image src={newMerchPreview} alt="preview" fill className="object-contain p-4" unoptimized />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-600">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                        </svg>
                        <span className="text-sm">Click to upload image</span>
                      </div>
                    )}
                  </div>
                  <input ref={merchFileRef} type="file" accept="image/*" onChange={handleMerchImageChange} className="hidden" />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-2">Product Name</label>
                  <input
                    type="text"
                    value={newMerch.name}
                    onChange={e => setNewMerch(p => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. Hoodie Vol.3"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-[#DA393C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-2">Category</label>
                  <input
                    type="text"
                    value={newMerch.category}
                    onChange={e => setNewMerch(p => ({ ...p, category: e.target.value }))}
                    placeholder="e.g. Hoodie, T-shirt, Outer"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-[#DA393C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-2">Price</label>
                  <input
                    type="text"
                    value={newMerch.price}
                    onChange={e => setNewMerch(p => ({ ...p, price: e.target.value }))}
                    placeholder="e.g. Rp 280.000"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-[#DA393C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-2">Sort Order</label>
                  <input
                    type="number"
                    value={newMerch.sort_order}
                    onChange={e => setNewMerch(p => ({ ...p, sort_order: Number(e.target.value) }))}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[#DA393C] transition-colors"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    onClick={addMerch}
                    disabled={saving || uploading}
                    className="rounded-xl bg-[#DA393C] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#b52b2d] active:scale-95 disabled:opacity-50"
                  >
                    {uploading ? "Uploading image..." : saving ? "Saving..." : "Add Product"}
                  </button>
                </div>
              </div>
            </div>

            {/* Current Products */}
            <div>
              <h2 className="text-lg font-bold mb-6">
                Current Products
                <span className="ml-2 text-sm font-normal text-gray-500">({merch.length})</span>
              </h2>
              {loading ? (
                <div className="text-gray-500 text-sm">Loading...</div>
              ) : merch.length === 0 ? (
                <div className="text-gray-600 text-sm rounded-2xl border border-white/8 p-8 text-center">
                  No products yet. Add one above.
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {merch.map(item => (
                    <div key={item.id} className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/3 overflow-hidden">
                      <div className="aspect-square bg-white flex items-center justify-center p-3">
                        <Image
                          src={item.image_url}
                          alt={item.name}
                          width={200}
                          height={200}
                          className="h-full w-full object-contain"
                          unoptimized={item.image_url.startsWith('http')}
                        />
                      </div>
                      <div className="p-3 flex flex-col gap-0.5">
                        <p className="text-xs font-semibold text-white leading-snug line-clamp-2">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.category}</p>
                        <p className="text-xs font-bold text-white mt-1">{item.price}</p>
                      </div>
                      <button
                        onClick={() => deleteMerch(item.id)}
                        disabled={deletingId === item.id}
                        className="absolute top-2 right-2 h-7 w-7 rounded-lg bg-black/70 text-red-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-red-600 hover:text-white"
                      >
                        {deletingId === item.id ? (
                          <svg className="h-3.5 w-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                        ) : (
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path d="M6 18L18 6M6 6l12 12"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* EVENT TAB */}
        {tab === "event" && (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Form */}
              <div className="rounded-2xl border border-white/10 bg-white/3 p-6 flex flex-col gap-4">
                <h2 className="text-lg font-bold">Event Details</h2>

                {[
                  { key: "title", label: "Event Title", placeholder: "ESCAPE ROOM LIVE" },
                  { key: "venue_name", label: "Venue Name (large heading)", placeholder: "BALAI MANUNGGAL" },
                  { key: "venue_sub", label: "Venue Sub-name", placeholder: "Balai M Yusuf" },
                  { key: "address", label: "Full Address", placeholder: "Jl. Jend. Sudirman..." },
                  { key: "description", label: "Description", placeholder: "Escape Room Live hadir di..." },
                  { key: "event_date", label: "Date", placeholder: "Sunday, 3 May 2026" },
                  { key: "event_time", label: "Time", placeholder: "13:00 - 17:00 WITA" },
                  { key: "capacity", label: "Capacity", placeholder: "1000+" },
                  { key: "ticket_url", label: "Ticket URL", placeholder: "https://..." },
                ].map(({ key, label, placeholder }) => (
                  <div key={key}>
                    <label className="block text-xs text-gray-400 mb-1.5">{label}</label>
                    {key === "description" ? (
                      <textarea
                        value={(eventDraft[key as keyof EventData] as string) ?? ""}
                        onChange={e => setEventDraft(p => ({ ...p, [key]: e.target.value }))}
                        placeholder={placeholder}
                        rows={3}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-[#DA393C] transition-colors resize-none"
                      />
                    ) : (
                      <input
                        type="text"
                        value={(eventDraft[key as keyof EventData] as string) ?? ""}
                        onChange={e => setEventDraft(p => ({ ...p, [key]: e.target.value }))}
                        placeholder={placeholder}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-[#DA393C] transition-colors"
                      />
                    )}
                  </div>
                ))}

                {/* Hero image upload */}
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Hero / Event Poster Image</label>
                  <div
                    onClick={() => eventFileRef.current?.click()}
                    className="cursor-pointer rounded-xl border-2 border-dashed border-white/15 hover:border-[#DA393C]/60 transition-colors overflow-hidden relative"
                    style={{ aspectRatio: "16/9" }}
                  >
                    {eventImagePreview ? (
                      <Image src={eventImagePreview} alt="event preview" fill className="object-cover" unoptimized />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-600">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                        </svg>
                        <span className="text-sm">Click to upload hero image</span>
                      </div>
                    )}
                  </div>
                  <input ref={eventFileRef} type="file" accept="image/*" onChange={handleEventImageChange} className="hidden" />
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2 flex-wrap">
                  {event ? (
                    <button
                      onClick={saveEvent}
                      disabled={saving || uploading}
                      className="rounded-xl bg-[#DA393C] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#b52b2d] active:scale-95 disabled:opacity-50"
                    >
                      {uploading ? "Uploading..." : saving ? "Saving..." : "Save Changes"}
                    </button>
                  ) : null}
                  <button
                    onClick={createNewEvent}
                    disabled={saving || uploading}
                    className="rounded-xl border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95 disabled:opacity-50"
                  >
                    {saving ? "Creating..." : "Create New Event"}
                  </button>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col gap-4">
                <h2 className="text-lg font-bold">Live Preview</h2>
                <div className="rounded-2xl border border-white/10 bg-black overflow-hidden">
                  {eventImagePreview && (
                    <div className="relative w-full aspect-[16/10]">
                      <Image src={eventImagePreview} alt="event" fill className="object-cover" unoptimized />
                    </div>
                  )}
                  <div className="p-6 flex flex-col gap-3">
                    <h3 className="text-3xl font-extrabold uppercase text-white leading-none">
                      {eventDraft.venue_name || "VENUE NAME"}
                    </h3>
                    <p className="text-sm text-gray-400">{eventDraft.venue_sub || "Sub venue"}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{eventDraft.address || "Address"}</p>
                    <div className="border-t border-white/10 pt-3 flex flex-col gap-2">
                      {[
                        { icon: "cal", val: eventDraft.event_date || "Date" },
                        { icon: "clk", val: eventDraft.event_time || "Time" },
                        { icon: "ppl", val: `${eventDraft.capacity || "—"} Capacity` },
                      ].map(({ icon, val }) => (
                        <div key={icon} className="flex items-center gap-2 text-xs text-white">
                          <div className="h-7 w-7 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                            {icon === "cal" && (
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                              </svg>
                            )}
                            {icon === "clk" && (
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                              </svg>
                            )}
                            {icon === "ppl" && (
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                              </svg>
                            )}
                          </div>
                          <span className="font-medium">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}