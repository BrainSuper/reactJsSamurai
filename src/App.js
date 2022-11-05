import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App({store}) {
    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <div className='content__wrapper'>
                    <Routes>
                        <Route path={'/profile'} element={<Profile postChange={store.postChange.bind(store)} addPost={store.addPost.bind(store)} profilePage={store.getState().profilePage}/>}/>
                        <Route exact path={'/dialogs'} element={<Dialogs messageChange={store.messageChange.bind(store)} addMessage={store.addMessage.bind(store)} dialogsPage={store.getState().dialogsPage}/>}/>
                    </Routes>

                    {/*<Profile/>*/}
                    {/*<Dialogs/>*/}
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
