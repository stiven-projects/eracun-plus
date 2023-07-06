import { ErrorMessage } from "@hookform/error-message";
import { Grid, Typography, Paper, Divider, TextField } from "@mui/material";
import { memo } from "react";
import { Controller, useFormContext, useFormState } from "react-hook-form";

const Ostalo = () => {

  const { control } = useFormContext();
  const { errors } = useFormState({control});

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={3} style={{ padding: "32px" }}>
          <Typography variant="h5" component="h2">
            Ostali podaci
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={6}>
              <Controller
                control={control}
                name="referenca"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    style={{ width: "100%" }}
                    label="Referenca na narudžbu"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}

                    error={!!errors?.referenca}
                    helperText={<ErrorMessage errors={errors} name={`referenca`}/>}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="dodatnaNapomena"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    style={{ width: "100%" }}
                    label="Dodatna napomena"
                    multiline
                    minRows={2}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}

                    error={!!errors?.dodatnaNapomena}
                    helperText={<ErrorMessage errors={errors} name={`dodatnaNapomena`}/>}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="specificniZahtjevi"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    style={{ width: "100%" }}
                    label="Specifični zahtjevi klijenta"
                    multiline
                    minRows={2}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}

                    error={!!errors?.specificniZahtjevi}
                    helperText={<ErrorMessage errors={errors} name={`specificniZahtjevi`}/>}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={control}
                name="ostaleInformacije"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    style={{ width: "100%" }}
                    label="Ostale informacije"
                    multiline
                    minRows={2}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}

                    error={!!errors?.ostaleInformacije}
                    helperText={<ErrorMessage errors={errors} name={`ostaleInformacije`}/>}
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

export default memo(Ostalo);
