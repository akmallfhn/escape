import Image from "next/image";

export default function RedStripe() {
    return (
        <div className="relative overflow-hidden bg-linear-to-r from-[#741E20] to-[#DA393C] py-2 md:py-2">
                <div className="mx-0 flex max-w-7xl items-center justify-between px-4 lg:px-8">
                    {/* Left Icons */}
                    <div className="flex items-center gap-2 md:gap-12 lg:gap-16">
                        <div className="flex size-9 items-center justify-center md:h-20 md:w-20 lg:h-20 lg:w-20">
                            <Image
                                src="/icons/Group.png"
                                alt=""
                                className="h-full w-full object-contain"
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="size-10 items-center justify-center md:flex md:h-20 md:w-20 lg:h-20 lg:w-20">
                            <Image
                                src="/icons/20 26.png"
                                alt=""
                                className="h-full w-full object-contain"
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className=" size-9 items-center justify-center md:h-20 md:w-20 lg:flex lg:h-20 lg:w-20">
                            <Image
                                src="/icons/Vector.png"
                                alt=""
                                className="h-full w-full object-contain"
                                width={80}
                                height={80}
                            />
                        </div>
                    </div>

                    {/* Center Text */}
                    <div className="text-center">
                        <h2 className="text-xs font-normal text-white md:text-lg lg:text-xl">
                            <span className="font-bold">ESCAPE 2026:</span>
                            <br />
                            LATERAL THINKING
                        </h2>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-2 md:gap-12 lg:gap-16">
                        <div className="size-9 items-center justify-center md:h-20 md:w-20 lg:flex lg:h-20 lg:w-20">
                            <Image
                                src="/icons/Vector.png"
                                alt=""
                                className="h-full w-full object-contain"
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="size-9 items-center justify-center md:flex md:h-20 md:w-20 lg:h-20 lg:w-20">
                            <Image
                                src="/icons/ESC.png"
                                alt=""
                                className="h-full w-full object-contain"
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="flex size-9 items-center justify-center md:h-20 md:w-20 lg:h-20 lg:w-20">
                            <Image
                                src="/icons/Group.png"
                                alt=""
                                className="h-full w-full object-contain"
                                width={80}
                                height={80}
                            />
                        </div>
                    </div>
                </div>
            </div>
    )
}