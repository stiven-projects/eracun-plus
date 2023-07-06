import { Button, Divider, Grid, Paper, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { memo, useMemo } from "react";
import { useFieldArray, useFormContext, useFormState } from "react-hook-form";
import Stavka from "./Stavka";
import { ErrorMessage } from "@hookform/error-message";
import { useLocation } from "react-router-dom";

const Stavke = () => {
  const location = useLocation();
  const isKreiraj = useMemo(() => location.pathname === "/kreiraj", [location])
  
  const { control } = useFormContext();
  const { errors } = useFormState({control, name: "stavke", exact: true});
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "stavke",
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: "32px" }}>
          <Typography variant="h5" component="h2">
            <Grid container spacing={2} justifyContent={"space-between"}>
              <Grid item>Stavke računa</Grid>
              <Grid item>
                <ErrorMessage
                  errors={errors}
                  name={`stavke`}
                  render={(data) => (
                    <div style={{ color: "#d32f2f" }}>{data.message}</div>
                  )}
                />
              </Grid>
            </Grid>
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
                canDelete={isKreiraj}
                remove={() => remove(index)}
              />
            ))}

            { isKreiraj &&
              <Grid item xs={12}>
                <Button startIcon={<AddIcon />} onClick={append}>
                  Dodaj stavku
                </Button>
              </Grid>
            }
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default memo(Stavke);
