import { GalleryCardLeft, GalleryCardRight } from "../../components/galleryCard"

export function Gallery() {

    return (
        <main className="mt-20 text-center">
            <div className="flex flex-col items-center text-center bg-slate-100/90 p-5 text-4xl font-light border-2 border-black tracking-widest">
                <h1>Gallery</h1>
                <p className="text-xl">residential</p>
            </div>
            <section className="flex flex-col p-2 gap-2 justify-center">
                <GalleryCardLeft
                    src="/assets/mmgencon-pics/kitchen_living_renovation.png"
                    alt="Kitchen Renovation"
                    title="Kitchen Renovation"
                    location="Memorial - Houston, TX"
                    description=""
                />
                <GalleryCardRight
                    src="/assets/mmgencon-pics/woodlands_kitchen.jpeg"
                    alt="Woodlands Kitchen"
                    title="Kitchen Remodel"
                    location="The Woodlands, TX"
                    description=""
                />
                <GalleryCardLeft
                    src="/assets/mmgencon-pics/kingswood_bath.jpeg"
                    alt=""
                    title="Bathroom Remodel"
                    location="Kingswood, TX"
                    description=""
                />
                <GalleryCardRight
                    src="/assets/mmgencon-pics/memorial_bath.jpeg"
                    alt="Memorial City Bath"
                    title="Bathroom Remodel"
                    location="Memorial - Houston, TX"
                    description=""
                />
                <GalleryCardLeft
                    src="/assets/mmgencon-pics/katy_kitchen.jpeg"
                    alt="Katy Texas Kitchen remodel"
                    title="Kitchen Remodel"
                    location="Katy, TX"
                    description=""
                />
                <GalleryCardRight
                    src="/assets/mmgencon-pics/memorial_guest_kitchen.jpeg"
                    alt="Memorial Texas guest Kitchen"
                    title="Guest Kitchen Update"
                    location="Memorial - Houston, TX"
                    description=""
                />
                <GalleryCardLeft
                    src="/assets/mmgencon-pics/outdoor_kitchen.png"
                    alt="Cinco Ranch,Tx - outdoor kitchen"
                    title="Outdoor Kitchen"
                    location="Cinco Ranch, TX"
                    description=""
                />
                <GalleryCardRight
                    src="/assets/mmgencon-pics/family_room_renovation.png"
                    alt="family room renovation"
                    title="Family Room Renovation"
                    location="Houston, TX"
                    description=""
                />
                <GalleryCardLeft
                    src="/assets/mmgencon-pics/personal_kitchen.jpeg"
                    alt="Personal Kitchen Renovation"
                    title="Personal Kitchen Renovation"
                    location="Bear Creek - Houston, TX"
                    description=""
                />
            </section>
            <div className="flex flex-col items-center text-center bg-slate-100/90 p-5 text-4xl font-light border-2 border-black tracking-widest">
                <h1>Gallery</h1>
                <p className="text-xl">commercial</p>
            </div>
            <section className="flex flex-col p-2 gap-2 justify-center">
                <GalleryCardRight
                    src="/assets/mmgencon-pics/fbisd.jpeg"
                    alt="fort bend isd"
                    title="Fort Bend ISD"
                    location="Sugar Land, TX"
                    description=""
                />
                <GalleryCardLeft 
                    src="/assets/mmgencon-pics/fbisd_2.jpeg"
                    alt="fbsisd 2"
                    title="Fort Bend ISD"
                    location="Sugar Land, TX"
                    description="water fountains, tile, plumbing, and electrical"
                />
                <GalleryCardRight 
                    src="/assets/mmgencon-pics/dr_office_build_out.png"
                    alt="doctor office"
                    title="Office Building Build Out"
                    location="Houston, TX"
                    description=""
                />
                <GalleryCardLeft 
                    src="/assets/mmgencon-pics/txdot.jpeg"
                    alt="TXDOT Yoakum, Texas"
                    title="TXDOT"
                    location="Yoalum, TX"
                    description=""
                />
                <GalleryCardRight 
                    src="/assets/mmgencon-pics/fire_station.jpeg"
                    alt="Cypress Fire Station"
                    title="Fire Station"
                    location="Cypress, TX"
                    description=""
                />
                <GalleryCardLeft
                    src="/assets/mmgencon-pics/nike.png"
                    alt="Nike Store"
                    title="Nike Store"
                    location="City Centre - Houston, TX"
                    description=""
                />
                <GalleryCardRight 
                    src="/assets/mmgencon-pics/commercial_lighting.jpeg"
                    alt="commercial lighting"
                    title="Cieling and Lighting"
                    location="Houston, TX"
                    description=""
                />
                <GalleryCardLeft 
                    src="/assets/mmgencon-pics/office_floor.jpeg"
                    alt="retail office floor"
                    title="Retail Office Floor"
                    location="Houston, TX"
                    description=""
                />
                <GalleryCardRight
                    src="/assets/mmgencon-pics/meyerland.jpeg"
                    alt="meyerland"
                    title="Office Build Out"
                    location="Meyerland - Houston, TX"
                    description=""
                />
            </section>
        </main>
    )
}