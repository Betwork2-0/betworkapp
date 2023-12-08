import React, { useEffect, useState } from 'react';
import Divider from '../../components/Divider';
import { Button } from '@mui/material';
import ButtonSpinner from '../../components/ButtonSpinner';

const styles = {
    friendsContainer: {
        // backgroundColor: 'white',
        // padding: '24px 24px 24px',
        marginTop: '48px'
    },
    friendList: {
        listStyle: 'none',
        padding: 0
    },
    friendItem: {
        backgroundColor: 'white',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        marginTop: '16px',
        padding: '12px 24px',
        boxShadow: '0 1px 6px 0 rgba(32, 33, 36, 0.28)'
    },
    friendImage: {
        // borderRadius: '50%',
        marginRight: '16px'
    },
    proposeButton: {
        marginLeft: 'auto'
    },
    columnTitle: {
        fontWeight: '700'
    }
};

const FriendList = ({ friends, addFriend }) => {

    const [loading, setLoading] = useState(false);

    return (
        <div style={styles.friendsContainer}>
            <ul style={styles.friendList}>
                {friends?.length > 0 && friends.map((friend) => (
                    <li key={addFriend ? friend.user_name : friend[0]} style={styles.friendItem}>
                        <img src="/eevee.png" style={styles.friendImage} width="50" height="50" />
                        <div>{addFriend ? friend.user_name : friend[0]}</div>
                        {addFriend ?
                            <Button variant='contained' onClick={() => addFriend(friend.user_name, setLoading)} sx={styles.proposeButton}>
                                {loading ? <ButtonSpinner /> : "Add friend"}
                            </Button>
                            : <Button variant='contained' onClick={() => proposeBet(bet, friend)} sx={styles.proposeButton}>
                                See their bets
                            </Button>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendList;
