import Image from "next/image";

const termsData = [
    "Dengan membeli atau memiliki tiket, peserta dianggap telah membaca dan menyetujui seluruh syarat dan ketentuan yang berlaku.",
    "Tiket yang sudah dibeli tidak dapat dikembalikan (non-refundable) dan tidak dapat ditukar, kecuali acara dibatalkan oleh penyelenggara.",
    "Peserta wajib hadir sesuai waktu yang tertera pada tiket.",
    "Dilarang membawa barang terlarang seperti senjata tajam, narkotika, alkohol, atau benda berbahaya lainnya ke dalam area acara.",
    "Peserta wajib menjaga ketertiban, menghormati pembicara dan peserta lain, serta tidak melakukan tindakan yang mengganggu jalannya acara.",
    "Dilarang merekam secara penuh (audio/video) untuk kepentingan komersial tanpa izin tertulis dari penyelenggara.",
    "Dilarang membawa kamera profesional untuk mendokumentasikan selama acara.",
    "Dengan menghadiri acara, peserta menyetujui bahwa dokumentasi berupa foto dan video selama acara dapat digunakan oleh penyelenggara untuk kebutuhan publikasi dan promosi.",
    "Penyelenggara berhak menolak atau mengeluarkan peserta yang melanggar aturan tanpa kewajiban pengembalian dana.",
    "Perubahan jadwal, pembicara, atau susunan acara dapat terjadi sewaktu-waktu demi kelancaran acara.",
    "Informasi resmi hanya diumumkan melalui kanal resmi ESCAPE @at.escape.",
];

export default function TermsSection() {
    return (
        <section className="bg-black py-20 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">

                    {/* LEFT — desktop */}
                    <div className="hidden lg:flex lg:w-5/12 lg:shrink-0 lg:flex-col">
                        <h2 className="mb-12 text-4xl font-bold leading-tight">
                            Syarat dan Ketentuan Escape Offline
                        </h2>
                        <div className="relative flex-1">
                            <Image
                                src="/images/quad-card.png"
                                alt="Escape cards"
                                width={567}
                                height={1034}
                                className="w-full h-full object-contain object-top"
                            />
                        </div>
                    </div>

                    {/* LEFT — mobile */}
                    <div className="lg:hidden">
                        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                            Syarat dan Ketentuan Escape Offline
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="flex-1">
                        <p className="mb-10 text-base leading-relaxed text-gray-300">
                            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                        </p>

                        <div className="flex flex-col">
                            {termsData.map((item, i) => (
                                <div key={i} className="flex gap-4 border-t border-white/20 py-5">
                                    <span className="w-7 shrink-0 text-sm text-gray-300">
                                        {i + 1}.
                                    </span>
                                    <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                                        {item}
                                    </p>
                                </div>
                            ))}
                            <div className="border-t border-white/20" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}