import { useState } from 'react'

const Search = () => {
  const [searchField, setSearchField] = useState('')

  const handleChange = (e) => {
    setSearchField(e.target.value)
  }
  return (
    <div className='pa2'>
      <input
        className='pa3 bb br3 grow b--none bg-lightest-blue ma3'
        type='search'
        placeholder='Search File Name'
        onChange={handleChange}
        value={searchField}
      />
    </div>
  )
}

export default Search
