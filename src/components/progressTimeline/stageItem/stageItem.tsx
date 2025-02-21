import {Accordion, AccordionDetails, AccordionSummary, Typography,} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {Level} from '../../../types/objectives';
import ObjectiveList from '../objectiveList/objectiveList';

const StageItem = (
    {level, isLast, isFirst}: { level: Level; isLast: boolean; isFirst: boolean
}) => (
    <TimelineItem >
        <TimelineSeparator>
            {isFirst ? <TimelineConnector style={{opacity : 0}} /> : <TimelineConnector />}
            {level.completed ? (
                <CheckCircleIcon color="success" />
            ) : (
                <CheckCircleIcon />
            )}
            {isLast ? <TimelineConnector style={{opacity : 0}} /> : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
            <Accordion style={{margin: '0'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">{level.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ObjectiveList objectives={level.objectives} />
                </AccordionDetails>
            </Accordion>
        </TimelineContent>
    </TimelineItem>
);

export default StageItem;


