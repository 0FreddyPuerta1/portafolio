import './NavBar.css'
import Logo from '../../assets/Logo.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'



const NavBar = ({home, about, skills, projects, aurora, contact, otherPage}) => {
    const [hide, setHide] = useState(true);
    return(
        <div>
        
        <div className={`NavBar ${hide ? 'hide':'visible'}`}>
            <ul>
                <li><a href='/' className={home}>0. Home</a></li>
                <li><a href='/AboutMe' className={about}>1. About Me</a></li>
                <li><a href='Skills' className={skills}>2. Skills</a></li>
                <li><a href='Projects' className={projects}>3. Projects</a></li>
                <li><a href='AuroraProject' className={aurora}>4. Aurora Project</a></li>
                <li><a href='Contact' className={contact}>5. Contact</a></li>
            </ul>
            <img className='logo' src={Logo} alt="" />
            <FontAwesomeIcon className='icon' icon = {faBarsStaggered} size='xl' onClick={()=>setHide(!hide)}/>
        </div>
        
        </div>
    );
}


export default NavBar;