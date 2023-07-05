import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { memo } from 'react';
import { Controller, useFormContext } from "react-hook-form";

interface Props{
  sudionik: "izdavatelj" | "primatelj"
}

const Sudionik = ({ sudionik }: Props) => {

  const { control } = useFormContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Divider>Osnovni podaci</Divider>
      </Grid>

      <Grid item xs={6}>
        <Controller
          control={control}
          name={`${sudionik}.nazivTvrtke`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="Naziv tvrtke"
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
          name={`${sudionik}.oib`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="OIB ili Matični broj tvrtke"
              required

              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Divider>Adresni podaci</Divider>
      </Grid>

      <Grid item xs={6}>
        <Controller
          control={control}
          name={`${sudionik}.adresa`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="Adresa"
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
          name={`${sudionik}.drzava`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="Država"
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
          name={`${sudionik}.postanskiBroj`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="Poštanski broj"
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
          name={`${sudionik}.grad`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="Grad"
              required

              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Divider>Kontakt podaci</Divider>
      </Grid>

      <Grid item xs={6}>
        <Controller
          control={control}
          name={`${sudionik}.kontaktOsoba`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="Kontakt osoba"

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
          name={`${sudionik}.email`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="Email adresa"

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
          name={`${sudionik}.telefon`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="Telefonski broj"

              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Divider>Ostali identifikacijski podaci</Divider>
      </Grid>

      <Grid item xs={6}>
        <Controller
          control={control}
          name={`${sudionik}.PIB`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="Porezni identifikacijski broj"

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
          name={`${sudionik}.IBT`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="Identifikacijski broj tvrtke"

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
          name={`${sudionik}.RBT`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="Registracijski broj tvrtke"

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
          name={`${sudionik}.djelatnost`}
          render={({field: {onChange, onBlur, value}}) => (
            <TextField
              style={{ width: "100%" }}
              label="Oznaka djelatnosti"

              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default memo(Sudionik)