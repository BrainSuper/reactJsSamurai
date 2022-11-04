import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

function App() {
    return (
        <div className="app__wrapper">
            <Header/>
            <Navbar/>
           <div className='content__wrapper'>
               {/*<Profile/>*/}
               <Dialogs/>
           </div>


        </div>
    );
}

export default App;
