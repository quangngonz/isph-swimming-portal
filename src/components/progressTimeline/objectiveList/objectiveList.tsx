import React from 'react';
import {Box, Checkbox, FormControlLabel} from '@mui/material';
import {Objective} from '../../../types/objectives';

import ObjectiveText from "../objectiveText/objectiveText";


const ObjectiveList = ({ objectives }: { objectives: Objective[] }) => (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {objectives.map((obj, index) => (
            <FormControlLabel
                key={index}
                control={<Checkbox checked={obj.completed} color="success" />}
                label={<ObjectiveText name={obj.name} tutorial_link={obj.tutorial_link} />}
            />
        ))}
    </Box>
);

export default ObjectiveList;
