import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Rating,
    Paper,
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

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: 0,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleRating = (_, value) => {
        setFormData((prev) => ({
            ...prev,
            rating: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Handle your form submission here (API, etc)
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    bgcolor: 'background.default',
                }}
            >
                <Paper elevation={4} sx={{ p: 4, borderRadius: 3, maxWidth: 420, width: '100%' }}>
                    <Typography variant="h5" color="primary" align="center" gutterBottom>
                        Feedback Form
                    </Typography>
                    {submitted ? (
                        <Typography color="primary" align="center" sx={{ mt: 2 }}>
                            Thank you for your feedback!
                        </Typography>
                    ) : (
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                variant="outlined"
                                color="primary"
                                required
                                fullWidth
                            />
                            <TextField
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                variant="outlined"
                                color="primary"
                                type="email"
                                required
                                fullWidth
                            />
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography sx={{ minWidth: 60 }}>Rating:</Typography>
                                <Rating
                                    name="rating"
                                    value={formData.rating}
                                    onChange={handleRating}
                                    size="large"
                                    sx={{ color: '#1976d2' }}
                                />
                            </Box>
                            <TextField
                                label="Feedback"
                                name="feedback"
                                value={formData.feedback}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                variant="outlined"
                                color="primary"
                                required
                                fullWidth
                            />
                            <Button type="submit" variant="contained" color="primary" size="large">
                                Submit
                            </Button>
                        </Box>
                    )}
                </Paper>
            </Box>
        </ThemeProvider>
    );
};

export default FeedbackForm;


// const FeedbackForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         feedback: '',
//         rating: ''
//     });

//     const [submitted, setSubmitted] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you can handle form submission, e.g., send data to server
//         setSubmitted(true);
//     };

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.header}>Feedback Form</h2>
//             {submitted ? (
//                 <div style={styles.thankYou}>Thank you for your feedback!</div>
//             ) : (
//                 <form onSubmit={handleSubmit} style={styles.form}>
//                     <label style={styles.label}>
//                         Name:
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             style={styles.input}
//                             placeholder="Your name"
//                         />
//                     </label>
//                     <label style={styles.label}>
//                         Email:
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             style={styles.input}
//                             placeholder="Your email"
//                         />
//                     </label>
//                     <label style={styles.label}>
//                         Rating:
//                         <select
//                             name="rating"
//                             value={formData.rating}
//                             onChange={handleChange}
//                             required
//                             style={styles.select}
//                         >
//                             <option value="" disabled>
//                                 Select rating
//                             </option>
//                             <option value="1">1 - Poor</option>
//                             <option value="2">2 - Fair</option>
//                             <option value="3">3 - Good</option>
//                             <option value="4">4 - Very Good</option>
//                             <option value="5">5 - Excellent</option>
//                         </select>
//                     </label>
//                     <label style={styles.label}>
//                         Feedback:
//                         <textarea
//                             name="feedback"
//                             value={formData.feedback}
//                             onChange={handleChange}
//                             required
//                             style={styles.textarea}
//                             placeholder="Write your feedback here..."
//                         />
//                     </label>
//                     <button type="submit" style={styles.button}>
//                         Submit
//                     </button>
//                 </form>
//             )}
//         </div>
//     );
// };

// const styles = {
//     container: {
//         maxWidth: '500px',
//         margin: '40px auto',
//         padding: '30px',
//         borderRadius: '8px',
//         backgroundColor: '#e6f0ff',
//         boxShadow: '0 0 15px rgba(0, 102, 204, 0.3)',
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         color: '#003366'
//     },
//     header: {
//         textAlign: 'center',
//         marginBottom: '25px',
//         color: '#004080'
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '15px'
//     },
//     label: {
//         display: 'flex',
//         flexDirection: 'column',
//         fontWeight: '600',
//         fontSize: '14px'
//     },
//     input: {
//         padding: '8px',
//         fontSize: '14px',
//         borderRadius: '4px',
//         border: '1px solid #66a3ff',
//         outlineColor: '#3399ff'
//     },
//     select: {
//         padding: '8px',
//         fontSize: '14px',
//         borderRadius: '4px',
//         border: '1px solid #66a3ff',
//         outlineColor: '#3399ff'
//     },
//     textarea: {
//         padding: '10px',
//         fontSize: '14px',
//         borderRadius: '4px',
//         border: '1px solid #66a3ff',
//         outlineColor: '#3399ff',
//         minHeight: '100px',
//         resize: 'vertical'
//     },
//     button: {
//         backgroundColor: '#0073e6',
//         color: 'white',
//         fontSize: '16px',
//         padding: '10px 15px',
//         border: 'none',
//         borderRadius: '6px',
//         cursor: 'pointer',
//         fontWeight: '600',
//         transition: 'background-color 0.3s ease'
//     },
//     thankYou: {
//         fontSize: '18px',
//         color: '#004080',
//         textAlign: 'center'
//     }
// };

// export default FeedbackForm;

