import {useState, useEffect} from 'react' 

function Navbar() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        handleShow(true)
      }else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  
  return (
    <nav className={`nav ${show && 'nav-black'}`}>
      <img 
      className="nav-logo"
      src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png" 
      alt="Netflix Logo" />

      <img 
      className="nav-avatar"
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
      alt="Avatar" />
    </nav>
  )
}

export default Navbar