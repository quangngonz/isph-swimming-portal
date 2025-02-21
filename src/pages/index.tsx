import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {firebaseSignOut} from "../firebase/auth";
import {stages} from "../data/stages";

import ProgressTimeline from "../components/progressTimeline/progressTimeline";

export default function DashboardPage() {
  return (
    <Box>
      <Typography variant="h1" align="center">Welcome to the ISPH Swimming Portal!</Typography>
      <Button fullWidth={false} variant="contained" onClick={() => firebaseSignOut()}>Sign Out</Button>
      <ProgressTimeline levels={stages} />
    </Box>
  );
}
