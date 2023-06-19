import { memo, useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { MuiFileInput } from 'mui-file-input'
import { Divider } from '@mui/material';

const Sudionik = () => {

  const [logo, setLogo] = useState<File | undefined>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Divider>Osnovni podaci</Divider>
      </Grid>

      <Grid item xs={6}>
        <TextField
          style={{ width: "100%" }}
          id="nazivTvrtke"
          label="Naziv tvrtke"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          style={{ width: "100%" }}
          id="oib"
          label="OIB ili Matični broj tvrtke"
          required
        />
      </Grid>

      <Grid item xs={12}>
        <MuiFileInput
          style={{ width: "100%" }}
          id="logoTvrtke"
          label="Logo tvrtke"
          value={logo}
          onChange={(newValue: File) => setLogo(newValue)}
        />
      </Grid>

      <Grid item xs={12}>
        <Divider>Adresni podaci</Divider>
      </Grid>

      <Grid item xs={6}>
        <TextField
          style={{ width: "100%" }}
          id="adresa"
          label="Adresa"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          style={{ width: "100%" }}
          id="drzava"
          label="Država"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          style={{ width: "100%" }}
          id="postanskiBroj"
          label="Poštanski broj"
          required
        />
      </Grid>

      <Grid item xs={6}>
        <TextField style={{ width: "100%" }} id="grad" label="Grad" required />
      </Grid>

      <Grid item xs={12}>
        <Divider>Kontakt podaci</Divider>
      </Grid>

      <Grid item xs={6}>
        <TextField
          style={{ width: "100%" }}
          id="kontakt"
          label="Kontakt osoba"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField style={{ width: "100%" }} id="email" label="Email adresa" />
      </Grid>

      <Grid item xs={6}>
        <TextField
          style={{ width: "100%" }}
          id="telefon"
          label="Telefonski broj"
        />
      </Grid>

      <Grid item xs={12}>
        <Divider>Ostali identifikacijski podaci</Divider>
      </Grid>

      <Grid item xs={6}>
        <TextField
          style={{ width: "100%" }}
          id="pib"
          label="Porezni identifikacijski broj"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          style={{ width: "100%" }}
          id="ibt"
          label="Identifikacijski broj tvrtke"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          style={{ width: "100%" }}
          id="rbt"
          label="Registracijski broj tvrtke"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          style={{ width: "100%" }}
          id="djelatnost"
          label="Oznaka djelatnosti"
        />
      </Grid>
    </Grid>
  );
}

export default memo(Sudionik)