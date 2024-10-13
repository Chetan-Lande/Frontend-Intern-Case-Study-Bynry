export interface Profile {
  id: number
  name: string
  photo: string
  description: string
  address: {
    city: string
    state: string
    country: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  contact: {
    email: string
    phone: string
  }
  interests: string[]
}