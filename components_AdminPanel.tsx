import { useState } from 'react'
import { Profile } from '../types'

interface AdminPanelProps {
  profiles: Profile[]
  addProfile: (profile: Profile) => void
  editProfile: (profile: Profile) => void
  deleteProfile: (id: number) => void
}

export default function AdminPanel({ profiles, addProfile, editProfile, deleteProfile }: AdminPanelProps) {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null)
  const [formData, setFormData] = useState<Partial<Profile>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedProfile) {
      editProfile({ ...selectedProfile, ...formData } as Profile)
    } else {
      addProfile(formData as Profile)
    }
    setSelectedProfile(null)
    setFormData({})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          {selectedProfile ? 'Update Profile' : 'Add Profile'}
        </button>
      </form>
      <h2 className="text-2xl font-bold mb-4">Existing Profiles</h2>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id} className="mb-2 flex justify-between items-center">
            <span>{profile.name}</span>
            <div>
              <button
                onClick={() => setSelectedProfile(profile)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProfile(profile.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}