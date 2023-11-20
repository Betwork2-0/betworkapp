import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ mt: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const styles = {
    columnTitle: {
        fontWeight: '700'
    }
};

const confirmedBets = [
    // Table 1 data
    {
        homeTeam: 'NYK',
        awayTeam: 'OKC',
        timeDate: '12:10 ET 11/13/2022',
        homeMoneyLine: -210,
        awayMoneyLine: 175,
        amount: 100,
        bettingOn: 'Home Team',
        bettingAgainst: 'Jordi Jaoudat Adoumie'
    },
    {
        homeTeam: 'LAL',
        awayTeam: 'BOS',
        timeDate: '15:30 ET 11/14/2022',
        homeMoneyLine: -115,
        awayMoneyLine: 190,
        amount: 150,
        bettingOn: 'Away Team',
        bettingAgainst: 'Alex Johnson'
    },
    {
        homeTeam: 'CHI',
        awayTeam: 'MIA',
        timeDate: '20:00 ET 11/15/2022',
        homeMoneyLine: -130,
        awayMoneyLine: 110,
        amount: 200,
        bettingOn: 'Home Team',
        bettingAgainst: 'Chris Smith'
    }
];

const proposedBets = [
    // Table 2 data
    {
        homeTeam: 'GSW',
        awayTeam: 'HOU',
        timeDate: '18:45 ET 11/16/2022',
        homeMoneyLine: -190,
        awayMoneyLine: 165,
        amount: 250,
        bettingOn: 'Away Team',
        bettingAgainst: 'Patricia Lee'
    },
    {
        homeTeam: 'TOR',
        awayTeam: 'CLE',
        timeDate: '21:10 ET 11/17/2022',
        homeMoneyLine: -105,
        awayMoneyLine: 195,
        amount: 75,
        bettingOn: 'Home Team',
        bettingAgainst: "Jamie O'Reilly"
    },
    {
        homeTeam: 'PHI',
        awayTeam: 'ORL',
        timeDate: '19:30 ET 11/18/2022',
        homeMoneyLine: -220,
        awayMoneyLine: 180,
        amount: 300,
        bettingOn: 'Away Team',
        bettingAgainst: 'Morgan Wu'
    }
];

const receivedBets = [
    // Table 3 data
    {
        homeTeam: 'DEN',
        awayTeam: 'UTA',
        timeDate: '22:00 ET 11/19/2022',
        homeMoneyLine: -200,
        awayMoneyLine: 170,
        amount: 120,
        bettingOn: 'Home Team',
        bettingAgainst: 'Samantha Paul'
    },
    {
        homeTeam: 'POR',
        awayTeam: 'NOP',
        timeDate: '20:15 ET 11/20/2022',
        homeMoneyLine: -110,
        awayMoneyLine: 210,
        amount: 100,
        bettingOn: 'Away Team',
        bettingAgainst: 'Derek Newman'
    }
];

const finishedBets = [
    {
        homeTeam: 'SAC',
        awayTeam: 'MIN',
        timeDate: '17:30 ET 11/21/2022',
        homeMoneyLine: -150,
        awayMoneyLine: 130,
        amount: 220,
        bettingOn: 'Home Team',
        bettingAgainst: 'Olivia Sanchez'
    }
];

const cancelledBets = [];

function BetTable({ bets, button1Text, handleButton1Click, button2Text, handleButton2Click }) {
    return (<TableContainer component={Paper} sx={{ height: 'min-content' }}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell sx={styles.columnTitle}>Home Team</TableCell>
                    <TableCell sx={styles.columnTitle} align="left">Away Team</TableCell>
                    <TableCell sx={styles.columnTitle} align="left">Time & Date</TableCell>
                    <TableCell sx={styles.columnTitle} align="left">Home Money Line</TableCell>
                    <TableCell sx={styles.columnTitle} align="left">Away Money Line</TableCell>
                    <TableCell sx={styles.columnTitle} align="left">Amount</TableCell>
                    <TableCell sx={styles.columnTitle} align="left">Betting On</TableCell>
                    <TableCell sx={styles.columnTitle} align="left">Betting Against</TableCell>
                    {button1Text && <TableCell align="left"></TableCell>}
                    {button2Text && <TableCell align="left"></TableCell>}
                </TableRow>
            </TableHead>
            <TableBody>
                {bets.map((bet) => (
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{bet.homeTeam}</TableCell>
                        <TableCell align="left">{bet.awayTeam}</TableCell>
                        <TableCell align="left">{bet.timeDate}</TableCell>
                        <TableCell align="left">{bet.homeMoneyLine}</TableCell>
                        <TableCell align="left">{bet.awayMoneyLine}</TableCell>
                        <TableCell align="left">{bet.amount}</TableCell>
                        <TableCell align="left">{bet.bettingOn}</TableCell>
                        <TableCell align="left">{bet.bettingAgainst}</TableCell>
                        {button1Text && <TableCell align="left"><Button onClick={handleButton1Click}>{button1Text}</Button></TableCell>}
                        {button2Text && <TableCell align="left"><Button onClick={handleButton2Click}>{button2Text}</Button></TableCell>}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>)
}

export default function MyBets() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ maxWidth: 960, margin: 'auto' }}>
            <h1>My Bets</h1>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Confirmed" {...a11yProps(0)} />
                    <Tab label="Proposed" {...a11yProps(1)} />
                    <Tab label="Received" {...a11yProps(2)} />
                    <Tab label="Finished" {...a11yProps(3)} />
                    <Tab label="Cancelled" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <BetTable bets={confirmedBets} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <BetTable 
                    bets={proposedBets} 
                    button1Text="Cancel" 
                    handleButton1Click={() => alert("cancel bet?")} 
                />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <BetTable
                    bets={receivedBets}
                    button1Text="Cancel" 
                    handleButton1Click={() => alert("cancel bet?")} 
                    button2Text="Accept" 
                    handleButton2Click={() => alert("accept bet?")} 
                    />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <BetTable bets={finishedBets} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <BetTable bets={cancelledBets} />
            </CustomTabPanel>
        </Box>
    );
}
