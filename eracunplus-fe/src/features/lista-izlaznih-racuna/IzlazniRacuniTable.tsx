import { Paper, Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import { DataGrid, GridColDef, GridSortItem, GridPaginationModel } from "@mui/x-data-grid";
import { memo } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 75},
  { field: "nazivIzdavatelja", headerName: "Izdavatelj", width: 200},
  { field: "nazivPrimatelja", headerName: "Primatelj", width: 200},
  { field: "brojRacuna", headerName: "Broj računa", width: 200},
  { field: "datumIzdavanja", headerName: "Datum izdavanja", width: 200},
  { field: "rokPlacanja", headerName: "Rok plaćanja", width: 200},
  { field: "valuta", headerName: "Valuta", width: 100, valueGetter({value}) {
    return mapValuta(value);
  },}
];

export const defaultSortModel: GridSortItem = {field: "id", sort: "desc"};
export const defaultPaginationModel: GridPaginationModel = {page: 0, pageSize: 10};

function mapValuta(valuta: any){
  return valuta === 1 ? "HRK" : "EUR";
}

interface Props{
  data: any;
  loading: boolean;
  changeTableData: (value: any) => void
}

const IzlazniRacuniTable = ({ data, loading, changeTableData }: Props) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={3} style={{ padding: "32px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              Tablica računa
            </Typography>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            { data?.data &&
            <DataGrid
            rows={data?.data}
            rowCount={data?.totalData}
              columns={columns}
              loading={loading}
              initialState={{
                sorting: {sortModel: [defaultSortModel]},
                pagination: {paginationModel: defaultPaginationModel}
              }}
              paginationMode="server"
              disableColumnMenu
              onPaginationModelChange={changeTableData}
              onSortModelChange={model => changeTableData(model[0])}
            />}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default memo(IzlazniRacuniTable);
