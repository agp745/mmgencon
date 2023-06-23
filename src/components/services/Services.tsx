import { useState } from "react"
import { handymanServices, remodelsRenovations } from "@lib/services"
import type { Service } from "@lib/types"

interface SectionHeaderProps {
    title: string,
    subtitle: string,
}

interface SectionContentProps {
    serviceArray: Service[]
}

type ServicesSort = [Service[], Service[]]

function SectionHeading({ title, subtitle }: SectionHeaderProps) {
    return (
        <div className="flex flex-col items-start w-full font-light border-b-mmgreen border-b">
            <h2 className="text-2xl">{title}</h2>
            <h3 className="text-lg italic">{subtitle}</h3>
        </div>
    )
}

function SectionContent({ serviceArray }: SectionContentProps ) {

    // const offeredServices = serviceArray.filter((service) => service.isOffered)
    // const notOffered = serviceArray.filter((service) => !service.isOffered) 

    const [offeredServices, notOfferedServices]: ServicesSort = serviceArray.reduce(
        (result: ServicesSort, service) => {
            const [offered, notOffered] = result
            if (service.isOffered) offered.push(service)
            else notOffered.push(service);
            return result;
        },
        [[], []]
    )

    console.log(offeredServices)
    console.log(notOfferedServices)


    return (
    <div className="flex justify-between w-full">
        <div className="flex flex-col items-center">
            <h4 className="text-gray-400 pl-3">What we offer</h4>
        </div>
        <div>
            <h4 className="text-gray-400 pr-3">What we DON'T offer</h4>
        </div>
    </div>
    )
}

export function Services() {

    const [handymanServicesFilter, setHandymanServicesFilter] = useState<String>('')
    const [remodelServicesFilter, setRemodelServicesFilter] = useState<String>('')

    const handleInput = (service: String, setService: React.Dispatch<React.SetStateAction<String>>) => {
        setService(service)
    }

    return (
        <main className="flex flex-col items-center bg-mmgreen-light h-96 mt-12 px-3">
            <h1>SERVICES</h1>
            <SectionHeading 
                title="Handyman Services"
                subtitle="interior services"
            />
            <input 
                type="text" 
                name="handymanServices"
                placeholder="filter services"
                onChange={() => handleInput(handymanServicesFilter, setHandymanServicesFilter)}
                className="px-2 rounded-sm mt-2"
            />
            {/* <SectionContent serviceArray={handymanServices} /> */}
            <SectionContent serviceArray={handymanServices}/>
            <SectionHeading 
                title="Remodels and Renovations"
                subtitle="Kitchen and Bath"
            />
            <input 
                type="text" 
                name="handymanServices"
                placeholder="filter services"
                onChange={() => handleInput(remodelServicesFilter, setRemodelServicesFilter)}
                className="px-2 rounded-sm mt-2"
            />
            {/* <SectionContent /> */}
        </main>
    )
}