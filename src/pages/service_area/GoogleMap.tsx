'use client'

import { useState } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api'
import type { Place } from 'lib/types';
import { locations } from '../../lib/locations';

export function ServiceMap() {

    const [selectedPlace, setSelectedPlace] = useState<Place | undefined>(undefined)

    //college station
    const center = {
        lat: 30.627977,
        lng: -96.334407
    };

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-maps-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    })
    if (loadError) console.log(loadError)

    const markers = locations.map((place) => {
        return (
            <MarkerF 
                key={JSON.stringify(place.coordinates)}
                position={place.coordinates}
                onClick={() => {
                    place === selectedPlace ? setSelectedPlace(undefined) : setSelectedPlace(place)
                }}
            />
        )
    })

    //navbar=3rem footer=7rem
    return (
        <section className='w-screen h-[calc(100vh-10rem)] mt-20'>
        {isLoaded &&
            <GoogleMap
                zoom={7}
                center={center}
                mapContainerClassName='w-full h-full'
                
            >
                {markers}
                {selectedPlace && 
                    <InfoWindowF 
                        position={selectedPlace.coordinates}
                        zIndex={1}
                        onCloseClick={() => setSelectedPlace(undefined)}
                        options={{
                            pixelOffset: new google.maps.Size(0, -40)
                        }}
                    >
                        <div 
                            className='bg-white flex flex-col mix-w-10 h-auto p-1'>
                            <div className='font-semibold'>{selectedPlace.address}</div>
                            <div>{selectedPlace.description}</div>
                        </div>
                    </InfoWindowF>
                }
            </GoogleMap>
        }
        
        </section>
    )
}