import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DetailsIcon from "@mui/icons-material/Details";
import ExtensionIcon from "@mui/icons-material/Extension";
import InfoIcon from "@mui/icons-material/Info";
import MoreIcon from "@mui/icons-material/More";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "moment/locale/hr";
import { memo, useCallback, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import TabPanel from "../../components/tabs/TabPanel";
import { axiosInstance } from "../../lib/axios";
import Detalji from "./Detalji";
import IdentifikacijskiPodaci from "./IdentifikacijskiPodaci";
import Iznosi from "./Iznosi";
import Ostalo from "./Ostalo";
import Placanje from "./Placanje";
import Stavke from "./Stavke";
import { initialRacun } from "./utils/initialValues";

function toStavke(stavke?: any[]){
  if(!stavke) return [];
  return stavke.map(stavka => {
    const {naziv, opis, kolicina, jCijena, stopa, popust } = stavka;
    return {naziv, opis, kolicina, jCijena, stopa, popust};
  });
}

const KreirajRacunLayout = () => {
  const methods = useForm({ defaultValues: initialRacun });

  const [carouselIndex, setCarouselIndex] = useState(0);

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
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(submit)}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <Tabs
                onChange={(_, value) => setCarouselIndex(value)}
                value={carouselIndex}
              >
                <Tab icon={<InfoIcon />} label="OSNOVNO" />
                <Tab icon={<DetailsIcon />} label="DETALJI" />
                <Tab icon={<ExtensionIcon />} label="STAVKE" />
                <Tab icon={<AttachMoneyIcon />} label="IZNOSI" />
                <Tab icon={<PointOfSaleIcon />} label="PLAĆANJE" />
                <Tab icon={<MoreIcon />} label="OSTALO" />
              </Tabs>
            </Grid>

            <Grid item>
              <Button type="submit" variant="contained" color="success">
                Spremi račun
              </Button>
            </Grid>
          </Grid>

          <TabPanel index={0} value={carouselIndex}>
            <IdentifikacijskiPodaci />
          </TabPanel>
          <TabPanel index={1} value={carouselIndex}>
            <Detalji />
          </TabPanel>
          <TabPanel index={2} value={carouselIndex}>
            <Stavke />
          </TabPanel>
          <TabPanel index={3} value={carouselIndex}>
            <Iznosi />
          </TabPanel>
          <TabPanel index={4} value={carouselIndex}>
            <Placanje />
          </TabPanel>
          <TabPanel index={5} value={carouselIndex}>
            <Ostalo />
          </TabPanel>
        </Box>
      </Form>
    </FormProvider>
  );
};

export default memo(KreirajRacunLayout);
