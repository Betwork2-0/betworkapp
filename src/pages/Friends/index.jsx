import React from 'react';
import Search from '../../components/Search';
import FriendList from './FriendList';
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

const friends = [
    { id: 1, name: 'Alice Smith', img: '/eevee.png', status: 'Online' },
    { id: 2, name: 'Bob Johnson', img: '/eevee.png', status: 'Offline' },
    // More friends...
];

const styles = {
    container: {
        maxWidth: 800,
        margin: 'auto'
    }
}

const Friends = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleUserSearch = (searchTerm) => {
        // Implement your search logic here
        console.log('Searching for:', searchTerm);
    };

    return (
        <div style={styles.container}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="My friends" {...a11yProps(0)} />
                    <Tab label="Add friend" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Search onSearch={handleUserSearch} />
                <FriendList friends={friends} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Search onSearch={handleUserSearch} />
                {/* <FriendList friends={friends} /> */}
            </CustomTabPanel>


        </div>
    );
};

export default Friends;