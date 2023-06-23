'use client'

import { GoogleMap, useLoadScript } from '@react-google-maps/api'

export function ServiceMap() {

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyADj0us_HRQSzDsm8WQ0cqAz-80n8H0A2A'
    })
    

    return (
        <section>
            
            <GoogleMap
                mapContainerClassName='w-full h-2/3'
                center={center}
                zoom={10}
            >
            </GoogleMap>
        
        </section>
    )
}