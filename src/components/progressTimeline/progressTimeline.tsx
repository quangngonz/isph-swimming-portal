import {Box, Typography,} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import {timelineItemClasses} from '@mui/lab/TimelineItem';
import StageItem from './stageItem/stageItem';
import {Level} from "../../types/objectives";

function ProgressTimeline({levels}: { levels: Level[] }) {
    const currentLevel = levels.findIndex((level) => !level.completed) + 1;

    return (
        <Box alignSelf={'center'} mt={4} >
            <Typography variant="h5">
                You are currently on level: {currentLevel}
            </Typography>

            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                {levels.map((level, index) => (
                    <StageItem
                        key={index}
                        level={level}
                        isLast={index === levels.length - 1}
                        isFirst={index === 0}
                    />
                ))}
            </Timeline>
        </Box>
    );
}

export default ProgressTimeline;
