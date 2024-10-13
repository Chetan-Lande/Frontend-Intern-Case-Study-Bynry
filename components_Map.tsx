import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

interface MapProps {
  lat: number
  lng: number
  name: string
}

export default function Map({ lat, lng, name }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
      version: 'weekly',
    })

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom: 12,
        })

        new google.maps.Marker({
          position: { lat, lng },
          map,
          title: name,
        })
      }
    })
  }, [lat, lng, name])

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
}