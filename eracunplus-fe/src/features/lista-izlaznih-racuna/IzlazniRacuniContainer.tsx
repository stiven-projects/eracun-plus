import Grid from "@mui/material/Grid";
import { useCallback, useState } from 'react';
import { FieldValues, Form, FormProvider, useForm } from "react-hook-form";
import IzlazniRacuniFilter from "./IzlazniRacuniFilter";
import IzlazniRacuniTable, { defaultPaginationModel, defaultSortModel } from "./IzlazniRacuniTable";
import { useQuery } from "react-query";
import { axiosInstance } from "../../lib/axios";

const IzlazniRacuniContainer = () => {

  const methods = useForm({ defaultValues: {nazivPrimatelja: undefined, valuta: undefined} });
  
  const [formData, setFormData] = useState({});
  const [tableData, setTableData] = useState({...defaultPaginationModel, ...defaultSortModel})

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["racuni", formData, tableData],
    queryFn: ({queryKey}) => submit(queryKey[1], queryKey[2]),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const submit = useCallback(
    (formData: any, tableData: any) => {
      return axiosInstance
        .post("racuni/lista", 
          {...formData, ...tableData, 
            datumIzdavanja: formData?.datumIzdavanja?.format("YYYY-MM-DD"),
            rokPlacanja: formData?.rokPlacanja?.format("YYYY-MM-DD"),
          })
        .then(response => response.data);
    },
    [],
  )
  

  const changeFormData = useCallback(
    (values: FieldValues) => {
      const { data } = values;
      setFormData(data);
      setTableData({...defaultPaginationModel, ...defaultSortModel})
    },
    [],
  )

  const changeTableData = useCallback(
    (value: any) => {
      setTableData(prev => {return {...prev, ...value}})
    },
    [],
  )

  return (
    <FormProvider {...methods}>
      <Form onSubmit={changeFormData} control={methods.control}>
        <Grid container spacing={2}>
          <IzlazniRacuniFilter />
          <IzlazniRacuniTable changeTableData={changeTableData} data={data} loading={isLoading || isFetching}/>
        </Grid>
      </Form>
    </FormProvider>
  );
};

export default IzlazniRacuniContainer;
