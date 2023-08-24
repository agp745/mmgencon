

export function Footer() {
    return (
        <footer className="">
            <section className="w-full h-16 bg-mmlight"></section>
            <section className="w-full min-h-[7rem] bg-mmdark flex items-center justify-between px-10">

                <div className="flex flex-col text-lg text-slate-700">
                    <p>Houston, TX</p>
                    <p>(713) 319-7492</p>
                    <p>mike.a@mmgencon.com</p>
                </div>

                <img src="/assets/logo-no_background.png" alt="mmgencon logo" className="w-14"/>

                <div className="flex gap-2">
                    <a 
                        href="https://www.linkedin.com/in/michael-morales-4313343a/" 
                        target="_blank"
                        className="text-slate-700 underline hover:text-slate-800 transition-colors duration-75 ease-in"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="https://www.yelp.com/biz/mm-general-contracting-and-handyman-services-katy" 
                        target="_blank"
                        className="text-slate-700 underline hover:text-slate-800 transition-colors duration-75 ease-in"
                    >
                        Yelp
                    </a>
                    <a 
                        href="https://nextdoor.com/pages/mm-general-contracting-houston-tx/" 
                        target="_blank"
                        className="text-slate-700 underline hover:text-slate-800 transition-colors duration-75 ease-in"
                    >
                        NextDoor
                    </a>
                </div>

            </section>
        </footer>
    )
}

