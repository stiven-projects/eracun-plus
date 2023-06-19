import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import DetailsIcon from '@mui/icons-material/Details';
import ExtensionIcon from '@mui/icons-material/Extension';
import InfoIcon from '@mui/icons-material/Info';
import MoreIcon from '@mui/icons-material/More';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Box from "@mui/material/Box";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { memo, useState } from "react";
import TabPanel from '../../components/tabs/TabPanel';
import Detalji from './Detalji';
import IdentifikacijskiPodaci from "./IdentifikacijskiPodaci";
import Iznosi from './Iznosi';
import Ostalo from './Ostalo';
import Placanje from './Placanje';
import Porez from './Porez';
import Stavke from './Stavke';

const KreirajRacunLayout = () => {

  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Tabs
        aria-label="icon label tabs example"
        onChange={(_, value) => setCarouselIndex(value)}
        value={carouselIndex}
      >
        <Tab icon={<InfoIcon />} label="OSNOVNO" />
        <Tab icon={<DetailsIcon />} label="DETALJI" />
        <Tab icon={<ExtensionIcon />} label="STAVKE" />
        <Tab icon={<CreditCardOffIcon />} label="POREZ" />
        <Tab icon={<AttachMoneyIcon />} label="IZNOSI" />
        <Tab icon={<PointOfSaleIcon />} label="PLAĆANJE" />
        <Tab icon={<MoreIcon />} label="OSTALO" />
      </Tabs>

      <TabPanel index={0} value={carouselIndex}><IdentifikacijskiPodaci /></TabPanel>
      <TabPanel index={1} value={carouselIndex}><Detalji /></TabPanel>
      <TabPanel index={2} value={carouselIndex}><Stavke /></TabPanel>
      <TabPanel index={3} value={carouselIndex}><Porez /></TabPanel>
      <TabPanel index={4} value={carouselIndex}><Iznosi /></TabPanel>
      <TabPanel index={5} value={carouselIndex}><Placanje /></TabPanel>
      <TabPanel index={6} value={carouselIndex}><Ostalo /></TabPanel>
    </Box>
  );
};

export default memo(KreirajRacunLayout);
