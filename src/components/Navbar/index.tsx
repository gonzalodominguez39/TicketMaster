import { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

type NavbarProps = {
  onSearch: (term: string) => void
}
export const Navbar = ({ onSearch }: NavbarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm)
    }
  }
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value)
  }
  return (
    <div className='navBar'>
      <section id='title' className=''>
        <h2>Mi boletera</h2>
      </section>
      <section id='search'className='search'>
      <input style={{border:'none', height:'25px', borderRadius:4, fontSize:16,  padding: '6px 12px'}}
        type='text'
        placeholder='Busca tu evento favorito'
        onChange={handleChangeSearch}
        onKeyDown={handleInputKeyDown}
        />
        <Link to='/profile/my-info'style={{color:'white',marginLeft: '24px',textDecoration:'none'}} >Mi Perfil</Link>
        </section>
    </div>
  )
}
