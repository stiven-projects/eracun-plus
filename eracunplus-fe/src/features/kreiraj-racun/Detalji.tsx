import { Divider, Grid, Paper, Select, TextField, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { memo } from "react";

const Detalji = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: "32px" }}>
          <Typography variant="h5" component="h2">
            Detalji računa
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={6}>
              <TextField
                style={{ width: "100%" }}
                id="brojRacuna"
                label="Broj računa"
                required
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth required>
                <DatePicker label="Datum izdavanja *" />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <DatePicker label="Rok plaćanja" />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth required>
                <InputLabel id="valuta">Valuta</InputLabel>
                <Select labelId="valuta-label" id="valuta" label="Valuta">
                  <MenuItem value={1}>HRK</MenuItem>
                  <MenuItem value={2}>EUR</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                style={{ width: "100%" }}
                id="opis"
                label="Opis"
                multiline
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default memo(Detalji);
