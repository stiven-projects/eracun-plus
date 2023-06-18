import { Stack, Typography, Divider, Container } from "@mui/material";

const Naslovnica = () => {
  return (
    <Container>
      <Stack spacing={3} justifyContent="center" alignItems="center" divider={<Divider variant="middle" flexItem/>}>
        <Typography variant="h4" component="h1" align="center">
          Dobrodošli na našu platformu za slanje e-računa!
        </Typography>

        <Typography variant="body1" align="justify">
          Naša platforma omogućava vam da bez napora pređete na moderno i
          efikasno poslovanje putem e-računa. Spremni smo vam pružiti sve alate
          i funkcionalnosti potrebne za brzo, sigurno i ekonomično izdavanje i
          slanje elektroničkih računa.
        </Typography>

        <Typography variant="body1" align="justify">
          Jednostavnost korištenja je naš prioritet. S intuitivnim korisničkim
          sučeljem, lako ćete se snalaziti u našoj platformi, čak i ako nemate
          prethodno iskustvo s e-računima. Bez obzira na veličinu vašeg
          poslovanja, naša platforma je prilagođena kako bi odgovarala potrebama
          malih, srednjih i velikih tvrtki.
        </Typography>

        <Typography variant="body1" align="justify">
          Sigurnost je ključna za nas. Shvaćamo važnost povjerljivosti vaših
          poslovnih podataka. Zato smo implementirali najnovije sigurnosne mjere
          kako bismo osigurali da vaši e-računi budu zaštićeni od neovlaštenog
          pristupa. Vaše podatke štitimo enkripcijom, a vaša komunikacija s
          platformom je sigurna i zaštićena.
        </Typography>

        <Typography variant="body1" align="justify">
          Ušteda vremena i resursa je ono što pružamo. Eliminirajući ručni unos
          podataka, tiskanje i slanje papirnatih računa, naša platforma vam
          omogućava da automatizirate proces izdavanja računa i smanjite
          administrativne troškove. Također vam pružamo mogućnost praćenja
          statusa plaćanja i izvještavanja, čime olakšavamo vaše financijsko
          upravljanje.
        </Typography>

        <Typography variant="body1" align="justify">
          Prilagodljivost je ključ uspjeha. Bez obzira na vaše poslovne potrebe,
          naša platforma je fleksibilna i prilagodljiva. Možete je integrirati s
          postojećim financijskim sustavima, koristiti je na različitim
          uređajima i pristupiti joj iz bilo kojeg mjesta.
        </Typography>

        <Typography variant="body1" align="justify">
          Priključite se tisućama zadovoljnih korisnika koji već koriste našu
          platformu za slanje e-računa i uživajte u brzim, jednostavnim i
          ekološki prihvatljivim poslovnim transakcijama.
        </Typography>

        <Typography variant="body1" align="justify">
          Pridružite nam se i uživajte u prednostima elektroničkog poslovanja
          već danas!
        </Typography>
      </Stack>
    </Container>
  );
};

export default Naslovnica;
