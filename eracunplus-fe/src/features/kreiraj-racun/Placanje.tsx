import {
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography
} from "@mui/material";
import { memo, useMemo } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import Bankovno from "./Bankovno";
import Karticno from "./Karticno";

const naciniPlacanja = [
  {
    label: "Gotovinsko",
    value: 1,
  },
  {
    label: "Kartično",
    value: 2,
  },
  {
    label: "Bankovna transakcija",
    value: 3,
  },
];

const Placanje = () => {

  const { control } = useFormContext();

  const placanje = useWatch({name: "placanje", control});

  const placanjeComponent = useMemo(() => {
    switch (placanje) {
      case 1:
        return <></>
      case 2:
        return <Karticno />
      case 3:
        return <Bankovno />
    }
  }, [placanje]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation={3} style={{ padding: "32px" }}>
          <Typography variant="h5" component="h2">
            Podaci o plaćanju
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    name={`placanje`}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <FormControl fullWidth required>
                        <InputLabel id="placanje">Način plaćanja</InputLabel>
                        <Select
                          labelId="placanje-label"
                          id="placanje"
                          label="Način plaćanja"
                          onChange={onChange}
                          onBlur={onBlur}
                          value={value}
                        >
                          {naciniPlacanja.map((element) => (
                            <MenuItem key={element.value} value={element.value}>
                              {element.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>

            {placanjeComponent}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default memo(Placanje);
