import { HowItWorks } from "./HowItWorks"
import { Slideshow } from "../../components/slideshow"

export interface MainHero {
    photo: `/assets/mmgencon-pics/kitchen_dining_room.png` | '/assets/mmgencon-pics/dr_office_build_out.png'
    type: 'residential' | 'commercial'
}

export function Home() {

    const heros: MainHero[] = [
        {
            photo: '/assets/mmgencon-pics/kitchen_dining_room.png',
            type: 'residential',
        },
        {
            photo:'/assets/mmgencon-pics/dr_office_build_out.png',
            type: 'commercial',
        },
    ]

    return (
        <main className="min-h-screen min-w-screen SHOW_CONTENT">
            <Slideshow slides={heros} />
            <HowItWorks />
        </main>
    )
}