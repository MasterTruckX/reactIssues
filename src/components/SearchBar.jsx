import { useState } from 'react'

const SearchBar = ({ handleSearch }) => {
  // Estado que almacenará los que el usuario escriba en el input
  const [search, setSearch] = useState('')
  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        name='search'
        value={search}
        onChange={(event) => { setSearch(event.target.value) }}
      />
      <button
        onClick={() => handleSearch(search)}
      >
        Buscar
      </button>
    </div>
  )
}

export default SearchBar
