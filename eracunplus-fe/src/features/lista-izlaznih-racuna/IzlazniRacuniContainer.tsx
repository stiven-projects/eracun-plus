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

const IzlazniRacuniContainer = () => {
  const methods = useForm({
    defaultValues: { nazivPrimatelja: undefined, valuta: undefined },
  });

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
    setTableData((prev) => {
      return { ...prev, ...value };
    });
  }, []);

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
