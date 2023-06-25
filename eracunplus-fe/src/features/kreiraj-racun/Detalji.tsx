import {
  Divider,
  Grid,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

const Detalji = () => {

  const { control } = useFormContext();

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
              <Controller
                control={control}
                name="brojRacuna"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    style={{ width: "100%" }}
                    label="Broj računa"
                    required
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                control={control}
                name="datumIzdavanja"
                render={({ field: { onChange, value } }) => (
                  <FormControl fullWidth required>
                    <DatePicker
                      label="Datum izdavanja *"
                      onChange={onChange}
                      value={value}
                    />
                  </FormControl>
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                control={control}
                name="rokPlacanja"
                render={({ field: { onChange, value } }) => (
                  <FormControl fullWidth>
                    <DatePicker 
                      label="Rok plaćanja"
                      onChange={onChange}
                      value={value}
                    />
                  </FormControl>
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                control={control}
                name="valuta"
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormControl fullWidth required>
                    <InputLabel id="valuta">Valuta</InputLabel>
                    <Select
                      labelId="valuta-label"
                      id="valuta"
                      label="Valuta"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                    >
                      <MenuItem value={1}>HRK</MenuItem>
                      <MenuItem value={2}>EUR</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="opis"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    style={{ width: "100%" }}
                    label="Opis"
                    multiline
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default memo(Detalji);
