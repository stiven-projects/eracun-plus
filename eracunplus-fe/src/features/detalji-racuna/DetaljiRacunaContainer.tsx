import Backdrop from "@mui/material/Backdrop";
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from "react-query";
import { useLocation } from 'react-router-dom';
import { axiosInstance } from '../../lib/axios';
import KreirajRacunLayout from '../kreiraj-racun/KreirajRacunLayout';


function prepareData(data: any){
  const {datumIzdavanja, rokPlacanja, ...rest} = data;
  return {...rest, 
    datumIzdavanja: moment.utc(datumIzdavanja, "YYYY-MM-DD", true), 
    rokPlacanja: moment.utc(rokPlacanja, "YYYY-MM-DD", true)
  };
}

const DetaljiRacunaContainer = () => {

  const methods = useForm();

  const location = useLocation();

  const {isLoading, isFetching} = useQuery({
    queryKey: ["detalji", location.state],
    queryFn: ({queryKey}) => axiosInstance.get(`racuni/detalji/${queryKey[1]}`).then(response => response.data),
    onSuccess: data => setFormData(prepareData(data), ''),
    enabled: !!location.state,
  });

  const setFormData = useCallback((data: any, parentKey: string) => {
    Object.entries(data).forEach(([key, value]) => {
      const fieldName = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value === "object" && value !== null) {
        setFormData(value, fieldName);
      } else {
        methods.setValue(fieldName, value);
      }
    });
  }, []);
  
  if(isLoading || isFetching) return (<Backdrop open><CircularProgress/></Backdrop>);

  return (
    <KreirajRacunLayout methods={methods} disable/>
  )
}

export default DetaljiRacunaContainer