import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DetailsIcon from "@mui/icons-material/Details";
import ExtensionIcon from "@mui/icons-material/Extension";
import InfoIcon from "@mui/icons-material/Info";
import MoreIcon from "@mui/icons-material/More";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import Badge from '@mui/material/Badge';
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { FieldErrors, useFormContext, useFormState } from "react-hook-form";
import { TRacun } from "./types/Racun";

interface Props{
  carouselIndex: number;
  setCarouselIndex: (index: number) => void;
}

type TTabsErrors = {
  osnovno: number;
  detalji: number;
  stavke: number;
  iznosi: number;
  placanje: number;
  ostalo: number;
}


const defaultKeys = ["message"];
const detaljiKeys = ["brojRacuna", "datumIzdavanja", "rokPlacanja", "valuta", "opis"];
const placanjeKeys = ["placanje", "brojKartice", "racunP", "iban", "swift"];
const ostaloKeys = ["referenca", "dodatnaNapomena", "specificniZahtjevi", "ostaleInformacije"];
const stavkeKeys = ["naziv", "opis", "kolicina", "jCijena", "stopa", "popust"];

function calculateTabErrors(errors: FieldErrors<TRacun>): TTabsErrors{
  const {izdavatelj, primatelj, stavke, ...rest} = errors;
  return {
    osnovno: calculateErrors(izdavatelj) + calculateErrors(primatelj),
    detalji: calculateErrorsWithKeys(rest, detaljiKeys),
    stavke: calculateErrorsForArray(stavke as any, stavkeKeys, false),
    iznosi: calculateErrorsWithKeys(errors, []),
    placanje: calculateErrorsWithKeys(errors, placanjeKeys),
    ostalo: calculateErrorsWithKeys(errors, ostaloKeys),
  }
}

function calculateErrors(errors: any = {}): number{ 
  return Object.keys(errors).length; 
}

function checkKey(key: string, keys: string[]):number {
  return keys.includes(key) ? 1 : 0;
}

function calculateErrorsWithKeys(errors: any, keys: string[]): number{ 
  return Object.keys(errors).reduce((accumulator: number, currentValue: string) => accumulator + checkKey(currentValue, keys), 0); 
}

function calculateErrorsForArray(errors: any, keys: string[], checkKeys: boolean): number{ 
  if(!errors) return 0;
  if(Array.isArray(errors)) return errors.reduce((accumulator: number, currentValue: any) => accumulator + calculateErrorsForArray(currentValue, keys, true), 0)
  return checkKeys ? calculateErrorsWithKeys(errors, keys) : calculateErrorsWithKeys(errors, defaultKeys);
}

const TabsContainer = ({ carouselIndex,  setCarouselIndex }: Props) => {

  const { control } = useFormContext();
  const { errors } = useFormState({control});
  
  const tabErrors: TTabsErrors = calculateTabErrors(errors);

  return (
    <Tabs
      onChange={(_, value) => setCarouselIndex(value)}
      value={carouselIndex}
    >
      <Tab icon={<Badge badgeContent={tabErrors.osnovno} color="error"><InfoIcon /></Badge>} label="OSNOVNO" />
      <Tab icon={<Badge badgeContent={tabErrors.detalji} color="error"><DetailsIcon /></Badge>} label="DETALJI" />
      <Tab icon={<Badge badgeContent={tabErrors.stavke} color="error"><ExtensionIcon /></Badge>} label="STAVKE" />
      <Tab icon={<Badge badgeContent={tabErrors.iznosi} color="error"><AttachMoneyIcon /></Badge>} label="IZNOSI" />
      <Tab icon={<Badge badgeContent={tabErrors.placanje} color="error"><PointOfSaleIcon /></Badge>} label="PLAĆANJE" />
      <Tab icon={<Badge badgeContent={tabErrors.ostalo} color="error"><MoreIcon /></Badge>} label="OSTALO" />
    </Tabs>
  );
}

export default TabsContainer