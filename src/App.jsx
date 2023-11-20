import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/Navbar';
import HomePage from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Odds from './pages/Odds';
import Funds from './pages/Funds';
import BetConfirm from './pages/Odds/BetConfirm'; 
import BetSelectFriend  from './pages/Odds/BetSelectFriend';
import { SnackbarProvider } from "./context/SnackbarContext";
import { UserProvider } from "./context/UserContext";
import PageLevelMessage from './components/Snackbar';
import MyBets from './pages/MyBets';


const styles = {
  container: {
    padding: '64px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    position: 'relative'
  }
}

export default function App() {
  return (
    <div>
      <SnackbarProvider>
        <UserProvider>
          <NavBar />
          <MainContent>
            <PageLevelMessage />
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/login" element={<SignIn/>}></Route>
              <Route path="/odds" element={<Odds/>}></Route>
              <Route path="/funds" element={<Funds/>}></Route>
              <Route path="/bet/:id" element={<BetSelectFriend/>}></Route>
              <Route path="/bet/:id/confirm" element={<BetConfirm/>}></Route>
              <Route path="/my/bets" element={<MyBets/>}></Route>
            </Routes>
          </MainContent>
        </UserProvider>
      </SnackbarProvider>
    </div>
  );
}



function MainContent({ children }) {
  return <div style={styles.container}>{children}</div>;
}

