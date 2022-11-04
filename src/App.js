import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
    return (
        <div className="app__wrapper">
            <Header/>
            <Navbar/>
            <Profile/>


        </div>
    );
}

export default App;