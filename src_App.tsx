import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import ProfileList from './components/ProfileList'
import ProfileDetails from './components/ProfileDetails'
import AdminPanel from './components/AdminPanel'
import { Profile } from './types'
import profileData from './data/profiles.json'

export default function App() {
  const [profiles, setProfiles] = useState<Profile[]>(profileData)

  const addProfile = (profile: Profile) => {
    setProfiles([...profiles, { ...profile, id: profiles.length + 1 }])
  }

  const editProfile = (updatedProfile: Profile) => {
    setProfiles(profiles.map(p => p.id === updatedProfile.id ? updatedProfile : p))
  }

  const deleteProfile = (id: number) => {
    setProfiles(profiles.filter(p => p.id !== id))
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ProfileList profiles={profiles} />} />
            <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
            <Route 
              path="/admin" 
              element={
                <AdminPanel 
                  profiles={profiles}
                  addProfile={addProfile}
                  editProfile={editProfile}
                  deleteProfile={deleteProfile}
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}