import React from 'react';
import {Box} from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import {Objective} from '../../../types/objectives';

import ObjectiveText from "../objectiveText/objectiveText";


const ObjectiveList = ({ objectives }: { objectives: Objective[] }) => (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', margin: '0'}}>
        {objectives.map((obj, index) => (
            <Box sx={{ display: 'flex', alignItems: 'center'}} key={index} mt={2}>
                {obj.completed ? <CheckBoxIcon color="success" fontSize={'medium'} style={{ marginLeft: "0", marginRight: "0.5em"}}/> : <CheckBoxOutlineBlankIcon fontSize={'medium'} style={{ marginLeft: "0", marginRight: "0.5em"}}/>}
                <ObjectiveText name={obj.name} tutorial_link={obj.tutorial_link} />
            </Box>
        ))}
    </Box>
);

export default ObjectiveList;
