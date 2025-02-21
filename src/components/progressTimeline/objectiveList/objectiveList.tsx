import {Box, Checkbox, FormControlLabel,} from '@mui/material';
import {Objective} from '../../../types/objectives';

const ObjectiveList = ({ objectives }: { objectives: Objective[] }) => (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {objectives.map((obj, index) => (
            <FormControlLabel
                key={index}
                control={<Checkbox checked={obj.completed} color="success" />}
                label={obj.name}
            />
        ))}
    </Box>
);

export default ObjectiveList;
