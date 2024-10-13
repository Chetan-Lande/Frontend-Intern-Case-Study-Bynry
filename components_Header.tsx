import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Profile Explorer</Link>
        <div>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
        </div>
      </nav>
    </header>
  )
}