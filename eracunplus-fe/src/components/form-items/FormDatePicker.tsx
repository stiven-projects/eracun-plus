import { FormControl, TextField } from '@mui/material';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

type TProps = React.ComponentProps<typeof DatePicker>

const FormDatePicker = (props: TProps) => {

  const location = useLocation();

  const isShowFormItem = useMemo(() => location.pathname === "/kreiraj", [location])

  return (
    <>
    {
      isShowFormItem ? 
      <FormControl fullWidth required>
        <DatePicker
          {...props}
          />
      </FormControl> 
      :
      <TextField
        label={props.label}
        value={moment.isMoment(props.value) ? (props.value as any)._i : ""}
      />
    } 
    </>
  )
}

export default FormDatePicker