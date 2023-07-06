import { Moment } from "moment";

export type TRacun = {
  izdavatelj: TSudionik;
  primatelj: TSudionik;

  brojRacuna: string;
  datumIzdavanja: Moment;
  rokPlacanja?: Moment;
  valuta: number;
  opis?: string;

  stavke: TStavka[];

  placanje: number;
  brojKartice?: string;
  racunP?: string;
  iban?: string;
  swift?: string;

  referenca?: string;
  dodatnaNapomena?: string;
  specificniZahtjevi?: string;
  ostaleInformacije?: string;
}

export type TSudionik = {
  nazivTvrtke: string;
  oib: string;
  adresa: string;
  drzava: string;
  postanskiBroj: string;
  grad: string;
  kontaktOsoba?: string;
  email?: string;
  telefon?: string;
  pib?: string;
  ibt?: string;
  rbt?: string;
  djelatnost?: string;
}

export type TStavka = {
  naziv: string;
  opis?: string;
  kolicina: number;
  jCijena: number;
  stopa: number;
  popust?: number;
}