// import { useState } from "react"
// import { handymanServices, remodelsRenovations } from "@lib/services"
import type { Service, ServiceType } from "@lib/types"

interface SectionHeaderProps {
    title: string,
    subtitle: string,
}

interface SectionContentProps {
    serviceArray: Service[]
}

interface ServiceByTypeProps {
    services: Service[],
    serviceType: ServiceType,
}

type ServicesSort = [Service[], Service[]]

export function SectionHeading({ title, subtitle }: SectionHeaderProps) {
    return (
        <div className="flex flex-col items-start w-full font-light border-b-mmgreen border-b">
            <h2 className="text-2xl">{title}</h2>
            <h3 className="text-lg italic">{subtitle}</h3>
        </div>
    )
}

function ServicesByType({ services, serviceType }: ServiceByTypeProps ) {

    const mappedServiceType = (serviceType: ServiceType) => {
        const filter = services.filter((service) => service.type === serviceType) 

        return filter.map((service) => {
            return (
                <div
                    key={`${service.service}-${service.type}`}
                    className=""
                >
                    <div>{service.service}</div>
                </div>
            )
        })
    }

    return (
        <>
        {serviceType !== 'handyman-not_offered' && serviceType !== 'remodels-not_offered' &&
        <div className="text-gray-700 text-lg underline uppercase">{serviceType}</div>}
        {mappedServiceType(serviceType)}
        </>
    )
}

export function HandymanSection({ serviceArray }: SectionContentProps ) {

    const [offeredServices, notOfferedServices]: ServicesSort = serviceArray.reduce(
        (result: ServicesSort, service) => {
            const [offered, notOffered] = result
            if (service.isOffered) offered.push(service)
            else notOffered.push(service);
            return result;
        },
        [[], []]
    )

    return (
    <div className="flex justify-between w-full">
        <div className="flex flex-col items-start">
            <h4 className="text-gray-400 pl-3 text-center">What we offer</h4>
            <ServicesByType services={offeredServices} serviceType="repairs" />
            <ServicesByType services={offeredServices} serviceType="minor plumbing"/>
            <ServicesByType services={offeredServices} serviceType="minor electrical" />
            <ServicesByType services={offeredServices} serviceType="installations" />
            <ServicesByType services={offeredServices} serviceType="other" />
        </div>
        <div>
            <h4 className="text-gray-400 pr-3 text-center">What we DON'T offer</h4>
            <ServicesByType services={notOfferedServices} serviceType={"handyman-not_offered"} />
        </div>
    </div>
    )
}

export function RemodelRennovationsSection({ serviceArray }: SectionContentProps ) {

    const [offeredServices, notOfferedServices]: ServicesSort = serviceArray.reduce(
        (result: ServicesSort, service) => {
            const [offered, notOffered] = result
            if (service.isOffered) offered.push(service)
            else notOffered.push(service);
            return result;
        },
        [[], []]
    )

    return (
    <div className="flex justify-between w-full">
        <div className="flex flex-col items-start">
            <h4 className="text-gray-400 pl-3 text-center">What we offer</h4>
            <ServicesByType services={offeredServices} serviceType="kitchen and bath" />
        </div>
        <div>
            <h4 className="text-gray-400 pr-3 text-center">What we DON'T offer</h4>
            <ServicesByType services={notOfferedServices} serviceType={"remodels-not_offered"} />
        </div>
    </div>
    )
}