import { useState } from 'react'

const Search = () => {
  const [searchField, setSearchField] = useState('')

  const handleChange = (e) => {
    setSearchField(e.target.value)
  }
  return (
    <div className='pa2'>
      <input
        type='search'
        placeholder='Search File Name'
        onChange={handleChange}
        value={searchField}
      />
    </div>
  )
}

export default Search
