interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  filter: string
  setFilter: (filter: string) => void
  cities: string[]
}

export default function SearchBar({ searchTerm, setSearchTerm, filter, setFilter, cities }: SearchBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow p-2 border rounded"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Cities</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  )
}