import { Button, Divider, Grid, Paper, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { memo } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import Stavka from "./Stavka";

const Stavke = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "stavke",
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: "32px" }}>
          <Typography variant="h5" component="h2">
            Stavke računa
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider />
            </Grid>

            {fields.map((field, index) => (
              <Stavka
                namePrefix={`stavke.${index.toString()}`}
                key={field.id}
                index={index}
                remove={() => remove(index)}
              />
            ))}

            <Grid item xs={12}>
              <Button startIcon={<AddIcon />} onClick={append}>
                Dodaj stavku
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default memo(Stavke);
