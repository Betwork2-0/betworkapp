import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearch(searchTerm);
        }
    };

    const styles = {
        input: {
            '& .MuiOutlinedInput-root': {
                height: '64px',
                backgroundColor: 'white',
                borderRadius: '16px', // Rounded edges
                boxShadow: '0 1px 6px 0 rgba(32, 33, 36, 0.28)', // Google-like box shadow
                '&:hover fieldset': {
                    borderColor: 'rgba(223, 225, 229, 0)', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'rgba(223, 225, 229, 0)', // Border color when focused
                },
            },
            '& .MuiOutlinedInput-input::placeholder': { // Targeting the placeholder
                color: 'black' // Placeholder color
            },
        },

    }

    return (
        <div style={styles.container}>
            <TextField
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search User"
                fullWidth
                sx={styles.input}
            />
        </div>
    );
};

export default Search;
