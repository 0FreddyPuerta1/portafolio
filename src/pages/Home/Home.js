import NavBar from '../../Components/NavBar/NavBar'
import './Home.css'
import '../../App.css';
import BigLogo from '../../assets/BigLogo.png'


const Home = () => {
    return(
        <div className='Home bg'>
            <NavBar
            home={'selected'}/>
            <header>
                <img className='bigLogo' src={BigLogo} alt=''/>
            </header>
        </div>
    );
}


export default Home;