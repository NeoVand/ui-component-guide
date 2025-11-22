import {
    Alert, Stack, CircularProgress, LinearProgress,
    Skeleton, IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export const Alerts = () => (
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
        <Alert severity="info" variant="outlined">This is an outlined info alert.</Alert>
    </Stack>
);

export const Progress = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Stack direction="row" spacing={2} alignItems="center">
            <CircularProgress />
            <CircularProgress color="secondary" />
            <CircularProgress size={24} />
        </Stack>
        <LinearProgress />
        <LinearProgress color="secondary" />
    </Stack>
);

export const Skeletons = () => (
    <Stack spacing={1} sx={{ width: 210 }}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
);

export const SimpleSnackbar = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Alert severity="success" action={
            <IconButton aria-label="close" color="inherit" size="small">
                <CloseIcon fontSize="inherit" />
            </IconButton>
        }>
            This is a success message!
        </Alert>
    </Stack>
);
