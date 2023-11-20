import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '../../components/Divider';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useSnackbar } from '../../context/SnackbarContext';


// Dummy data for friends list
const friends = [
    { id: 1, name: 'Jordi Adoumie', img: '/eevee.png' },
    { id: 2, name: 'Andy Birla', img: '/eevee.png' },
    { id: 3, name: 'Matt Golden', img: '/eevee.png' },
    { id: 4, name: 'Solomon Chang', img: '/eevee.png' }
];


function BetConfirm() {

    const location = useLocation();
    const navigate = useNavigate();
    const { friend, bet } = location.state || {};

    useEffect(() => {
        if (!friend || !bet) {
            navigate('/');
        }
    }, [])


    const [team, setTeam] = useState('');
    const [amount, setAmount] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const { openSuccessMessage, closeSuccessMessage, snackbarStates } = useSnackbar();

    let balance = 4600;

    const handleTeamChange = (event) => {
        setTeam(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit logic goes here
        console.log(`Bet confirmed for team: ${team} with amount: $${amount}`);
        setIsSuccess(true);
        openSuccessMessage("Your bet was successfully placed!")
        navigate('/', { state: {} });
        
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
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Confirm Your Betting Details</h1>
            <TableContainer component={Paper} sx={{ height: 'min-content' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={styles.columnTitle}>Home Team</TableCell>
                            <TableCell sx={styles.columnTitle} align="left">Away Team</TableCell>
                            <TableCell sx={styles.columnTitle} align="left">Betting Against</TableCell>
                            <TableCell sx={styles.columnTitle} align="left">Home Money Line</TableCell>
                            <TableCell sx={styles.columnTitle} align="left">Away Money Line</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{bet?.homeTeam}</TableCell>
                            <TableCell align="left">{bet?.awayTeam}</TableCell>
                            <TableCell align="left">{friend?.name}</TableCell>
                            <TableCell align="left">{bet?.homeMoneyLine}</TableCell>
                            <TableCell align="left">{bet?.awayMoneyLine}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p>Balance Available for Betting: {balance.toFixed(2)} dollars</p>
                <FormControl fullWidth sx={{ backgroundColor: 'white' }}>
                    <InputLabel id="team-select-label">Which team do you think is going to win?</InputLabel>
                    <Select
                        labelId="team-select-label"
                        id="team-select"
                        value={team}
                        label="Which team do you think is going to win?"
                        onChange={handleTeamChange}
                    >
                        {/* Replace these MenuItem components with dynamic data as needed */}
                        <MenuItem value="NYK">New York Knicks</MenuItem>
                        <MenuItem value="LAL">Los Angeles Lakers</MenuItem>
                        {/* Add more MenuItems for other teams */}
                    </Select>
                </FormControl>
                <TextField
                    label="Amount"
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    fullWidth
                    sx={{ backgroundColor: 'white' }}
                />
                <Button variant="contained" color="primary" type="submit" sx={{ height: 48 }}>
                    Confirm Proposition
                </Button>
            </form>
        </div>
    );
}

export default BetConfirm;
