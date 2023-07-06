import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { memo } from 'react';
import { Controller, FieldErrors, useFormContext, useFormState } from "react-hook-form";
import { TSudionik } from '../../features/kreiraj-racun/types/Racun';
import { ErrorMessage } from '@hookform/error-message';

interface Props{
  sudionik: "izdavatelj" | "primatelj"
}

const Sudionik = ({ sudionik }: Props) => {

  const { control } = useFormContext();
  const { errors } = useFormState({control, name: sudionik});

  const sudionikErrors: FieldErrors<TSudionik> = errors?.[sudionik] as FieldErrors<TSudionik>;

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
              label="Naziv tvrtke *"

              onChange={onChange}
              onBlur={onBlur}
              value={value}

              error={!!sudionikErrors?.nazivTvrtke}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.nazivTvrtke`}/>}
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
              label="OIB ili Matični broj tvrtke *"

              onChange={onChange}
              onBlur={onBlur}
              value={value}

              error={!!sudionikErrors?.oib}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.oib`}/>}
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
              label="Adresa *"

              onChange={onChange}
              onBlur={onBlur}
              value={value}

              error={!!sudionikErrors?.adresa}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.adresa`}/>}
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
              label="Država *"

              onChange={onChange}
              onBlur={onBlur}
              value={value}

              error={!!sudionikErrors?.drzava}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.drzava`}/>}
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
              label="Poštanski broj *"

              onChange={onChange}
              onBlur={onBlur}
              value={value}

              error={!!sudionikErrors?.postanskiBroj}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.postanskiBroj`}/>}
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
              label="Grad *"

              onChange={onChange}
              onBlur={onBlur}
              value={value}

              error={!!sudionikErrors?.grad}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.grad`}/>}
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

              error={!!sudionikErrors?.kontaktOsoba}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.kontaktOsoba`}/>}
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

              error={!!sudionikErrors?.email}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.email`}/>}
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

              error={!!sudionikErrors?.telefon}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.telefon`}/>}
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

              error={!!sudionikErrors?.pib}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.PIB`}/>}
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

              error={!!sudionikErrors?.ibt}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.IBT`}/>}
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

              error={!!sudionikErrors?.rbt}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.RBT`}/>}
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

              error={!!sudionikErrors?.djelatnost}
              helperText={<ErrorMessage errors={errors} name={`${sudionik}.djelatnost`}/>}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default memo(Sudionik)