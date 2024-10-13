import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Profile } from '../types'
import ProfileCard from './ProfileCard'
import SearchBar from './SearchBar'

interface ProfileListProps {
  profiles: Profile[]
}

export default function ProfileList({ profiles }: ProfileListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')

  const filteredProfiles = profiles.filter(profile => 
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === '' || profile.address.city.toLowerCase() === filter.toLowerCase())
  )

  const cities = Array.from(new Set(profiles.map(p => p.address.city)))

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profiles</h1>
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
        cities={cities}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredProfiles.map(profile => (
          <Link key={profile.id} to={`/profile/${profile.id}`}>
            <ProfileCard profile={profile} />
          </Link>
        ))}
      </div>
    </div>
  )
}