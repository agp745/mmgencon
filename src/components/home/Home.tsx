import { Card } from "./Card"
import { HomeIcon } from '@heroicons/react/24/outline'

function HowItWorks() {
    
    return (
        <section className="flex flex-col items-center gap-12">
            <h1 className="w-9/12 text-left text-4xl text-mmgreen-dark border-b-2 border-b-mmgreen-dark pb-2">
                how it works
            </h1>
            <Card 
                mainText="1. Review our services, to match your to do list."
                subText="Make sure we provide the service your looking for."
                link="/services"
                // Icon={<HomeIcon className='w-10 h-10 text-neutral-700' />}
            />
            <Card 
                mainText="2. email your scope of work, be detailed as possible."
                subText="please email your information: address, scope of work, and photos if possible."
                link={undefined}
                // Icon={<HomeIcon className='w-10 h-10 text-neutral-700' />}
            />
            <Card
                mainText="3. receive your free online quote."
                subText="we will review your request and send you a quote. once you accept your quote you will be added to our schedule and a retainer of 25% will be paid to hold your date."
                link={undefined}
                // Icon={<HomeIcon className='w-10 h-10 text-neutral-700' />}
            />
            <Card 
                mainText="4. we will show up on schedule and start work."
                subText="when we arrive on site we will confirm your work order and start working diligently. We will provide quality workmanship, materials, and professional service with a 6 month labor guarantee. This way you will know the work will be done right."
                link={undefined}
                // Icon={<HomeIcon className='w-10 h-10 text-neutral-700' />}
            />
            <Card 
                mainText="5. enjoy your final product."
                subText="feel good about having your to do list done. time to enjoy your home."
                link={undefined}
                // Icon={<HomeIcon className='w-10 h-10 text-neutral-700' />}
            />
        </section>
    )
}

export function Home() {

    return (
        <main className="pb-20">
        <section className="flex flex-col items-center text-center h-screen SHOW_CONTENT">
            <h1 className="mt-48 text-5xl text-center font-semibold">MM General Contracting & Handyman Services</h1>
            <div className="CERTIFICATIONS border-b-2 border-black">
                <h2 className="mt-9 text-4xl font-light">INSURED AND CERTIFED</h2>
                <div className="mt-1 flex justify-center gap-2 text-3xl font-black pb-2">
                    <div className="">HABE</div>
                    <div>•</div>
                    <div className="">MBE</div>
                    <div>•</div>
                    <div className="">HUB</div>
                </div>
            </div>
            <div className="mt-10 text-2xl intalic font-thin">Small and medium remodels and handyman services</div>
            <div className="mt-3 text-xl">We help with the upkeep of your most important investment, <span className="">your home</span></div>
        </section>
        <HowItWorks />
        </main>
    )
}