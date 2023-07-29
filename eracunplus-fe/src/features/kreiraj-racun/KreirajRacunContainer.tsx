import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from 'react';
import { FieldValues, useForm } from "react-hook-form";
import { axiosInstance } from "../../lib/axios";
import KreirajRacunLayout from "./KreirajRacunLayout";
import { schema } from "./schemas/ValidationSchema";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

function toStavke(stavke?: any[]){
  if(!stavke) return [];
  return stavke.map(stavka => {
    const {naziv, opis, kolicina, jCijena, stopa, popust } = stavka;
    return {naziv, opis, kolicina, jCijena, stopa, popust};
  });
}


const KreirajRacunContainer = () => {
  // Ako treba testirat backend provjere preko UI može se zakomentirati donja linija i odkomentirati linija ispod
  const methods = useForm({ resolver: yupResolver(schema), mode: "onChange"});
  //const methods = useForm();

  const navigate = useNavigate();

  const submit = useCallback((values: FieldValues) => {
    const { datumIzdavanja, rokPlacanja, stavke, ...rest } = values;
    axiosInstance.post("racuni", {
      ...rest,
      stavke: toStavke(stavke),
      datumIzdavanja: datumIzdavanja?.format("YYYY-MM-DD"),
      rokPlacanja: rokPlacanja?.format("YYYY-MM-DD"),
    }).then(() => {
      enqueueSnackbar("Uspješno kreiran račun!", {variant: "success"})
      navigate("/izlazni");
    });
  }, []);
  
  return (
    <KreirajRacunLayout methods={methods} submit={submit}/>
  )
}

export default KreirajRacunContainer