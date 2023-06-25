import { Grid, Typography, Paper, Divider, TextField } from "@mui/material";
import { memo, useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";

function uLocale(iznos: number) {
  return iznos?.toLocaleString("hr-HR", {minimumFractionDigits: 2, currency: "EUR", currencyDisplay: "symbol"});
}

const Iznosi = () => {

  const { control } = useFormContext();
  const stavke = useWatch({name: "stavke", control});

  const {bezPopusta, bezPoreza, ukPopust, ukPorez, uk} = useMemo(() => {
    
    const ukPopust = stavke?.reduce((accumulator: number, object: any) => {
      const {kolicina, jCijena, popust, stopa} = object;
      const uCijena = (kolicina??0)*(jCijena??0);
      const iPorez = uCijena * ((stopa ?? 0) / 100);
      const bruto = uCijena + iPorez;
      return accumulator + +(bruto * ((popust ?? 0) / 100)).toFixed(2);
    }, 0) ?? 0;
    
    const ukPorez = stavke?.reduce((accumulator: number, object: any) => {
      const {kolicina, jCijena, stopa} = object;
      const uCijena = (kolicina??0)*(jCijena??0);
      return accumulator + +(uCijena * ((stopa ?? 0) / 100)).toFixed(2);
    }, 0) ?? 0;
    
    const uk = stavke?.reduce((accumulator: number, object: any) => {
      const {kolicina, jCijena, popust, stopa} = object;
      const uCijena = (kolicina??0)*(jCijena??0);
      const iPorez = uCijena * ((stopa ?? 0) / 100);
      const bruto = uCijena + iPorez;
      return accumulator + +(bruto - bruto * ((popust ?? 0) / 100)).toFixed(2);
    }, 0) ?? 0;

    const bezPopusta = uk - ukPopust;

    const bezPoreza = uk - ukPorez;

    return {bezPopusta, bezPoreza, ukPopust, ukPorez, uk};
  }, [stavke]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={3} style={{ padding: "32px" }}>
          <Typography variant="h5" component="h2">
            Ukupni iznosi
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={6}>
              <TextField
                disabled
                style={{ width: "100%" }}
                label="Ukupno bez popusta"
                value={uLocale(bezPopusta)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                disabled
                style={{ width: "100%" }}
                label="Ukupno bez poreza"
                value={uLocale(bezPoreza)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                disabled
                style={{ width: "100%" }}
                label="Iznos popusta"
                value={uLocale(ukPopust)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                disabled
                style={{ width: "100%" }}
                label="Iznos poreza"
                value={uLocale(ukPorez)}
              />
            </Grid>

            <Grid item xs={12}>
              <Grid container justifyContent={"end"}>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    style={{ width: "100%" }}
                    label="Ukupno"
                    value={uLocale(uk)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default memo(Iznosi);
