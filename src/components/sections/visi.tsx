import Image from "next/image";
import LogoScroll from "../ui/logo-stripe";

const misiItems = [
    {
        icon: <Image src="/icons/think.png" alt="Suara Tanpa Batas" width={40} height={40} />,
        title: "Logical Thinking Space",
        description: "Membangun ruang diskusi yang mendorong audiens memahami spiritualitas dan Islam dengan pendekatan logis, sederhana, dan relevan.",
    },
    {
        icon: <Image src="/icons/chat.png" alt="Berani Terus Bertanya" width={40} height={40} />,
        title: "Space to Ask",
        description: "Membuka ruang bagi siapa pun untuk mengungkapkan pertanyaan, keresahan, dan rasa penasaran yang selama ini terpendam.",
    },
    {
        icon: <Image src="/icons/suara.png" alt="Aman Untuk Resah" width={40} height={40} />,
        title: "Safe Space",
        description: "Menghadirkan suasana diskusi yang aman, jujur, dan tidak menghakimi untuk membahas hal-hal yang sensitif maupun tabu.",
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