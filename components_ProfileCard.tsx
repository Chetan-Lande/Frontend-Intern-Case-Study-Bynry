import { Profile } from '../types'

interface ProfileCardProps {
  profile: Profile
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={profile.photo} alt={profile.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
        <p className="text-gray-600 mb-2">{profile.address.city}, {profile.address.state}</p>
        <p className="text-sm text-gray-500">{profile.description}</p>
      </div>
    </div>
  )
}