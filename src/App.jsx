import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/Navbar';
import HomePage from './pages/Home';
import { SnackbarProvider } from "./context/SnackbarContext";
import { UserProvider } from "./context/UserContext";


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100vw',
    padding: '64px'
  }
}

export default function App() {
  return (
    <div>
      <SnackbarProvider>
        <UserProvider>
          <NavBar />
          <MainContent>
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
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

