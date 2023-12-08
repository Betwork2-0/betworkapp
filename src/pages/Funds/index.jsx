import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useUser } from "../../context/UserContext";
import ButtonSpinner from '../../components/ButtonSpinner';
import { useSnackbar } from "../../context/SnackbarContext";

const AddFundsComponent = () => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('add');
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const [balance, setBalance] = useState(0);

    const { openSuccessMessage, openErrorMessage } = useSnackbar();

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    // Inline styles
    const styles = {
        container: {
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '4px 16px 16px',
            maxWidth: '600px',
            margin: '16px auto',
            backgroundColor: 'white'
        },
        inputGroup: {
            marginBottom: '12px',
        },
        input: {
            width: '100%',
            padding: '8px',
            margin: '8px 0',
            display: 'inline-block',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
        },
        button: {
            width: '100%',
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '14px 20px',
            margin: '8px 0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        balanceInfo: {
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'space-between',
            margin: '16px 0',
            fontSize: '18px',
            color: '#1b1b1b'
        },
        balanceText: {
            margin: 0,
            fontSize: '14px'
        },
        icon: {
            marginRight: '5px',
        },
        divider: {
            height: '2px',
            backgroundColor: '#e6e6e6'
        }
    };

    const submitAddFund = async () => {
        setLoading(true);
        await addBalance(user.solidity_address, amount);
        await fetchBalance();
        setLoading(false);
        openSuccessMessage(`You have successfully added ${amount} dollars to your balance!`);
    }

    const fetchBalance = async () => {
        setBalance(await getBalance(user.solidity_address));
    }

    useEffect(() => {
        fetchBalance();
    }, [])

    return (

        <div style={styles.container}>
            <h2>Funds</h2>
            <div style={styles.inputGroup}>
                <FormControl>
                    {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={type}
                        onChange={handleTypeChange}
                    >
                        <FormControlLabel value="add" control={<Radio />} label="Add" />
                        <FormControlLabel value="withdraw" control={<Radio />} label="Withdraw" />
                    </RadioGroup>
                </FormControl>
                <input
                    type="number"
                    style={styles.input}
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter amount"
                />
            </div>
            <Button variant='contained' sx={{ marginBottom: '8px', height: 36}} onClick={submitAddFund}>{loading ? <ButtonSpinner /> : "Submit"}</Button>
            {/* <div style={styles.balanceInfo}>
                <p>Actual Balance</p>
                <p style={styles.balanceText}>
                    <span style={styles.icon}>💰</span>
                    {Number(balance).toFixed(2)} dollars
                </p>
            </div>
            <div style={styles.divider}></div> */}
            <div style={styles.balanceInfo}>
                <p>Available Balance</p>
                <p style={styles.balanceText}>
                    <span style={styles.icon}>💰</span>
                    {Number(balance).toFixed(2)} dollars
                </p>
            </div>
        </div>
    );
};

export default AddFundsComponent;
