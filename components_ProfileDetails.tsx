import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Profile } from '../types'
import Map from './Map'

interface ProfileDetailsProps {
  profiles: Profile[]
}

export default function ProfileDetails({ profiles }: ProfileDetailsProps) {
  const { id } = useParams<{ id: string }>()
  const [showMap, setShowMap] = useState(false)

  const profile = profiles.find(p => p.id === Number(id))

  if (!profile) {
    return <div>Profile not found</div>
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to profiles</Link>
      <div className="flex flex-col md:flex-row gap-6">
        <img src={profile.photo} alt={profile.name} className="w-full md:w-1/3 h-64 object-cover rounded-lg" />
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-4">{profile.name}</h1>
          <p className="text-gray-600 mb-4">{profile.description}</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p>Email: {profile.contact.email}</p>
            <p>Phone: {profile.contact.phone}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Interests</h2>
            <ul className="list-disc list-inside">
              {profile.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => setShowMap(!showMap)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            {showMap ? 'Hide Map' : 'Show Map'}
          </button>
        </div>
      </div>
      {showMap && (
        <div className="mt-6">
          <Map 
            lat={profile.address.coordinates.lat} 
            lng={profile.address.coordinates.lng} 
            name={profile.name}
          />
        </div>
      )}
    </div>
  )
}