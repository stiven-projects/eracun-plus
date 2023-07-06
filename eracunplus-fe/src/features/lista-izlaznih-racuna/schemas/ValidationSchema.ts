import * as yup from 'yup';

export const schema = yup.object().shape({
  nazivIzdavatelja: yup
    .string()
    .max(255, "Naziv izdavatelja može sadržavati najviše 255 znakova"),
  nazivPrimatelja: yup
    .string()
    .max(255, "Naziv primatelja može sadržavati najviše 255 znakova"),
    brojRacuna: yup
    .string()
    .max(255, "Broj računa može sadržavati najviše 255 znakova")
}); 