import NavBar from '../../Components/NavBar/NavBar'
import './AboutMe.css';
import '../../App.css';



const AboutMe = () => {
    return(
        <div className='AboutMe bg'>
            <NavBar
            about={'selected'}/>
        </div>
    );
}


export default AboutMe;