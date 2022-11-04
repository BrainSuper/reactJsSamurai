import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App({dialogsData, messageData, postData}) {
    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <div className='content__wrapper'>
                    <Routes>
                        <Route path={'/profile'} element={<Profile postData={postData}/>}/>
                        <Route exact path={'/dialogs'} element={<Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>
                    </Routes>

                    {/*<Profile/>*/}
                    {/*<Dialogs/>*/}
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
