"use client";
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import LogoIcon from '@/components/icons/logo';
import { supabase } from '@/lib/supabase';
import HeroEventModal from './modals/hero-event-modal';
import EventDetailModal from './modals/event-detail-modal';
import MerchandiseModal from './modals/merchandise-modal';
import PlaylistModal from './modals/playlist-modal';
import PromotionalBannerModal from './modals/promotional-banner-modal';

type ActivePage = 'dashboard' | 'offline' | 'online';
type ModalType = 'hero-event' | 'event-detail' | 'merch' | 'playlist' | 'promo-banner' | null;

interface ModalState {
  type: ModalType;
  ctx?: string;
  itemId?: string;
  title?: string;
}

interface MerchItem { id: string; foto_url?: string; nama_produk?: string; kategori?: string; harga?: string; }
interface PlaylistItem { id: string; thumbnail_url?: string; nama_playlist?: string; category?: string; duration?: string; }

export default function AdminShell() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<ActivePage>('dashboard');
  const [modal, setModal] = useState<ModalState>({ type: null });
  const [toast, setToast] = useState<string | null>(null);
  const [merch, setMerch] = useState<MerchItem[]>([]);
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('escape_admin_auth') !== 'true') {
      router.replace('/admin');
    }
  }, [router]);

  const loadMerch = useCallback(async () => {
    const { data } = await supabase.from('merchandise_items').select('*').order('order_index');
    if (data) setMerch(data);
  }, []);

  const loadPlaylist = useCallback(async () => {
    const { data } = await supabase.from('playlist_items').select('*').order('order_index');
    if (data) setPlaylist(data);
  }, []);

  useEffect(() => {
    loadMerch();
    loadPlaylist();
  }, [loadMerch, loadPlaylist]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const onSaved = (msg = 'Berhasil disimpan!') => {
    showToast(msg);
    loadMerch();
    loadPlaylist();
  };

  const handleSignOut = () => {
    localStorage.removeItem('escape_admin_auth');
    router.push('/admin');
  };

  const deleteMerch = async (id: string) => {
    if (!confirm('Hapus item ini?')) return;
    await supabase.from('merchandise_items').delete().eq('id', id);
    loadMerch();
  };

  const deletePlaylist = async (id: string) => {
    if (!confirm('Hapus playlist ini?')) return;
    await supabase.from('playlist_items').delete().eq('id', id);
    loadPlaylist();
  };

  const pageTitles: Record<ActivePage, string> = {
    dashboard: 'Dashboard',
    offline: 'Offline Page',
    online: 'Online Page',
  };

  return (
    <div className="flex h-screen bg-[#0c0c0c] text-white overflow-hidden">

      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      <aside className={`${sidebarCollapsed ? 'w-14' : 'w-60'} shrink-0 flex flex-col bg-[#101010] border-r border-white/8 transition-all duration-200 overflow-hidden`}>

        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-white/8">
          <div className="shrink-0">
            <LogoIcon width="28" height="28" fill="#DA393C" />
          </div>
          {!sidebarCollapsed && <span className="text-sm font-bold text-white tracking-widest uppercase whitespace-nowrap">Escape Admin</span>}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <NavSection
            label="Dashboard"
            icon={<IconDashboard />}
            active={activePage === 'dashboard'}
            collapsed={sidebarCollapsed}
            onClick={() => setActivePage('dashboard')}
            items={[
              { label: 'Hero Event', onClick: () => { setActivePage('dashboard'); setModal({ type: 'hero-event', ctx: 'dashboard', title: 'UBAH HERO EVENT (DASHBOARD) - ONLINE PAGE' }); } },
              { label: 'Event Detail Section', onClick: () => { setActivePage('dashboard'); setModal({ type: 'event-detail', title: 'EVENT DETAIL SECTION' }); } },
              { label: 'Escape Official Merchandise', onClick: () => setActivePage('dashboard') },
            ]}
          />
          <div className="my-2 border-t border-white/8" />
          <NavSection
            label="Offline Page"
            icon={<IconOffline />}
            active={activePage === 'offline'}
            collapsed={sidebarCollapsed}
            onClick={() => setActivePage('offline')}
            items={[
              { label: 'Hero Event', onClick: () => { setActivePage('offline'); setModal({ type: 'hero-event', ctx: 'offline', title: 'UBAH HERO EVENT - OFFLINE PAGE' }); } },
            ]}
          />
          <div className="my-2 border-t border-white/8" />
          <NavSection
            label="Online Page"
            icon={<IconOnline />}
            active={activePage === 'online'}
            collapsed={sidebarCollapsed}
            onClick={() => setActivePage('online')}
            items={[
              { label: 'Hero Section', onClick: () => { setActivePage('online'); setModal({ type: 'hero-event', ctx: 'online', title: 'UBAH HERO SECTION - ONLINE PAGE' }); } },
              { label: 'Escape Playlist', onClick: () => setActivePage('online') },
              { label: 'Promotional Banner', onClick: () => { setActivePage('online'); setModal({ type: 'promo-banner', title: 'PROMOTIONAL BANNER - ONLINE PAGE' }); } },
            ]}
          />
        </nav>

        {/* Bottom */}
        <div className="border-t border-white/8 px-2 py-3 flex flex-col gap-1">
          <button
            onClick={() => setSidebarCollapsed(p => !p)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#666] hover:text-white hover:bg-white/5 transition-colors text-sm w-full"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              {sidebarCollapsed
                ? <polyline points="9 18 15 12 9 6" />
                : <polyline points="15 18 9 12 15 6" />
              }
            </svg>
            {!sidebarCollapsed && <span>Collapse</span>}
          </button>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#666] hover:text-red-400 hover:bg-red-500/5 transition-colors text-sm w-full"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {!sidebarCollapsed && <span>Sign Out</span>}
          </button>
          {!sidebarCollapsed && (
            <div className="flex items-center gap-3 px-3 py-3 mt-1 border-t border-white/8">
              <div className="w-7 h-7 rounded-full bg-[#DA393C] flex items-center justify-center shrink-0">
                <LogoIcon width="14" height="14" fill="white" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-white text-xs font-semibold truncate">Escape Admin</span>
                <span className="text-[#555] text-[10px] truncate">admin@escape</span>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-white/8 bg-[#0e0e0e] shrink-0">
          <h1 className="text-lg font-bold text-white">{pageTitles[activePage]}</h1>
          <button
            onClick={() => showToast('Semua perubahan sudah tersimpan di Supabase!')}
            className="bg-[#DA393C] text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-[#b52b2d] active:scale-[0.98] transition-all uppercase tracking-widest"
          >
            Launch Update
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-8 py-8">
          {activePage === 'dashboard' && (
            <DashboardView
              merch={merch}
              onEditHero={() => setModal({ type: 'hero-event', ctx: 'dashboard', title: 'UBAH HERO EVENT (DASHBOARD) - ONLINE PAGE' })}
              onEditEventDetail={() => setModal({ type: 'event-detail', title: 'EVENT DETAIL SECTION' })}
              onEditMerch={(id) => setModal({ type: 'merch', itemId: id, title: 'ESCAPE OFFICIAL MERCHANDISE SECTION' })}
              onAddMerch={() => setModal({ type: 'merch', title: 'TAMBAH MERCHANDISE' })}
              onDeleteMerch={deleteMerch}
            />
          )}
          {activePage === 'offline' && (
            <OfflineView
              onEditHero={() => setModal({ type: 'hero-event', ctx: 'offline', title: 'UBAH HERO EVENT - OFFLINE PAGE' })}
            />
          )}
          {activePage === 'online' && (
            <OnlineView
              playlist={playlist}
              onEditHero={() => setModal({ type: 'hero-event', ctx: 'online', title: 'UBAH HERO SECTION - ONLINE PAGE' })}
              onEditPlaylist={(id) => setModal({ type: 'playlist', itemId: id, title: 'ESCAPE PLAYLIST - ONLINE PAGE' })}
              onAddPlaylist={() => setModal({ type: 'playlist', title: 'TAMBAH PLAYLIST' })}
              onDeletePlaylist={deletePlaylist}
              onEditBanner={() => setModal({ type: 'promo-banner', title: 'PROMOTIONAL BANNER - ONLINE PAGE' })}
            />
          )}
        </div>
      </div>

      {/* ── Modals ──────────────────────────────────────────────────────── */}
      {modal.type === 'hero-event' && (
        <HeroEventModal
          pageContext={modal.ctx || 'dashboard'}
          title={modal.title || 'UBAH HERO EVENT'}
          onClose={() => setModal({ type: null })}
          onSaved={() => onSaved()}
        />
      )}
      {modal.type === 'event-detail' && (
        <EventDetailModal
          onClose={() => setModal({ type: null })}
          onSaved={() => onSaved()}
        />
      )}
      {modal.type === 'merch' && (
        <MerchandiseModal
          itemId={modal.itemId}
          onClose={() => setModal({ type: null })}
          onSaved={() => onSaved()}
        />
      )}
      {modal.type === 'playlist' && (
        <PlaylistModal
          itemId={modal.itemId}
          onClose={() => setModal({ type: null })}
          onSaved={() => onSaved()}
        />
      )}
      {modal.type === 'promo-banner' && (
        <PromotionalBannerModal
          onClose={() => setModal({ type: null })}
          onSaved={() => onSaved()}
        />
      )}

      {/* ── Toast ──────────────────────────────────────────────────────── */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-white/15 text-white text-sm px-5 py-3 rounded-xl shadow-2xl z-[200] flex items-center gap-3 animate-fade-in">
          <svg width="16" height="16" fill="none" stroke="#4ade80" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {toast}
        </div>
      )}
    </div>
  );
}

// ── Sidebar NavSection ────────────────────────────────────────────────────────

function NavSection({ label, icon, active, collapsed, onClick, items }: {
  label: string; icon: React.ReactNode; active: boolean; collapsed: boolean;
  onClick: () => void; items: { label: string; onClick: () => void }[];
}) {
  const [open, setOpen] = useState(active);
  useEffect(() => { if (active) setOpen(true); }, [active]);

  return (
    <div>
      <button
        onClick={() => { onClick(); setOpen(p => !p); }}
        className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm transition-colors ${active ? 'bg-[#DA393C]/15 text-white' : 'text-[#888] hover:text-white hover:bg-white/5'}`}
      >
        <span className="shrink-0 w-4 h-4">{icon}</span>
        {!collapsed && (
          <>
            <span className="flex-1 text-left font-medium">{label}</span>
            <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </>
        )}
      </button>
      {!collapsed && open && (
        <div className="ml-7 mt-1 flex flex-col gap-0.5">
          {items.map((item, i) => (
            <button key={i} onClick={item.onClick}
              className="text-left text-xs text-[#666] hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Page Views ────────────────────────────────────────────────────────────────

function DashboardView({ merch, onEditHero, onEditEventDetail, onEditMerch, onAddMerch, onDeleteMerch }: {
  merch: MerchItem[];
  onEditHero: () => void;
  onEditEventDetail: () => void;
  onEditMerch: (id: string) => void;
  onAddMerch: () => void;
  onDeleteMerch: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-12 max-w-4xl">
      <SectionBlock title="Hero Event Section">
        <PreviewCard onClick={onEditHero}>
          <div className="w-full h-40 bg-gradient-to-br from-[#2a1a1a] to-[#1a1010] rounded-xl flex items-center justify-center relative overflow-hidden border border-white/8">
            <div className="absolute inset-0 opacity-30 bg-[url('/images/hero3.png')] bg-cover bg-center" />
            <div className="relative z-10 flex flex-col items-center gap-1">
              <span className="text-xs text-[#999] uppercase tracking-widest">Background 1440x900</span>
              <span className="text-white font-black text-xl uppercase">ESCAPE ROOM</span>
            </div>
          </div>
          <EditBadge />
        </PreviewCard>
      </SectionBlock>

      <SectionBlock title="Event Detail Section - Link to other page">
        <PreviewCard onClick={onEditEventDetail}>
          <div className="flex gap-6 p-4 bg-[#111] rounded-xl border border-white/8">
            <div className="w-28 aspect-square bg-[#1a1a1a] rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
              <span className="text-[#444] text-xs">Poster</span>
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <span className="text-xs text-[#666] uppercase tracking-widest">Escape Goes To:</span>
              <span className="text-white font-black text-2xl uppercase leading-none">MAKASSAR</span>
              <div className="flex flex-col gap-1 mt-2">
                <span className="text-[#666] text-xs flex items-center gap-1"><IconPin size={10} /> Balai Manunggal</span>
                <span className="text-[#666] text-xs flex items-center gap-1"><IconCalendar size={10} /> Sunday, 3 Mei 2025</span>
                <span className="text-[#666] text-xs flex items-center gap-1"><IconClock size={10} /> 13:00 - 17:00 WITA</span>
              </div>
            </div>
          </div>
          <EditBadge />
        </PreviewCard>
      </SectionBlock>

      <SectionBlock
        title="Escape Official Merchandise Section"
        action={<AddButton onClick={onAddMerch} label="Tambah Item" />}
      >
        <div className="grid grid-cols-3 gap-3">
          {merch.map(item => (
            <MerchCard key={item.id} item={item}
              onEdit={() => onEditMerch(item.id)}
              onDelete={() => onDeleteMerch(item.id)}
            />
          ))}
          {merch.length === 0 && (
            <div className="col-span-3 text-center py-12 text-[#444] text-sm border border-dashed border-white/10 rounded-xl">
              Belum ada item. Klik "Tambah Item" untuk menambah.
            </div>
          )}
        </div>
      </SectionBlock>
    </div>
  );
}

function OfflineView({ onEditHero }: { onEditHero: () => void }) {
  return (
    <div className="flex flex-col gap-12 max-w-4xl">
      <SectionBlock title="Hero Event Section">
        <PreviewCard onClick={onEditHero}>
          <div className="w-full h-40 bg-gradient-to-br from-[#1a1a2a] to-[#101018] rounded-xl flex items-center justify-center relative overflow-hidden border border-white/8">
            <div className="absolute inset-0 opacity-20 bg-[url('/images/hero3.png')] bg-cover bg-center" />
            <div className="relative z-10 flex flex-col items-center gap-1">
              <span className="text-xs text-[#999] uppercase tracking-widest">Offline Page Hero</span>
              <span className="text-white font-black text-xl uppercase">ESCAPE ROOM</span>
            </div>
          </div>
          <EditBadge />
        </PreviewCard>
      </SectionBlock>
    </div>
  );
}

function OnlineView({ playlist, onEditHero, onEditPlaylist, onAddPlaylist, onDeletePlaylist, onEditBanner }: {
  playlist: PlaylistItem[];
  onEditHero: () => void;
  onEditPlaylist: (id: string) => void;
  onAddPlaylist: () => void;
  onDeletePlaylist: (id: string) => void;
  onEditBanner: () => void;
}) {
  return (
    <div className="flex flex-col gap-12 max-w-4xl">
      <SectionBlock title="Hero Section">
        <PreviewCard onClick={onEditHero}>
          <div className="w-full h-44 bg-gradient-to-br from-[#1a1010] to-[#0c0c0c] rounded-xl flex items-center justify-center relative overflow-hidden border border-white/8">
            <div className="absolute inset-0 opacity-25 bg-[url('/images/hero2.png')] bg-cover bg-center" />
            <div className="relative z-10 text-center">
              <p className="text-xs text-[#999] uppercase tracking-widest mb-2">escape</p>
              <p className="text-white font-black text-2xl uppercase leading-none">ESCAPE 2.0</p>
              <p className="text-[#999] text-xs mt-1 uppercase tracking-widest">Is Out! Watch now on YouTube!</p>
            </div>
          </div>
          <EditBadge />
        </PreviewCard>
      </SectionBlock>

      <SectionBlock
        title="Escape Playlist"
        action={<AddButton onClick={onAddPlaylist} label="Tambah Playlist" />}
      >
        <div className="grid grid-cols-1 gap-3">
          {playlist.map(item => (
            <PlaylistCard key={item.id} item={item}
              onEdit={() => onEditPlaylist(item.id)}
              onDelete={() => onDeletePlaylist(item.id)}
            />
          ))}
          {playlist.length === 0 && (
            <div className="text-center py-12 text-[#444] text-sm border border-dashed border-white/10 rounded-xl">
              Belum ada playlist. Klik "Tambah Playlist" untuk menambah.
            </div>
          )}
        </div>
      </SectionBlock>

      <SectionBlock title="Promotional Banner">
        <PreviewCard onClick={onEditBanner}>
          <div className="flex gap-5 p-4 bg-[#0f1a10] rounded-xl border border-white/8">
            <div className="w-28 aspect-[3/4] bg-[#1a2a1a] rounded-lg shrink-0 flex items-center justify-center">
              <span className="text-[#2a4a2a] text-xs font-bold">3:4</span>
            </div>
            <div className="flex flex-col gap-2 pt-1 justify-center">
              <span className="text-white font-black text-sm uppercase leading-tight">ESCAPE SEKARANG TERSEDIA DI SPOTIFY!</span>
              <span className="text-[#666] text-xs leading-relaxed">Deskripsi banner promotional...</span>
              <div className="mt-1">
                <span className="bg-[#1DB954] text-black text-xs font-bold px-3 py-1.5 rounded-lg">Dengarkan Sekarang!</span>
              </div>
            </div>
          </div>
          <EditBadge />
        </PreviewCard>
      </SectionBlock>
    </div>
  );
}

// ── Card components ───────────────────────────────────────────────────────────

function SectionBlock({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold text-sm uppercase tracking-wider">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}

function PreviewCard({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      {children}
    </div>
  );
}

function EditBadge() {
  return (
    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="bg-[#DA393C] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
        <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeLinecap="round" />
          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" />
        </svg>
        Edit
      </div>
    </div>
  );
}

function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button onClick={onClick}
      className="flex items-center gap-1.5 text-xs text-[#DA393C] border border-[#DA393C]/40 px-3 py-1.5 rounded-lg hover:bg-[#DA393C]/10 transition-colors">
      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
      {label}
    </button>
  );
}

function MerchCard({ item, onEdit, onDelete }: { item: MerchItem; onEdit: () => void; onDelete: () => void }) {
  return (
    <div className="group flex flex-col gap-2 bg-[#111] border border-white/8 rounded-xl overflow-hidden hover:border-white/15 transition-colors">
      <div className="aspect-[3/4] bg-white/5 overflow-hidden">
        {item.foto_url
          ? <img src={item.foto_url} alt="" className="w-full h-full object-cover" />
          : <div className="w-full h-full flex items-center justify-center text-[#333]"><IconImage /></div>
        }
      </div>
      <div className="px-3 pb-3 flex flex-col gap-1">
        <p className="text-white text-xs font-semibold truncate">{item.nama_produk || 'Nama produk'}</p>
        <p className="text-[#555] text-xs">{item.kategori || '-'}</p>
        <p className="text-white text-xs font-bold">{item.harga || '-'}</p>
        <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={onEdit} className="flex-1 bg-white/8 hover:bg-white/12 text-white text-xs py-1.5 rounded-lg transition-colors">Edit</button>
          <button onClick={onDelete} className="px-2.5 bg-red-900/30 hover:bg-red-900/50 text-red-400 text-xs py-1.5 rounded-lg transition-colors">
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" strokeLinecap="round" />
              <path d="M10 11v6M14 11v6M9 6V4h6v2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function PlaylistCard({ item, onEdit, onDelete }: { item: PlaylistItem; onEdit: () => void; onDelete: () => void }) {
  return (
    <div className="group flex items-center gap-4 bg-[#111] border border-white/8 rounded-xl p-4 hover:border-white/15 transition-colors">
      <div className="w-16 h-16 bg-white/5 rounded-xl overflow-hidden shrink-0">
        {item.thumbnail_url
          ? <img src={item.thumbnail_url} alt="" className="w-full h-full object-cover" />
          : <div className="w-full h-full flex items-center justify-center text-[#333]"><IconImage /></div>
        }
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold truncate">{item.nama_playlist || 'Nama playlist'}</p>
        <p className="text-[#555] text-xs mt-0.5">{item.category || '-'} &middot; {item.duration || '-'}</p>
      </div>
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
        <button onClick={onEdit} className="bg-white/8 hover:bg-white/12 text-white text-xs px-3 py-1.5 rounded-lg transition-colors">Edit</button>
        <button onClick={onDelete} className="bg-red-900/30 hover:bg-red-900/50 text-red-400 text-xs px-2.5 py-1.5 rounded-lg transition-colors">
          <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Icon helpers ──────────────────────────────────────────────────────────────

function IconDashboard() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconOffline() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function IconOnline() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  );
}

function IconImage() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

function IconPin({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconCalendar({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconClock({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}