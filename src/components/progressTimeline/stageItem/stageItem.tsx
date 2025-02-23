import {Accordion, AccordionDetails, AccordionSummary, Typography,} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

import {Level} from '../../../types/objectives';
import ObjectiveList from '../objectiveList/objectiveList';

const StageItemSeparator = ({level}: { level: Level }) => {
    const completed = level.objectives.every((obj) => obj.completed);
    const partiallyCompleted = level.objectives.some((obj) => obj.completed);

    if (completed) {
        return <CheckBoxIcon color="success" fontSize={'large'}/>
    } else if (partiallyCompleted) {
        return <IndeterminateCheckBoxIcon color="info" fontSize={'large'}/>
    } else {
        return <CheckBoxOutlineBlankIcon fontSize={'large'}/>
    }
}

const StageItem = (
    {level, isLast, isFirst}: { level: Level; isLast: boolean; isFirst: boolean
}) => {

    return (
        <TimelineItem>
            <TimelineSeparator>
                {isFirst ? <TimelineConnector style={{opacity: 0}}/> : <TimelineConnector/>}
                <StageItemSeparator level={level}/>
                {isLast ? <TimelineConnector style={{opacity: 0}}/> : <TimelineConnector/>}
            </TimelineSeparator>
            <TimelineContent>
                <Accordion style={{margin: '0'}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h6">{level.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ObjectiveList objectives={level.objectives}/>
                    </AccordionDetails>
                </Accordion>
            </TimelineContent>
        </TimelineItem>
    );
}

export default StageItem;


