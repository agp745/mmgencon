
import { Slideshow } from "./components/slideshow"

export interface MainHero {
    photo: `/assets/mmgencon-pics/kitchen_dining_room.png` | '/assets/mmgencon-pics/dr_office_build_out.png'
    type: 'residential' | 'commercial'
}

export default function Test() {

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
        <main className="h-screen w-screen relative">
            <h1 className="">"Making Spaces Better"</h1>
            <Slideshow slides={heros} />
        </main>
    )
}