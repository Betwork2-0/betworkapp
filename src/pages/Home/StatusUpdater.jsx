import React, { useState } from 'react';

const StatusUpdater = () => {
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setStatus(e.target.value);
    }

    const handleSubmit = () => {
        console.log('Posted status:', status);
        setStatus('');
    }

    const styles = {
        container: {
            border: '1px solid #ddd',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '40px'
        },
        header: {
            fontSize: '24px',
            marginBottom: '20px'
        },
        textarea: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            resize: 'none'
        },
        button: {
            display: 'block',
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
        },
        buttonHover: {
            backgroundColor: '#0056b3'
        }
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Update Status</h2>
            <textarea
                value={status}
                onChange={handleChange}
                placeholder="What's up?"
                rows="3"
                style={styles.textarea}
            ></textarea>
            <button 
                onClick={handleSubmit} 
                style={styles.button}
                onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
                onMouseOut={e => e.target.style.backgroundColor = '#007BFF'}
            >
                Post
            </button>
        </div>
    );
}

export default StatusUpdater;
