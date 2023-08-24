import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export function About() {

    const firstLetterStyle = 'first-letter:text-7xl first-letter:font-bold first-letter:text-sky-200 first-letter:mr-3 first-letter:float-left'

    return (
        <main className="flex flex-col bg-slate-800 overflow-hidden">
            <div className=" w-full min-h-[95vh] bg-slate-800 flex flex-col justify-center items-center">
                <div className="sm:w-[70%] w-[90%] -mt-10 relative">
                    <img 
                        src="/assets/mmgencon-pics/tips_kitchen_remodel.png"
                        alt="kitchen remodel"
                    />
                    <div className="absolute -bottom-7 right-0 left-0 flex justify-center">
                            <div className="bg-slate-100/90 p-5 text-4xl font-light border-2 border-black tracking-widest">About Us</div>
                    </div>
                </div>
                <section className="text-white sm:w-1/2 w-11/12 mt-12 sm:text-lg text-base pb-5">
                    <p className={firstLetterStyle}>MM General Contracting's beginnings trace back to its establishment as a residential remodeling company. Evolving over time, we have successfully ventured into the commercial sector while remaining dedicated to fulfilling the unique needs of our private clients. Our extensive portfolio encompasses accomplishments in both private and commercial realms. Notably, we have undertaken numerous private projects and have also achieved distinction in the commercial arena.</p>
                    <br />
                    <p className="text-xl">Our noteworthy commercial endeavors include:</p>
                    <ul className="list-none flex flex-col justify-center items-center gap-2 mt-2">
                        <li><span className="font-bold">Texas Department of Transportation</span> - Yoakum, TX</li>
                        <li><span className="font-bold">Cypress Fire Station</span> - Cypress, TX</li>
                        <li><span className="font-bold">Nike Air Store @ CITICENTRE</span> - Houston, TX</li>
                        <li><span className="font-bold">Fountain Project</span> - Fort Bend ISD</li>
                        <li><span className="font-bold">Gessner Kiddie Kollege</span> - Houston, TX</li>
                    </ul>
                </section>
                <section className="min-h-[50vh] flex flex-col justify-center items-center text-slate-200 sm:pl-0 pl-3">
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-5xl font-light">References</h3>
                        <p className="text-slate-400 text-lg">Our services have created business relationships that have grown into more than just business.</p>
                        <div className="flex flex-col">
                            <p className="text-white text-xl font-semibold">Rodney Best</p>
                            <a 
                                href="https://rbgeneralcontractor.com/"
                                target="_blank"
                                className="flex gap-1 text-blue-400 text-lg underline hover:text-blue-500 transition-colors duration-75 ease-in"
                            >
                                RB General Contractor LLC <ArrowTopRightOnSquareIcon className="w-4 h-4 self-end mb-1" />
                            </a>
                        </div>
                        <div className="text-white flex flex-col">
                            <p className="text-xl font-semibold">Cristian Meraz</p>
                            <a 
                                href="https://www.merazenterprisegroup.com/"
                                target="_blank"
                                className="flex gap-1 text-blue-400 text-lg underline hover:text-blue-500 transition-colors duration-75 ease-in"
                            >
                                Meraz Enterprise Group <ArrowTopRightOnSquareIcon className="w-4 h-4 self-end mb-1" />
                            </a>
                        </div>
                        <div className="text-white flex flex-col">
                            <p className="text-xl font-semibold">Willyann Paz & Chris Jay</p>
                            <a 
                                href="https://econtractors.com/"
                                target="_blank"
                                className="flex gap-1 text-blue-400 text-lg underline hover:text-blue-500 transition-colors duration-75 ease-in"
                            >
                                E contractors <ArrowTopRightOnSquareIcon className="w-4 h-4 self-end mb-1" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}