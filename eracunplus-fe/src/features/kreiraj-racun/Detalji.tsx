import {
  Divider,
  FormHelperText,
  Grid,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { memo } from "react";
import { Controller, useFormContext, useFormState } from "react-hook-form";
import FormDatePicker from "../../components/form-items/FormDatePicker";
import { ErrorMessage } from "@hookform/error-message";

const Detalji = () => {

  const { control } = useFormContext();
  const { errors } = useFormState({control});

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
                    label="Broj računa *"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}

                    error={!!errors?.brojRacuna}
                    helperText={<ErrorMessage errors={errors} name={`brojRacuna`}/>}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                control={control}
                name="datumIzdavanja"
                render={({ field: { onChange, value } }) => (
                  <FormControl fullWidth>
                    <FormDatePicker
                      label="Datum izdavanja *"
                      onChange={onChange}
                      value={value}

                      slotProps={{
                        textField: {
                          error: !!errors?.datumIzdavanja,
                          helperText: <ErrorMessage errors={errors} name={`datumIzdavanja`}/>
                        }
                      }}
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
                    <FormDatePicker 
                      label="Rok plaćanja"
                      onChange={onChange}
                      value={value}

                      slotProps={{
                        textField: {
                          error: !!errors?.rokPlacanja,
                          helperText: <ErrorMessage errors={errors} name={`rokPlacanja`}/>
                        }
                      }}
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
                  <FormControl fullWidth error={!!errors?.valuta}>
                    <InputLabel id="valuta">Valuta *</InputLabel>
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
                    <ErrorMessage errors={errors} name={`valuta`} as={<FormHelperText />}/>
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

                    error={!!errors?.opis}
                    helperText={<ErrorMessage errors={errors} name={`opis`}/>}
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
