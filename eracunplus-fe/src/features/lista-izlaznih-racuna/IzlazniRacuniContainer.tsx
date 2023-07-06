import Grid from "@mui/material/Grid";
import { useCallback, useState } from "react";
import { FieldValues, Form, FormProvider, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../lib/axios";
import IzlazniRacuniFilter from "./IzlazniRacuniFilter";
import IzlazniRacuniTable, {
  defaultPaginationModel,
  defaultSortModel,
} from "./IzlazniRacuniTable";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schemas/ValidationSchema";

const IzlazniRacuniContainer = () => {
  // Ako treba testirat backend provjere preko UI može se zakomentirati donja linija i odkomentirati linija ispod
  const methods = useForm({ resolver: yupResolver(schema), mode: "onChange"});
  //const methods = useForm();

  const [formData, setFormData] = useState({});
  const [tableData, setTableData] = useState({
    ...defaultPaginationModel,
    ...defaultSortModel,
  });

  const navigate = useNavigate();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["racuni", formData, tableData],
    queryFn: ({ queryKey }) => submit(queryKey[1], queryKey[2]),
  });

  const submit = useCallback((formData: any, tableData: any) => {
    return axiosInstance
      .post("racuni/lista", {
        ...formData,
        ...tableData,
        datumIzdavanja: formData?.datumIzdavanja?.format("YYYY-MM-DD"),
        rokPlacanja: formData?.rokPlacanja?.format("YYYY-MM-DD"),
      })
      .then((response) => response.data);
  }, []);

  const changeFormData = useCallback((values: FieldValues) => {
    const { data } = values;
    setFormData(data);
    setTableData({ ...defaultPaginationModel, ...defaultSortModel });
  }, []);

  const changeTableData = useCallback((value: any) => {
    const _value = value ? value : {field: tableData.field, sort: tableData.sort === 'asc' ? 'desc' : 'asc' }
    setTableData((prev) => {
      return { ...prev, ..._value };
    });
  }, [tableData]);

  const onRowClick = useCallback(({ id }: any) => {
    navigate("/detalji", {state: id});
  }, []);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={changeFormData} control={methods.control}>
        <Grid container spacing={2}>
          <IzlazniRacuniFilter />
          <IzlazniRacuniTable
            data={data}
            tableData={tableData}
            loading={isLoading || isFetching}
            changeTableData={changeTableData}
            onRowClick={onRowClick}
          />
        </Grid>
      </Form>
    </FormProvider>
  );
};

export default IzlazniRacuniContainer;
