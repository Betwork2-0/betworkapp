import React, { useEffect, useState } from 'react';
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
import axios from "axios";
import { useUser } from "../../context/UserContext";
import Spinner from "../../components/Spinner";
import { useSnackbar } from '../../context/SnackbarContext';

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

// const friends = [
//     { id: 1, name: 'Alice Smith', img: '/eevee.png', status: 'Online' },
//     { id: 2, name: 'Bob Johnson', img: '/eevee.png', status: 'Offline' },
//     // More friends...
// ];

const styles = {
    container: {
        maxWidth: 800,
        margin: 'auto'
    }
}

const Friends = () => {

    const [value, setValue] = useState(0);

    const [foundUser, setFoundUser] = useState(null);

    const { user, setUser } = useUser();

    const [friends, setFriends] = useState([]);

    const [loading, setLoading] = useState(false);
    const { openSuccessMessage, openErrorMessage } = useSnackbar();

    const [searchLoading, setSearchLoading] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleUserSearch = async (username) => {
        // Implement your search logic here
        console.log('Searching for:', username);
        setSearchLoading(true);
        axios.get(`http://52.188.229.42:5011/api/v1/user/${username}`)
        .then((data) => {
            console.log("user: ", data);
            if (data.data.success) {
                setFoundUser(data.data.payload);
            }
        })
        .catch(err => console.log(err))
        .finally(() => setSearchLoading(false));
    };

    const addFriend = async (friendUsername, setActionLoading) => {
        setActionLoading(true);
        axios.post(`http://52.188.229.42:5011/api/v1/user/add-friend`, {
            user_name: user.user_name,
            friend_user_name: friendUsername
        })
        .then((data) => {
            console.log("user: ", data);
            setActionLoading(false);
            // setValue(0);
            if (data.data.success) {
                openSuccessMessage(`You have added ${friendUsername} to your friend list!`);
                setFoundUser(null);
                setValue(0);
                getFriends();
            }
        })
        .catch(err => console.log(err));
    }

    const getFriends = async () => {
        setLoading(true);
        let username = user.user_name;
        axios.get(`http://52.188.229.42:5011/api/v1/user/${username}/friends`)
        .then(data => {
            setFriends(data.data.payload);
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false))
    }

    useEffect(() => {

        getFriends();
    }, [])

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
                <Button variant="text" onClick={getFriends}>Refresh</Button>
                {loading ? <Spinner /> : <FriendList friends={friends} />}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Search onSearch={handleUserSearch} />
                {searchLoading ? <Spinner /> : <FriendList friends={foundUser && [foundUser]} addFriend={addFriend} />}
            </CustomTabPanel>


        </div>
    );
};

export default Friends;