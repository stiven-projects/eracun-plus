import * as yup from 'yup';
import moment from 'moment';

export const schema = yup
  .object()
  .shape({
    izdavatelj: yup
      .object()
      .shape({
        nazivTvrtke: yup
          .string()
          .max(
            255,
            "Naziv tvrtke izdavatelja može sadržavati najviše 255 znakova"
          )
          .required("Naziv tvrtke izdavatelja je obavezan"),
        oib: yup
          .string()
          .max(255, "OIB izdavatelja može sadržavati najviše 255 znakova")
          .required("OIB izdavatelja je obavezan"),
        adresa: yup
          .string()
          .max(255, "Adresa izdavatelja može sadržavati najviše 255 znakova")
          .required("Adresa izdavatelja je obavezna"),
        drzava: yup
          .string()
          .max(255, "Država izdavatelja može sadržavati najviše 255 znakova")
          .required("Država izdavatelja je obavezna"),
        postanskiBroj: yup
          .string()
          .max(
            255,
            "Poštanski broj izdavatelja može sadržavati najviše 255 znakova"
          )
          .required("Poštanski broj izdavatelja je obavezan"),
        grad: yup
          .string()
          .max(255, "Grad izdavatelja može sadržavati najviše 255 znakova")
          .required("Grad izdavatelja je obavezan"),
        kontaktOsoba: yup
          .string()
          .max(
            255,
            "Kontakt osoba izdavatelja može sadržavati najviše 255 znakova"
          ),
        email: yup
          .string()
          .email("Unesite valjanu email adresu izdavatelja")
          .max(255, "Email izdavatelja može sadržavati najviše 255 znakova"),
        telefon: yup
          .string()
          .max(255, "Telefon izdavatelja može sadržavati najviše 255 znakova"),
        pib: yup
          .string()
          .max(255, "PIB izdavatelja može sadržavati najviše 255 znakova"),
        ibt: yup
          .string()
          .max(255, "IBT izdavatelja može sadržavati najviše 255 znakova"),
        rbt: yup
          .string()
          .max(255, "RBT izdavatelja može sadržavati najviše 255 znakova"),
        djelatnost: yup
          .string()
          .max(
            255,
            "Djelatnost izdavatelja može sadržavati najviše 255 znakova"
          ),
      })
      .required(),
    primatelj: yup
      .object()
      .shape({
        nazivTvrtke: yup
          .string()
          .max(
            255,
            "Naziv tvrtke primatelja može sadržavati najviše 255 znakova"
          )
          .required("Naziv tvrtke primatelja je obavezan"),
        oib: yup
          .string()
          .max(255, "OIB primatelja može sadržavati najviše 255 znakova")
          .required("OIB primatelja je obavezan"),
        adresa: yup
          .string()
          .max(255, "Adresa primatelja može sadržavati najviše 255 znakova")
          .required("Adresa primatelja je obavezna"),
        drzava: yup
          .string()
          .max(255, "Država primatelja može sadržavati najviše 255 znakova")
          .required("Država primatelja je obavezna"),
        postanskiBroj: yup
          .string()
          .max(
            255,
            "Poštanski broj primatelja može sadržavati najviše 255 znakova"
          )
          .required("Poštanski broj primatelja je obavezan"),
        grad: yup
          .string()
          .max(255, "Grad primatelja može sadržavati najviše 255 znakova")
          .required("Grad primatelja je obavezan"),
        kontaktOsoba: yup
          .string()
          .max(
            255,
            "Kontakt osoba primatelja može sadržavati najviše 255 znakova"
          ),
        email: yup
          .string()
          .email("Unesite valjanu email adresu primatelja")
          .max(255, "Email primatelja može sadržavati najviše 255 znakova"),
        telefon: yup
          .string()
          .max(255, "Telefon primatelja može sadržavati najviše 255 znakova"),
        pib: yup
          .string()
          .max(255, "PIB primatelja može sadržavati najviše 255 znakova"),
        ibt: yup
          .string()
          .max(255, "IBT primatelja može sadržavati najviše 255 znakova"),
        rbt: yup
          .string()
          .max(255, "RBT primatelja može sadržavati najviše 255 znakova"),
        djelatnost: yup
          .string()
          .max(
            255,
            "Djelatnost primatelja može sadržavati najviše 255 znakova"
          ),
      })
      .required(),
    brojRacuna: yup
      .string()
      .max(255, "Broj računa može sadržavati najviše 255 znakova")
      .required("Broj računa je obavezan"),
    datumIzdavanja: yup
      .mixed()
      .test("isValidDate", "Datum izdavanja nije valjan", (value) =>
        moment(value).isValid()
      )
      .required("Datum izdavanja je obavezan"),
    rokPlacanja: yup
      .mixed()
      .test("isValidDate", "Rok plaćanja nije valjan", function (value) {
        if (value === undefined) {
          return true;
        }

        const tomorrow = moment().add(1, "day").startOf("day");
        const selectedDate = moment(value);
        return selectedDate.isValid() && selectedDate.isSameOrAfter(tomorrow);
      }),
    valuta: yup.number().required("Valuta računa je obavezna"),
    opis: yup.string().max(255, "Opis može sadržavati najviše 255 znakova"),
    stavke: yup
      .array()
      .of(
        yup.object().shape({
          naziv: yup
            .string()
            .required("Naziv stavke je obavezan")
            .max(255, "Naziv stavke može sadržavati najviše 255 znakova"),
          opis: yup
            .string()
            .max(255, "Opis stavke može sadržavati najviše 255 znakova"),
          kolicina: yup.number().required("Količina stavke je obavezna"),
          jCijena: yup.number().required("Jedinična cijena stavke je obavezna"),
          stopa: yup.number().required("Stopa stavke je obavezna"),
          popust: yup.number(),
        })
      )
      .test("exists", "Potrebno je unijeti barem jednu stavku", function (value){
        if(!value) return false;
        if(Array.isArray(value) && value.length === 0) return false;
        return true;
      }),
    placanje: yup.number().required("Način plaćanja je obavezan"),
    brojKartice: yup
      .string()
      .max(255, "Broj kartice može sadržavati najviše 255 znakova"),
    racunP: yup
      .string()
      .max(255, "Račun P može sadržavati najviše 255 znakova"),
    iban: yup.string().max(255, "IBAN može sadržavati najviše 255 znakova"),
    swift: yup.string().max(255, "SWIFT može sadržavati najviše 255 znakova"),
    referenca: yup
      .string()
      .max(255, "Referenca može sadržavati najviše 255 znakova"),
    dodatnaNapomena: yup
      .string()
      .max(255, "Dodatna napomena može sadržavati najviše 255 znakova"),
    specificniZahtjevi: yup
      .string()
      .max(255, "Specifični zahtjevi može sadržavati najviše 255 znakova"),
    ostaleInformacije: yup
      .string()
      .max(255, "Ostale informacije može sadržavati najviše 255 znakova"),
  })
  .required();

export default schema;
