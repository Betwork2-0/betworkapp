import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

const rows = [
    { id: 1, homeTeam: 'NYK', awayTeam: 'OKC', timeDate: '12:10 ET 11/13/2022', homeMoneyLine: '-210', awayMoneyLine: '175' },
    { id: 2, homeTeam: 'SAS', awayTeam: 'LAL', timeDate: '8:10 ET 11/26/2022', homeMoneyLine: '120', awayMoneyLine: '-140' },
    { id: 3, homeTeam: 'WAS', awayTeam: 'DAL', timeDate: '7:00 ET 11/11/2022', homeMoneyLine: '120', awayMoneyLine: '-130' },
];

const styles = {
    container: {
        maxWidth: '1080px',
        margin: 'auto'
    },
    columnTitle: {
        fontWeight: '700'
    }
}

export default function Odds() {

    const navigate = useNavigate();

    const proposeBet = (id) => {
        navigate(`/bet/${id}`);
    }

    return (
        <div style={styles.container}>
            <h1>All Odds</h1>
            <TableContainer component={Paper} sx={{ height: 'min-content' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={styles.columnTitle}>Home Team</TableCell>
                            <TableCell sx={styles.columnTitle} align="left">Away Team</TableCell>
                            <TableCell sx={styles.columnTitle} align="left">Time & Date</TableCell>
                            <TableCell sx={styles.columnTitle} align="left">Home Money Line</TableCell>
                            <TableCell sx={styles.columnTitle} align="left">Away Money Line</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.homeTeam}</TableCell>
                                <TableCell align="left">{row.awayTeam}</TableCell>
                                <TableCell align="left">{row.timeDate}</TableCell>
                                <TableCell align="left">{row.homeMoneyLine}</TableCell>
                                <TableCell align="left">{row.awayMoneyLine}</TableCell>
                                <TableCell align="right">
                                    <Button variant='contained' onClick={() => proposeBet(row.id)}>Propose Bet</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}