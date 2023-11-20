import React from 'react';

// Inline styles
const styles = {
    sidebarProfile: {
        padding: '24px 0 10px',
        // marginTop: '10px',
    },
    profileHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
    },
    profileLogo: {
        width: '50px',
        height: '50px',
        // Add your logo styling here
    },
    profileName: {
        marginTop: '10px',
        fontWeight: 'bold',
    },
    balanceItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '10px 0',
        borderTop: '1px solid #eee',
        color: '#1b1b1b'
    },
    balanceItemTitle: {
        fontSize: '18px',
        marginBottom: '12px'
    },
    icon: {
        marginRight: '10px',
        // Define your icon styles or classes here
    },
    amount: {
        fontSize: '14px'
    }
};

const Profile = () => {
    return (
        <div style={styles.sidebarProfile}>
            <div style={styles.profileHeader}>
                <img
                    src="eevee.png" // Replace with your logo path
                    alt="Logo"
                    style={styles.profileLogo}
                />
                <span style={styles.profileName}>Rails</span>
            </div>
            <div style={styles.balanceItem}>
                <div>
                    <div style={styles.balanceItemTitle}>Actual Balance</div>
                    <div>
                        <span style={styles.icon}>🔒</span>
                        <span style={styles.amount}>4900.0 dollars</span></div>
                </div>
            </div>
            <div style={styles.balanceItem}>

                <div>
                    <div style={styles.balanceItemTitle}>Pending Bets</div>
                    <div style={styles.amount}>
                        <span style={styles.icon}>🔒</span>
                        <span>250.0 dollars</span></div>
                </div>
            </div>
            <div style={styles.balanceItem}>
                <div>
                    <div style={styles.balanceItemTitle}>Available Balance</div>
                    <div style={styles.amount}>
                        <span style={styles.icon}>🔒</span>
                        <span>4650.0 dollars</span></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
