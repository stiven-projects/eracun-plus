import { Paper, Typography, TextField, Divider, Select, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { memo } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Controller, useFormContext } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const IzlazniRacuniFilter = () => {

  const { control } = useFormContext();

  return (
    <Grid item xs={12}>
      <Paper elevation={3} style={{ padding: "32px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              Filter računa
            </Typography>
            <Divider />
          </Grid>

          <Grid item xs={4}>
            <Controller
              control={control}
              name={`nazivIzdavatelja`}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  size="small"
                  style={{ width: "100%" }}
                  label="Naziv izdavatelja"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </Grid>

          <Grid item xs={4}>
            <Controller
              control={control}
              name={`nazivPrimatelja`}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  size="small"
                  style={{ width: "100%" }}
                  label="Naziv primatelja"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </Grid>

          <Grid item xs={4}>
            <Controller
              control={control}
              name={`brojRacuna`}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  size="small"
                  style={{ width: "100%" }}
                  label="Broj računa"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </Grid>

          <Grid item xs={4}>
            <Controller
              control={control}
              name="datumIzdavanja"
              render={({ field: { onChange, value } }) => (
                <FormControl size="small" fullWidth>
                  <DatePicker
                    label="Datum izdavanja"
                    onChange={onChange}
                    value={value}
                    slotProps={{ textField: { size: "small" } }}
                  />
                </FormControl>
              )}
            />
          </Grid>

          <Grid item xs={4}>
            <Controller
              control={control}
              name="rokPlacanja"
              render={({ field: { onChange, value } }) => (
                <FormControl size="small" fullWidth>
                  <DatePicker
                    label="Rok plaćanja"
                    onChange={onChange}
                    value={value}
                    slotProps={{ textField: { size: "small" } }}
                  />
                </FormControl>
              )}
            />
          </Grid>

          <Grid item xs={4}>
            <Controller
              control={control}
              name="valuta"
              render={({ field: { onChange, onBlur, value } }) => (
                <FormControl fullWidth>
                  <InputLabel id="valuta" size="small">
                    Valuta
                  </InputLabel>
                  <Select
                    labelId="valuta-label"
                    id="valuta"
                    label="Valuta"
                    onChange={onChange}
                    onBlur={onBlur}
                    size="small"
                    value={value}
                  >
                    <MenuItem value={1}>HRK</MenuItem>
                    <MenuItem value={2}>EUR</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid>

          <Grid item marginLeft="auto">
            <Grid container spacing={2}>
              {/* <Grid item>
                <Button type="reset" variant="outlined" color="secondary">
                  Očisti
                </Button>
              </Grid> */}
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  Pretraži
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default memo(IzlazniRacuniFilter);
