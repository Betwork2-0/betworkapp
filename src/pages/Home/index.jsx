import React from 'react';
import PostList from './PostList';
import StatusUpdater from './StatusUpdater';

// CSS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  sidebar: {
    flexBasis: '200px',
    background: '#f0f0f0',
    padding: '20px',
    border: '1px solid #ccc',
    height: '100%',
  },
  mainContent: {
    flex: 1,
    maxWidth: '720px',
    minWidth: '360px',
    background: '#fff',
    margin: '0 64px',
    height: '100%',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <Sidebar>
        <h3>Sidebar 1</h3>
        <p>Content for sidebar 1</p>
      </Sidebar>
      <MainContent>
        <StatusUpdater />
        <PostList />
      </MainContent>
      <Sidebar>
        <h3>Sidebar 2</h3>
        <p>Content for sidebar 2</p>
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