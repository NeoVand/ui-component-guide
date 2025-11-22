
import {
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent,
    TimelineDot, TimelineOppositeContent
} from '@mui/lab';
import { Masonry, LoadingButton } from '@mui/lab';
import { Box, Paper, Typography, Stack } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';

export const BasicTimeline = () => (
    <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                    <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Eat
                </Typography>
                <Typography>Because you need strength</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
            >
                10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                    <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Code
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                    <HotelIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Sleep
                </Typography>
                <Typography>Because you need rest</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                    <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Repeat
                </Typography>
                <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
        </TimelineItem>
    </Timeline>
);

export const BasicMasonry = () => {
    const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

    return (
        <Box sx={{ width: 500, minHeight: 393 }}>
            <Masonry columns={4} spacing={2}>
                {heights.map((height, index) => (
                    <Paper key={index} sx={{ height, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {index + 1}
                    </Paper>
                ))}
            </Masonry>
        </Box>
    );
};

export const LoadingButtons = () => (
    <Stack direction="row" spacing={2}>
        <LoadingButton loading variant="outlined">
            Submit
        </LoadingButton>
        <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
            Fetch data
        </LoadingButton>
        <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
        >
            Save
        </LoadingButton>
    </Stack>
);
