// import React from 'react'

// const Historory = () => {
//     return (
//         <div>Historory</div>
//     )
// }

// export default Historory
import React, { useState, useMemo } from 'react';
import {
    Box,
    Paper,
    Typography,
    Rating,
    TextField,
    Pagination,
    Stack,
    ThemeProvider,
    createTheme,
} from '@mui/material';

const theme = createTheme({
    palette: {
        background: {
            paper: '#ffffff',
        },
    },
});

const sampleData = [
    {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        rating: 5,
        feedback: 'Excellent service! Highly recommended.',
        date: '2025-11-08',
    },
    {
        id: 2,
        name: 'Bob',
        email: 'bob@example.com',
        rating: 4,
        feedback: 'Very good overall, a few small issues.',
        date: '2025-11-07',
    },
    {
        id: 3,
        name: 'Charlie',
        email: 'charlie@example.com',
        rating: 3,
        feedback: 'Average experience.',
        date: '2025-11-06',
    },
    // Added Indian names
    {
        id: 4,
        name: 'Arjun Patel',
        email: 'arjun.patel@example.in',
        rating: 5,
        feedback: 'Outstanding support and quick resolution.',
        date: '2025-11-05',
    },
    {
        id: 5,
        name: 'Priya Sharma',
        email: 'priya.sharma@example.in',
        rating: 4,
        feedback: 'Good experience, but room for improvement.',
        date: '2025-11-04',
    },
    {
        id: 6,
        name: 'Rohit Singh',
        email: 'rohit.singh@example.in',
        rating: 3,
        feedback: 'Service was okay, expected more features.',
        date: '2025-11-03',
    },
    {
        id: 7,
        name: 'Anjali Gupta',
        email: 'anjali.gupta@example.in',
        rating: 4,
        feedback: 'Helpful staff and smooth process.',
        date: '2025-11-02',
    },
    {
        id: 8,
        name: 'Vikram Iyer',
        email: 'vikram.iyer@example.in',
        rating: 5,
        feedback: 'Exceeded my expectations in every way.',
        date: '2025-11-01',
    },
    {
        id: 9,
        name: 'Sonia Reddy',
        email: 'sonia.reddy@example.in',
        rating: 2,
        feedback: 'Had some issues with delivery times.',
        date: '2025-10-31',
    },
    {
        id: 10,
        name: 'Deepak Verma',
        email: 'deepak.verma@example.in',
        rating: 4,
        feedback: 'Good value for money and prompt service.',
        date: '2025-10-30',
    }
];


const PAGE_SIZE = 2;

const Historory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const filteredData = useMemo(() => {
        return sampleData.filter(
            (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.feedback.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const pageCount = Math.ceil(filteredData.length / PAGE_SIZE);

    const paginatedData = useMemo(() => {
        const startIndex = (page - 1) * PAGE_SIZE;
        return filteredData.slice(startIndex, startIndex + PAGE_SIZE);
    }, [filteredData, page]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setPage(1);
    };

    const handlePageChange = (_, value) => {
        setPage(value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    bgcolor: 'background.default',
                    minHeight: '100vh',
                    py: 4,
                    px: { xs: 2, sm: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" color="primary" gutterBottom>
                    Feedback History
                </Typography>
                <TextField
                    label="Search by name or feedback"
                    variant="outlined"
                    color="primary"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{ mb: 3, maxWidth: 400, width: '100%' }}
                />
                <Stack spacing={3} sx={{ width: '100%', maxWidth: 600 }}>
                    {paginatedData.length === 0 ? (
                        <Typography color="text.secondary" align="center">
                            No feedback found.
                        </Typography>
                    ) : (
                        paginatedData.map(({ id, name, rating, feedback, date }) => (
                            <Paper key={id} elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                                <Box display="flex" justifyContent="space-between" mb={1}>
                                    <Typography variant="h6" color="primary">
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {new Date(date).toLocaleDateString()}
                                    </Typography>
                                </Box>
                                <Rating value={rating} readOnly size="small" sx={{ mb: 1, color: '#1976d2' }} />
                                <Typography variant="body1">{feedback}</Typography>
                            </Paper>
                        ))
                    )}
                </Stack>
                {pageCount > 1 && (
                    <Pagination
                        count={pageCount}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        sx={{ mt: 4 }}
                    />
                )}
            </Box>
        </ThemeProvider>
    );
};

export default Historory;
