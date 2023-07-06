import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from 'react';
import { FieldValues, useForm } from "react-hook-form";
import { axiosInstance } from "../../lib/axios";
import KreirajRacunLayout from "./KreirajRacunLayout";
import { schema } from "./schemas/ValidationSchema";

function toStavke(stavke?: any[]){
  if(!stavke) return [];
  return stavke.map(stavka => {
    const {naziv, opis, kolicina, jCijena, stopa, popust } = stavka;
    return {naziv, opis, kolicina, jCijena, stopa, popust};
  });
}


const KreirajRacunContainer = () => {
  const methods = useForm({ resolver: yupResolver(schema), mode: "onChange"});

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