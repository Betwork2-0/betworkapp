import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '../../components/Divider';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from "../../context/UserContext";
import Spinner from "../../components/Spinner";

// Dummy data for friends list
const friends = [
    { id: 1, name: 'Jordi Adoumie', img: '/eevee.png' },
    { id: 2, name: 'Andy Birla', img: '/eevee.png' },
    { id: 3, name: 'Matt Golden', img: '/eevee.png' },
    { id: 4, name: 'Solomon Chang', img: '/eevee.png' }
];

// const bet = { id: 1, homeTeam: 'NYK', awayTeam: 'OKC', timeDate: '12:10 ET 11/13/2022', homeMoneyLine: '-210', awayMoneyLine: '175' };

function BetSelectFriend() {

    const navigate = useNavigate();
    const location = useLocation();

    const { bet } = location.state || {};
    const [friends, setFriends] = useState([]);
    const { user } = useUser();
    const [loading, setLoading] = useState(false);

    // Function to handle bet proposal
    const proposeBet = (bet, friend) => {
        console.log('Bet proposed with friend ID:', friend.id);
        navigate(`/bet/${bet.id}/confirm`, { state: { friend, bet } });

    };

    // Inline styles
    const styles = {
        container: {
            maxWidth: '800px',
            margin: 'auto'
        },
        header: {
            margin: '8px 0 24px',
            fontWeight: 500
        },
        friendsContainer: {
            backgroundColor: 'white',
            padding: '24px 24px 24px',
            marginTop: '24px'
        },
        friendList: {
            listStyle: 'none',
            padding: 0
        },
        friendItem: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '40px',
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

    useEffect(() => {
        const getFriends = async () => {
            setLoading(true);
            let username = user.user_name;
            axios.get(`http://52.188.229.42:5011/api/v1/user/${username}/friends`)
            .then(data => {
                console.log("friend data ", data);
                setFriends(data.data.payload);
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
        }

        getFriends();
    }, [])

    return (
        <div style={styles.container}>
            <TableContainer component={Paper} sx={{ height: 'min-content' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={styles.columnTitle}>Home Team</TableCell>
                            <TableCell sx={styles.columnTitle} align="left">Away Team</TableCell>
                            <TableCell sx={styles.columnTitle} align="left">Time & Date</TableCell>
                            <TableCell sx={styles.columnTitle} align="left">Home Money Line</TableCell>
                            <TableCell sx={styles.columnTitle} align="left">Away Money Line</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{bet.homeTeam}</TableCell>
                            <TableCell align="left">{bet.awayTeam}</TableCell>
                            <TableCell align="left">{bet.timeDate}</TableCell>
                            <TableCell align="left">{bet.homeMoneyLine}</TableCell>
                            <TableCell align="left">{bet.awayMoneyLine}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={styles.friendsContainer}>
                <h2 style={styles.header}>Choose friend to place bet against</h2>
                <Divider />
                {loading ? <Spinner /> :
                    <ul style={styles.friendList}>
                        {friends.map((friend) => (
                            <li key={friend.id} style={styles.friendItem}>
                                <img src="/eevee.png" alt={friend.name} style={styles.friendImage} width="50" height="50" />
                                <div>{friend[0]}</div>
                                <Button variant='contained' onClick={() => proposeBet(bet, friend)} sx={styles.proposeButton}>
                                    Propose Bet
                                </Button>
                            </li>
                        ))}
                    </ul>}
            </div>
        </div>
    );
}

export default BetSelectFriend;
