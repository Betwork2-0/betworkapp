import React from 'react';
import './App.scss';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <MainContent>
        <ProfileSection />
        <PostSection />
        <NavigationSidebar />
      </MainContent>
    </div>
  );
}

function Navbar() {
  return <div className="navbar">Betwork</div>;
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
