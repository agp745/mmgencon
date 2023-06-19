
function HowItWorks() {
    
    return (
        <>
            <h1>HOW IT WORKS</h1>
        </>
    )
}

export function Home() {

    return (
        <>
        <section className="flex flex-col items-center text-center h-screen">
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
        </>
    )
}