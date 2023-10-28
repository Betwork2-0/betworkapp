import React from 'react';

const PostList = () => {
    return <div>{[0, 0, 0].map(x => <Post />)}</div>;
}

const Post = () => {
    const styles = {
        container: {
            border: '1px solid #e0e0e0',
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '20px',
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px'
        },
        avatar: {
            width: '40px',
            height: '40px',
            marginRight: '10px'
        },
        postBody: {
            backgroundColor: '#f5f5f5',
            padding: '10px',
            borderRadius: '5px'
        },
        timestamp: {
            marginTop: '10px',
            color: '#777',
            fontSize: '12px'
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <img src="path_to_avatar_image.jpg" alt="Avatar" style={styles.avatar} />
                <span>Rails liked a post</span>
            </div>
            <div style={styles.postBody}>
                AD may be on a roll, but Giannis is still MY MVP!
            </div>
            <div style={styles.timestamp}>
                26 minutes ago
            </div>
        </div>
    );
}

export default PostList;
