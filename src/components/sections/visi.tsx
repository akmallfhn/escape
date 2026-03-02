import Image from "next/image";
import LogoScroll from "../ui/logo-stripe";

const misiItems = [
    {
        icon: <Image src="/icons/suara.png" alt="Suara Tanpa Batas" width={40} height={40} />,
        title: "Suara Tanpa Batas",
        description: "Banyak orang menyimpan pertanyaan mendalam tentang spiritualitas — tapi tidak tahu harus bertanya kepada siapa, atau takut dianggap sesat karena bertanya. Escape hadir untuk mengubah itu. Kami menjadi perwakilan dari setiap rasa ingin tahu masyarakat, dan menyampaikannya lewat percakapan yang jujur, berbobot, serta tetap berpijak pada sudut pandang Islam.",
    },
    {
        icon: <Image src="/icons/chat.png" alt="Berani Terus Bertanya" width={40} height={40} />,
        title: "Berani Terus Bertanya",
        description: "Kami percaya bahwa keimanan yang kuat bukan lahir dari kepatuhan yang buta, melainkan dari pemahaman yang terus diasah. Melalui pendekatan lateral thinking dan semangat always question everything, Escape mengajak audiens untuk tidak hanya menerima — tapi juga menelaah, menganalisis, dan pada akhirnya menemukan keyakinan yang lebih dalam dan lebih kokoh dari sebelumnya.",
    },
    {
        icon: <Image src="/icons/question.png" alt="Aman Untuk Resah" width={40} height={40} />,
        title: "Aman Untuk Resah",
        description: "Keresahan tentang iman itu manusiawi — dan ia tidak seharusnya dipendam sendirian. Escape ingin menjadi ruang di mana siapa pun bisa duduk, bernapas, dan membicarakan pertanyaan-pertanyaan spiritualnya tanpa rasa takut dihakimi. Bukan untuk menggurui, bukan untuk menvonis — tapi untuk berpikir bersama, dengan kepala dingin dan hati yang terbuka.",
    },
];

export default function Visi() {
    return (
        <section className="bg-black px-6 py-20 text-white">
            <div className="mx-auto max-w-4xl">
                {/* Visi */}
                <div className="mb-20 text-center">
                    <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">Visi Escape</h2>
                    <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-gray-300 sm:text-lg">
                        Menjadi ruang diskusi terkait spiritualitas melalui sudut pandang islam berdasarkan
                        pertanyaan-pertanyaan sederhana berdasarkan logika yang selama ini terpendam di
                        dalam kepala masyarakat
                    </p>
                </div>

                {/* Misi */}
                <div>
                    <h2 className="mb-12 text-center text-3xl font-semibold sm:text-4xl">Misi Escape</h2>
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
                        {misiItems.map((item) => (
                            <div key={item.title} className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                                    {item.icon}
                                </div>
                                <h3 className="mb-4 text-xl font-bold sm:text-2xl">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}