import Image from "next/image";

export default function ContactSection() {
    return(
        <section className="bg-black py-16 md:py-24">
                <div className="mx-8 max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Left Column - Text Content */}
                        <div className="max-w-2xl">
                            <h2 className="mb-4 text-3xl leading-tight font-normal text-white uppercase md:text-5xl lg:text-5xl">
                                Have an interesting
                                <br />
                                question about
                                <br />
                                <span className="text-white">
                                    Collaboration?
                                </span>
                            </h2>

                            <p className="mb-8 text-base font-normal text-white md:text-sm">
                                Buat kalian yang mau kolaborasi bareng kita,
                                langsung aja
                                <br />
                                kirim proposal kolaborasinya ke sini!
                            </p>

                           
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hi.atescape@gmail.com&su=Ajakan%20Kolaborasi%20dan%20Sponsorship%20Bersama%20Escape&body=Halo%20Tim%20Escape,%0A%0APerkenalkan,%20saya%20[Nama%20Anda]%20dari%20[Nama%20Perusahaan%20/%20Brand].%0AKami%20ingin%20mengajak%20Escape%20untuk%20berkolaborasi%20dalam%20bentuk%20sponsorship.%20Berikut%20gambaran%20singkat%20mengenai%20rencana%20kerja%20sama%20yang%20kami%20ajukan:%0A%0A-%20Nama%20Perusahaan%20/%20Brand:%20%0A-%20PIC%20/%20Kontak:%20%0A-%20Jenis%20Kolaborasi%20yang%20Diajukan:%20(Sponsorship,%20Media%20Partner,%20Event%20Support,%20dll)%0A-%20Bentuk%20Dukungan%20yang%20Kami%20Tawarkan%20kepada%20Escape:%20%0A-%20Bentuk%20Kolaborasi%20atau%20Dukungan%20yang%20Kami%20Harapkan%20dari%20Escape:%20%0A-%20Benefit%20untuk%20Escape:%20%0A-%20Periode%20atau%20Tanggal%20Kegiatan:%20%0A-%20Link%20Deck%20/%20Proposal%20(jika%20ada):%20%0A%0AKami%20sangat%20terbuka%20untuk%20mendiskusikan%20bentuk%20kerja%20sama%20yang%20paling%20sesuai%20dengan%20arah%20dan%20strategi%20Escape.%0A%0ATerima%20kasih%20atas%20perhatian%20dan%20waktunya.%0AKami%20menantikan%20kesempatan%20untuk%20berkolaborasi%20dengan%20Escape.%0A%0ASalam%20hangat,%0A[Nama%20Anda]%0A[Perusahaan%20/%20Divisi]%0A[Nomor%20Kontak]" className="rounded-lg bg-[#DA393C] px-12 py-4 text-base font-bold text-white uppercase transition-colors duration-300 hover:bg-[#bc3133]" target="_blank">Contact Us !</a>
                            
                        </div>

                        {/* Right Column - Phone Mockup */}
                        <div className="relative flex justify-center lg:justify-end">
                            <Image
                                src="/images/KartuLuar.png"
                                alt=""
                                className="w-full md:w-2/3  lg:ml-auto"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </section>
    )
}