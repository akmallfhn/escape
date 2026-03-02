import Image from "next/image";

export default function Talents() {
     const teamMembers = [
        {
            name: 'FELIX SIAUW',
            image: '/images/fs.png',
            gradientFrom: '#0B3D4C',
            gradientTo: '#198EB2',
            instagram: 'https://www.instagram.com/felix.siauw',
        },
        {
            name: 'RAYMOND CHIN',
            image: '/images/rc.png',
            gradientFrom: '#852628',
            gradientTo: '#EB4447',
            instagram: 'https://www.instagram.com/raymondchins',
        },
        {
            name: 'KOIYO CABE',
            image: '/images/kc.png',
            gradientFrom: '#0B3D4C',
            gradientTo: '#198EB2',
            instagram: 'https://www.instagram.com/koiyocabe',
        },
        {
            name: 'VEREN ORNELA',
            image: '/images/vo.png',
            gradientFrom: '#852628',
            gradientTo: '#EB4447',
            instagram: 'https://www.instagram.com/verren.ornela',
        },
    ];
    return(
        <section className="bg-black py-0 md:py-0">
                <div className="mx-auto max-w-7xl px-0 lg:px-0">
                    {/* Team Grid - No gaps between cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {teamMembers.map((member, index) => (
                            <a
                                key={index}
                                className="group relative overflow-hidden"
                                href={member.instagram}
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{
                                    background: `linear-gradient(to bottom, ${member.gradientFrom}, ${member.gradientTo})`,
                                }}
                            >
                                {/* Image */}
                                <div className="aspect-3/4 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        className="h-full w-full object-cover"
                                        width={375}
                                        height={500}
                                    />
                                </div>

                                {/* Blurred div that slides from bottom to top */}
                                <div className="flex flex-col-reverse lg:flex-col absolute inset-0 lg:translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-[70%]">
                                    <div className="h-3/10 lg: w-full rounded-t-2xl backdrop-blur-md"></div>
                                </div>

                                {/* Text overlay - always on top, not blurred */}
                                <div className="absolute right-0 -bottom-6 lg:-bottom-3 left-0 z-10 lg:translate-y-full p-6 pb-8 transition-transform duration-500 ease-out group-hover:translate-y-0">
                                    <h3 className="text-2xl leading-tight font-bold text-white uppercase md:text-3xl lg:text-4xl">
                                        {member.name
                                            .split(' ')
                                            .map((word, i) => (
                                                <span key={i}>
                                                    {word}
                                                    {i <
                                                        member.name.split(' ')
                                                            .length -
                                                            1 && <br />}
                                                </span>
                                            ))}
                                    </h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
             </section>
    )
}