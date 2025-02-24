import { Search } from "@mui/icons-material"
import { IconButton, Paper } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ borderRadius: 20, border: "1px solid #e3e3e3", pl: { xs: 1, sm: 2 }, boxShadow: "none", mr: { sm: 5 } }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: { xs: "5px", sm: '10px' }, color: "red" }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar