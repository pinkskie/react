import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


function App() {
  return ( 
    <div className='app-wrapper'>
      {/*<header className='header'>
        <img src='https://e7.pngegg.com/pngimages/539/883/png-clipart-globe-earth-globe-miscellaneous-blue.png' alt=""></img>
      </header>*/}
      <Header/>
      {/*<nav className='nav'>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messeges</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>*/}
      <Navbar/>
      {/*<div className='content'>
        <div>
        <img src="https://cdn.hipwallpaper.com/i/9/24/Mhm1Ss.jpg"/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          my posts
          <div>
            new  post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
    </div>*/}
    <Profile/>
    </div>
  );
}

export default App;
