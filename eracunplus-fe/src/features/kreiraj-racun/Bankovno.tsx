import { ErrorMessage } from "@hookform/error-message";
import {
  Grid,
  TextField
} from "@mui/material";
import { memo } from 'react'
import { Controller, useFormContext, useFormState } from 'react-hook-form'

const Bankovno = () => {
  
  const { control } = useFormContext();
  const { errors } = useFormState({control});

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

              error={!!errors?.racunP}
              helperText={<ErrorMessage errors={errors} name={`racunP`}/>}
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

              error={!!errors?.iban}
              helperText={<ErrorMessage errors={errors} name={`iban`}/>}
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

              error={!!errors?.swift}
              helperText={<ErrorMessage errors={errors} name={`swift`}/>}
            />
          )}
        />
      </Grid>
    </>
  )
}

export default memo(Bankovno)