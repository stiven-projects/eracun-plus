import { Grid, TextField } from "@mui/material";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

const Karticno = () => {
  const { control } = useFormContext();

  return (
    <>
      <Grid item xs={6}>
        <Controller
          control={control}
          shouldUnregister
          name={`brojKartice`}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              style={{ width: "100%" }}
              label="Broj kartice"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Grid>
    </>
  );
};

export default memo(Karticno);
