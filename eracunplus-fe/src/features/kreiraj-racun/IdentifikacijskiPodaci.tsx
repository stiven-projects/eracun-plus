import { memo } from 'react'
import Grid from '@mui/material/Grid';
import Sudionik from '../../components/sudionik-racuna/Sudionik';
import { Paper, Typography } from '@mui/material';

const IdentifikacijskiPodaci = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: "32px" }}>
          <Typography variant="h5" component="h2">Izdavatelj računa</Typography>
          <Sudionik />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: "32px" }}>
          <Typography variant="h5" component="h2">Primatelj računa</Typography>
          <Sudionik />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default memo(IdentifikacijskiPodaci)