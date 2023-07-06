import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import "moment/locale/hr";
import { memo, useState } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import TabPanel from "../../components/tabs/TabPanel";
import Detalji from "./Detalji";
import IdentifikacijskiPodaci from "./IdentifikacijskiPodaci";
import Iznosi from "./Iznosi";
import Ostalo from "./Ostalo";
import Placanje from "./Placanje";
import Stavke from "./Stavke";
import TabsContainer from "./TabsContainer";
import styles from "./styles/KreirajRacunLayout.module.css";

interface Props{
  methods: UseFormReturn<any, any, undefined>
  disable?: boolean;
  submit?: (values: FieldValues) => void;
}

const KreirajRacunLayout = ({methods, disable, submit}: Props) => {

  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <FormProvider {...methods}>
      <form onSubmit={submit ? methods.handleSubmit(submit) : undefined} noValidate>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <TabsContainer carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex}/>
            </Grid>

            { !disable &&
              <Grid item>
                <Button type="submit" variant="contained" color="success">
                  Spremi račun
                </Button>
              </Grid>
            }
          </Grid>

          <fieldset disabled={disable} className={styles.fieldsetCss}>
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
          </fieldset>
        </Box>
      </form>
    </FormProvider>
  );
};

export default memo(KreirajRacunLayout);
