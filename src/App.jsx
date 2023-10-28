import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.scss';
import NavBar from './components/Navbar';
import { SnackbarProvider } from "./context/SnackbarContext";
import { UserProvider } from "./context/UserContext";
import SearchedResults from './pages/SearchedResult';


export default function App() {
  return (
    <div className="app">
        <SnackbarProvider>
        <UserProvider>
        <NavBar />
        <Routes>
        <Route path="/search" element={<SearchedResults/>}></Route>
        </Routes>
        </UserProvider>
        </SnackbarProvider>
    </div>
  );
}

function MainContent({ children }) {
  return <div className="main-content">{children}</div>;
}

function ProfileSection() {
  return (
    <div className="profile-section">
      <ProfileImage />
      <BalanceSection />
    </div>
  );
}

function ProfileImage() {
  return <div className="profile-image">Image</div>;
}

function BalanceSection() {
  return (
    <div className="balance-section">
      <div>Actual Balance: $4950.00</div>
      <div>Pending Bets: $25.00</div>
      <div>Available Balance: $4925.00</div>
    </div>
  );
}

function PostSection() {
  return (
    <div className="post-section">
      <UpdateStatus />
      <Post />
      <Post />
    </div>
  );
}

function UpdateStatus() {
  return <textarea className="update-status" placeholder="What's up?"></textarea>;
}

function Post() {
  return (
    <div className="post">
      {/* Other content for post */}
    </div>
  );
}

function NavigationSidebar() {
  return (
    <div className="nav-sidebar">
      {/* Navigation items */}
    </div>
  );
}
