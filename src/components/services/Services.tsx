import { useState } from "react"
import { handymanServices, remodelsRenovations } from "@lib/services"
import { SectionHeading, HandymanSection, RemodelRennovationsSection } from './Sections'

export function Services() {

    const [handymanServicesFilter, setHandymanServicesFilter] = useState<String>('')
    const [remodelServicesFilter, setRemodelServicesFilter] = useState<String>('')

    const handleInput = (service: String, setService: React.Dispatch<React.SetStateAction<String>>) => {
        setService(service)
    }

    return (
        <main className="flex flex-col items-center bg-mmgreen-light min-h-96 mt-12 px-3">
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
            <HandymanSection serviceArray={handymanServices}/>
            <SectionHeading 
                title="Remodels and Rennovations"
                subtitle="Kitchen and Bath"
            />
            <input 
                type="text" 
                name="handymanServices"
                placeholder="filter services"
                onChange={() => handleInput(remodelServicesFilter, setRemodelServicesFilter)}
                className="px-2 rounded-sm mt-2"
            />
            <RemodelRennovationsSection serviceArray={remodelsRenovations}/>
        </main>
    )
}