import NavBar from '../../Components/NavBar/NavBar'
import './Home.css'
import '../../App.css';
import BigLogo from '../../assets/BigLogo.png'


const Home = () => {
    return(
        <div className='Home bg'>
            <NavBar
            home={'selected'}/>
            <div className='main'>
            <header>
                <img className='bigLogo' src={BigLogo} alt=''/>
            </header>
            <div className='text'>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit 
                    anim id est laborum</p>
            </div>
            <button className='downloadCv'>Dowload</button>
            </div>
        </div>
    );
}


export default Home;