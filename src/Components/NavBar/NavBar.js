import './NavBar.css'
import Logo from '../../assets/Logo.png';



const NavBar = ({home, about, skills, projects, aurora, contact, otherPage}) => {
    return(
        <div className="NavBar">
            <ul>
                <li><a href='/' className={home}>0. Home</a></li>
                <li><a href='/AboutMe' className={about}>1. About Me</a></li>
                <li><a href='Skills' className={skills}>2. Skills</a></li>
                <li><a href='Projects' className={projects}>3. Projects</a></li>
                <li><a href='AuroraProject' className={aurora}>4. Aurora Project</a></li>
                <li><a href='Contact' className={contact}>5. Contact</a></li>
            </ul>
            <img src={Logo} alt="" />
        </div>
    );
}


export default NavBar;