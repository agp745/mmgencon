import { useState } from "react"

import { Card } from "./Card"
import { 
    HomeIcon,
    WrenchScrewdriverIcon,
    ArrowDownTrayIcon,
    BanknotesIcon,
    CheckIcon,
    ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline'

export function HowItWorks() {

    const [selectedService, setSelectedService] = useState<'residential' | 'commercial'>('residential')

    let styles = 'font-semibold text-xl text-neutral-400 cursor-pointer'
    let selectedStyles = 'font-semibold text-xl text-blue-500 underline cursor-default'

    return (
        <section className="flex flex-col items-center pb-10 py-1">
            <h1 className="w-9/12 font-light text-center text-4xl text-slate-600 border-b-2 border-slate-600 py-2">
                {/* how it works */}
                services
            </h1>
            <div className="flex gap-3 mt-2">
                <h2 
                    onClick={() => setSelectedService('residential')}
                    className={selectedService === 'residential' ? selectedStyles : styles }
                >
                    Residential
                </h2>
                <h2 
                    onClick={() => setSelectedService('commercial')}
                    className={selectedService === 'commercial' ? selectedStyles : styles }
                >
                    Commercial
                </h2>
            </div>
            {selectedService === 'residential' && (
            <div className="SHOW_CONTENT flex flex-col items-center gap-7 py-10">
                <Card 
                    mainText={<div>1. Ready to get your <span className="font-bold">free</span> quote?</div>}
                    subText={<div>Click <span className="font-light italic">Get a Quote</span> in the top right or click <span className="text-blue-400 underline">HERE</span> to fill out our form</div>}
                    link="https://form.jotform.com/230184112380141"
                    Icon={<BanknotesIcon className='w-10 h-10 text-neutral-700' />}
                />
                <Card 
                    mainText="2. Submit your request."
                    subText="Be as detailed as possible"
                    link={undefined}
                    Icon={<ArrowDownTrayIcon className='w-10 h-10 text-neutral-700' />}
                />
                <Card
                    mainText="3. Receive your free online quote."
                    subText="We will review your request and send you a quote. Upon accepting your quote, you will be added to our schedule."
                    link={undefined}
                    Icon={<CheckIcon className='w-10 h-10 text-neutral-700' />}
                />
                <Card 
                    mainText="4. We will show up on schedule and start work."
                    subText="When our pro's arrive we will confirm your work request and receive your deposit for materials and start the work. We will provide quality workmanship, materials, and professional service with a 6 month labor guarantee. This way you will know the work will be done right."
                    link={undefined}
                    Icon={<WrenchScrewdriverIcon className='w-10 h-10 text-neutral-700' />}
                />
                <Card 
                    mainText="5. Enjoy your final product."
                    subText="Feel good about having your to-do list done. Time to enjoy your home."
                    link={undefined}
                    Icon={<HomeIcon className='w-10 h-10 text-neutral-700' />}
                />
                <div className="flex">
                    <p>click</p>&nbsp;
                    <a href="/services" className="flex text-blue-400 underline hover:text-blue-500 transition-colors duration-75 ease-in">here <ArrowTopRightOnSquareIcon className="w-4 h-4 self-end mb-1" /></a>&nbsp;
                    <p>for more info</p>
                </div>
            </div>
            )}
            {selectedService === 'commercial' && (
                <div className="SHOW_CONTENT flex flex-col items-center gap-7 py-10">
                    <Card 
                        mainText="Tell us what you would like to get done."
                        subText={<a className="underline text-blue-400 font-light hover:text-blue-500 transition-colors duration-75 ease-in" href="mailto: mike.a@mmgencon.com">mike.a@mmgencon.com</a>}
                    />
                    <Card 
                        mainText="Our on-site management crews are ready to serve you. Lets talk about your next project."
                        subText="If you need a GC, to build a space for your business, we handle all construction services from tenant improvements to new builds"
                    />
                    {/* <div className="text-center text-lg w-1/3">If you need a GC, to build a space for your business, we handle all construction services from tenant improvements to new builds. Our on-site management crews are ready to serve you. Lets talk about your next project.</div> */}
                    <div className="flex">
                        <p>click</p>&nbsp;
                        <a href="/services" className="flex text-blue-400 underline hover:text-blue-500 transition-colors duration-75 ease-in">here <ArrowTopRightOnSquareIcon className="w-4 h-4 self-end mb-1" /></a>&nbsp;
                        <p>for more info</p>
                </div>
                </div>
            )}
        </section>
    )
}