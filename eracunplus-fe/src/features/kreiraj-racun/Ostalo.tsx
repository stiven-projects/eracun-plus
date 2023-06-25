import { Grid, Typography, Paper, Divider, TextField } from "@mui/material";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

const Ostalo = () => {

  const { control } = useFormContext();

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
