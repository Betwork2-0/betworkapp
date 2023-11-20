import React from 'react';
import PostList from './PostList';
import StatusUpdater from './StatusUpdater';
import Menu from './Menu';
import Profile from './Profile';

// CSS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  sidebar: {
    flexBasis: '200px',
    background: 'white',
    padding: '20px',
    border: '1px solid #ccc',
    height: 'fit-content',
  },
  mainContent: {
    flex: 1,
    maxWidth: '720px',
    minWidth: '360px',
    // background: '#fff',
    margin: '0 64px',
    height: '100%',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <Sidebar>
        <Profile />
      </Sidebar>
      <MainContent>
        <StatusUpdater />
        <PostList />
      </MainContent>
      <Sidebar>
        <Menu />
      </Sidebar>
    </div>
  );
};

export default HomePage;

function MainContent({ children }) {
  return <div style={styles.mainContent}>{children}</div>;
};

function Sidebar({ children }) {
  return <div style={styles.sidebar}>{children}</div>;
};