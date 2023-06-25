import {
  Grid,
  TextField
} from "@mui/material";
import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const Bankovno = () => {
  
  const { control } = useFormContext();

  return (
    <>
      <Grid item xs={6}>
        <Controller
          control={control}
          shouldUnregister
          name={`racunP`}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              style={{ width: "100%" }}
              label="Broj računa primatelja"
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
          shouldUnregister
          name={`iban`}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              style={{ width: "100%" }}
              label="IBAN"
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
          shouldUnregister
          name={`swift`}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              style={{ width: "100%" }}
              label="SWIFT/BIC kod"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Grid>
    </>
  )
}

export default memo(Bankovno)