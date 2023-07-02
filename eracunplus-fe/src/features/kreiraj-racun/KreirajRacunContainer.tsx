import { FieldValues, useForm } from "react-hook-form";
import KreirajRacunLayout from "./KreirajRacunLayout"
import { initialRacun } from "./utils/initialValues";
import { useCallback } from 'react'
import { axiosInstance } from "../../lib/axios";

function toStavke(stavke?: any[]){
  if(!stavke) return [];
  return stavke.map(stavka => {
    const {naziv, opis, kolicina, jCijena, stopa, popust } = stavka;
    return {naziv, opis, kolicina, jCijena, stopa, popust};
  });
}


const KreirajRacunContainer = () => {

  const methods = useForm({ defaultValues: initialRacun });

  const submit = useCallback((values: FieldValues) => {
    const { datumIzdavanja, rokPlacanja, stavke, ...rest } = values;
    axiosInstance.post("racuni", {
      ...rest,
      stavke: toStavke(stavke),
      datumIzdavanja: datumIzdavanja?.format("YYYY-MM-DD"),
      rokPlacanja: rokPlacanja?.format("YYYY-MM-DD"),
    });
  }, []);

  return (
    <KreirajRacunLayout methods={methods} submit={submit}/>
  )
}

export default KreirajRacunContainer