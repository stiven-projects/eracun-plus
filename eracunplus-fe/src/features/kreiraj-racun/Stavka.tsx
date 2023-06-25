import { Button, Grid, Select, TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { memo } from "react";

import { Controller, useFormContext, useWatch } from "react-hook-form";

const porezneStope: { label: string; value: number }[] = [
  {
    label: "PDV - Niska stopa",
    value: 10,
  },
  {
    label: "PDV - Snižena stopa",
    value: 15,
  },
  {
    label: "PDV - Standardna stopa",
    value: 20,
  },
  {
    label: "PDV - Srednja stopa",
    value: 30,
  },
  {
    label: "PDV - Visoka stopa",
    value: 40,
  },
];

function uLocale(iznos: number) {
  return iznos.toLocaleString("hr-HR", {
    minimumFractionDigits: 2,
    currency: "EUR",
    currencyDisplay: "symbol",
  });
}

interface Props {
  index: number;
  namePrefix: string;

  remove: () => void;
}

const Stavka = ({ index, namePrefix, remove }: Props) => {
  const { control } = useFormContext();

  const kolicina = useWatch({ name: namePrefix + ".kolicina", control });
  const jCijena = useWatch({ name: namePrefix + ".jCijena", control });
  const stopa = useWatch({ name: namePrefix + ".stopa", control });
  const popust = useWatch({ name: namePrefix + ".popust", control });

  const uCijena = (kolicina ?? 0) * (jCijena ?? 0);
  const iPorez = uCijena * ((stopa ?? 0) / 100);
  const bruto = uCijena + iPorez;
  const uPopust = +(bruto - bruto * ((popust ?? 0) / 100)).toFixed(2);

  return (
    <>
      <Grid item xs={12}>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item>
            <Typography variant="h5" component="h2">
              Stavka {index + 1}
            </Typography>
          </Grid>
          <Grid item>
            <Button color="error" onClick={remove}>
              Ukloni
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2}>
        <Controller
          control={control}
          name={`${namePrefix}.naziv`}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              style={{ width: "100%" }}
              label="Naziv stavke"
              required
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Grid>

      <Grid item xs={2}>
        <Controller
          control={control}
          name={`${namePrefix}.opis`}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              style={{ width: "100%" }}
              label="Opis stavke"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Grid>

      <Grid item xs={2}>
        <Controller
          control={control}
          name={`${namePrefix}.kolicina`}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              type="number"
              style={{ width: "100%" }}
              label="Količina"
              required
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Grid>

      <Grid item xs={2}>
        <Controller
          control={control}
          name={`${namePrefix}.jCijena`}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              type="number"
              style={{ width: "100%" }}
              label="Jedinična cijena"
              required
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Grid>

      <Grid item xs={2}>
        <TextField
          style={{ width: "100%" }}
          label="Ukupno"
          value={uLocale(uCijena)}
        />
      </Grid>

      <Grid item xs={2}>
        <Controller
          control={control}
          name={`${namePrefix}.stopa`}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormControl fullWidth required>
              <InputLabel id="stopa">Porezna stopa</InputLabel>
              <Select
                labelId="stopa-label"
                id="stopa"
                label="Porezna stopa"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                defaultValue={20}
              >
                {porezneStope.map((stopa) => (
                  <MenuItem key={stopa.value} value={stopa.value}>
                    {stopa.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      </Grid>

      <Grid item xs={2}>
        <TextField
          style={{ width: "100%" }}
          label="Iznos poreza"
          value={uLocale(iPorez)}
        />
      </Grid>

      <Grid item xs={2}>
        <Controller
          control={control}
          name={`${namePrefix}.popust`}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              type="number"
              style={{ width: "100%" }}
              label="Popust %"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Grid>

      <Grid item xs={2}>
        <TextField
          style={{ width: "100%" }}
          label="Ukupno s popustom"
          value={uLocale(uPopust)}
        />
      </Grid>
    </>
  );
};

export default memo(Stavka);
