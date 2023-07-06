import { ErrorMessage } from "@hookform/error-message";
import { Grid, TextField } from "@mui/material";
import { memo } from "react";
import { Controller, useFormContext, useFormState } from "react-hook-form";

const Karticno = () => {
  const { control } = useFormContext();
  const { errors } = useFormState({control});

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

              error={!!errors?.brojKartice}
              helperText={<ErrorMessage errors={errors} name={`brojKartice`}/>}
            />
          )}
        />
      </Grid>
    </>
  );
};

export default memo(Karticno);
