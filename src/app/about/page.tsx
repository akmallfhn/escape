import AboutHero from "@/components/sections/about-hero";
import History from "@/components/sections/history";
import MeetTalent from "@/components/sections/meet-talents";
import Talents from "@/components/sections/tallents";
import Timeline from "@/components/sections/timeline";
import Visi from "@/components/sections/visi";
import LogoScroll from "@/components/ui/logo-stripe";
export const dynamic = 'force-static';

export default function About() {
    return (
        <div className="bg-black text-white overflow-hidden">
            <AboutHero />

            <Visi />

            {/* <LogoScroll /> */}

            <History />

            <Timeline />

            <Talents />
            
            <MeetTalent />

            {/* <LogoScroll /> */}

        </div>
    )
}