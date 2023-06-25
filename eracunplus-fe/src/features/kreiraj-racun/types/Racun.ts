import { Moment } from "moment";

export type TRacun = {
  izdavatelj: Partial<TSudionik>;
  primatelj: Partial<TSudionik>;

  brojRacuna: string;
  datumIzdavanja: Moment;
  rokPlacanja: Moment;
  valuta: number;
  opis: string;

  stavke: Partial<TStavka>[];

  placanje: number;
  brojKartice: string;
  racunP: string;
  iban: string;
  swift: string;

  referenca: string;
  dodatnaNapomena: string;
  specificniZahtjevi: string;
  ostaleInformacije: string;
}

type TSudionik = {
  nazivTvrtke: string;
  oib: string;
  logo: Blob;
  adresa: string;
  drzava: string;
  postanskiBroj: string;
  grad: string;
  kontaktOsoba: string;
  email: string;
  telefon: string;
  pib: string;
  ibt: string;
  rbt: string;
  djelatnost: string;
}

type TStavka = {
  naziv: string;
  opis: string;
  kolicina: number;
  jCijena: number;
  stopa: number;
  popust: number;
}