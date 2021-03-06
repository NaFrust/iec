import '../style/Navbar.css'
import { useState } from 'react'
import { animateScroll as scroll } from "react-scroll"
import { Link } from 'react-router-dom';






const Navbarnew = () => {


    const [isOpen, setIsOpen] = useState(false)

    const openbar = () => { setIsOpen(!isOpen) }


    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const [scrollnav, setNavbar] = useState(false)


    const chngBackground = () => {
        if (window.scrollY >= 150) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', chngBackground)

    return (

        <nav className='navcontainer'>
            <div className={scrollnav ? 'navbaritems active' : 'navbaritems'}>
                <div className={scrollnav ? 'navbarlogo active' : 'navbarlogo'} onClick={toggleHome}>IEC</div>
                <div className='navmenu'>
                    <div className='headerbarmenu'>
                        <div className={scrollnav ? 'logobar' : 'logobar'} onClick={toggleHome}>IEC</div>
                        <div className='menuicon' >
                            <div className={isOpen ? 'fas fa-times' : 'fas fa-bars'} onClick={openbar}></div>
                        </div>
                    </div>
                    <div className={isOpen ? 'bodybarmenu active' : 'bodybarmenu'} onClick={toggleHome} >
                        <div className={scrollnav ? 'navitemhome' : 'navitemhome active'} onClick={toggleHome}>
                            <Link to="/" className={scrollnav ? 'nav-links active' : 'nav-links'} onClick={isOpen}>
                                Home
                            </Link>
                        </div>
                        <div className={scrollnav ? 'navitem active' : 'navitem'}>
                            <Link to="/nosotros" className={scrollnav ? 'nav-links active' : 'nav-links'} onClick={isOpen}>
                                Nosotros
                            </Link>
                        </div>
                        <div className={scrollnav ? 'navitem active' : 'navitem'}>
                            <Link to="/servicios" className={scrollnav ? 'nav-links active' : 'nav-links'} onClick={isOpen}>
                                Servicios
                            </Link>
                        </div>
                        <div className={scrollnav ? 'navitem active' : 'navitem'}>
                            <Link to="/contacto" className={scrollnav ? 'nav-links active' : 'nav-links'} onClick={isOpen}>
                                Contacto
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbarnew