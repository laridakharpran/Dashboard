import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Chip,
    Paper,
    TextField,
    Typography,
    IconButton,
    Tooltip,
    Stack,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import UploadIcon from '@mui/icons-material/Upload';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#e3f2fd',
            paper: '#fff',
        },
    },
});

const defaultUser = {
    avatarUrl: '', // can be url or local base64 image string
    name: 'Larida',
    email: 'larida@gmail.com',
    phone: '+91 9862613252 ',
    bio: 'Full stack developer with 5 years experience in React and Node.js.',
    skills: ['React', 'Node.js', 'Material UI', 'JavaScript', 'TypeScript'],
};

const ProfilePage = () => {
    const [user, setUser] = useState(defaultUser);
    const [editMode, setEditMode] = useState(false);

    // Handle input changes for editable fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    // Handle skill removal
    const handleRemoveSkill = (skill) => {
        setUser((prev) => ({
            ...prev,
            skills: prev.skills.filter((s) => s !== skill),
        }));
    };

    // Add skill on Enter
    const handleAddSkill = (e) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            e.preventDefault();
            const newSkill = e.target.value.trim();
            if (!user.skills.includes(newSkill)) {
                setUser((prev) => ({
                    ...prev,
                    skills: [...prev.skills, newSkill],
                }));
            }
            e.target.value = '';
        }
    };

    // Handle avatar upload
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUser((prev) => ({
                    ...prev,
                    avatarUrl: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleEditMode = () => setEditMode((prev) => !prev);

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    bgcolor: 'background.default',
                    minHeight: '100vh',
                    py: 5,
                    px: { xs: 2, sm: 4 },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Paper
                    elevation={4}
                    sx={{ maxWidth: 600, width: '100%', p: 4, borderRadius: 3 }}
                >
                    <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                        <Box position="relative" sx={{ mb: 2 }}>
                            <Avatar
                                src={user.avatarUrl || undefined}
                                alt={user.name}
                                sx={{ width: 120, height: 120 }}
                            >
                                {user.name.charAt(0)}
                            </Avatar>
                            {editMode && (
                                <Tooltip title="Upload Avatar">
                                    <IconButton
                                        color="primary"
                                        component="label"
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            right: 0,
                                            bgcolor: 'background.paper',
                                            border: '1px solid',
                                            borderColor: 'primary.main',
                                        }}
                                    >
                                        <input
                                            hidden
                                            accept="image/*"
                                            type="file"
                                            onChange={handleAvatarChange}
                                        />
                                        <UploadIcon />
                                    </IconButton>
                                </Tooltip>
                            )}
                        </Box>
                        {!editMode ? (
                            <Typography variant="h5" color="primary" gutterBottom>
                                {user.name}
                            </Typography>
                        ) : (
                            <TextField
                                label="Name"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                fullWidth
                                sx={{ mb: 2 }}
                            />
                        )}
                    </Box>

                    <Box mb={2}>
                        {!editMode ? (
                            <Typography variant="body1">
                                <strong>Email:</strong> {user.email}
                            </Typography>
                        ) : (
                            <TextField
                                label="Email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                fullWidth
                                sx={{ mb: 2 }}
                            />
                        )}

                        {!editMode ? (
                            <Typography variant="body1" gutterBottom>
                                <strong>Phone:</strong> {user.phone}
                            </Typography>
                        ) : (
                            <TextField
                                label="Phone"
                                name="phone"
                                value={user.phone}
                                onChange={handleChange}
                                fullWidth
                                sx={{ mb: 2 }}
                            />
                        )}

                        {!editMode ? (
                            <Typography variant="body1" gutterBottom>
                                <strong>Bio:</strong> {user.bio}
                            </Typography>
                        ) : (
                            <TextField
                                label="Bio"
                                name="bio"
                                value={user.bio}
                                onChange={handleChange}
                                fullWidth
                                multiline
                                rows={4}
                                sx={{ mb: 2 }}
                            />
                        )}
                    </Box>

                    <Box mb={3}>
                        <Typography variant="subtitle1" gutterBottom>
                            Skills
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            {user.skills.map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    color="primary"
                                    onDelete={editMode ? () => handleRemoveSkill(skill) : undefined}
                                />
                            ))}
                            {editMode && (
                                <TextField
                                    variant="outlined"
                                    placeholder="Add skill and press Enter"
                                    size="small"
                                    onKeyDown={handleAddSkill}
                                    sx={{ minWidth: 120 }}
                                />
                            )}
                        </Stack>
                    </Box>

                    <Box display="flex" justifyContent="flex-end" gap={2}>
                        {editMode ? (
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<SaveIcon />}
                                onClick={toggleEditMode}
                            >
                                Save
                            </Button>
                        ) : (
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<EditIcon />}
                                onClick={toggleEditMode}
                            >
                                Edit Profile
                            </Button>
                        )}
                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    );
};

export default ProfilePage;
