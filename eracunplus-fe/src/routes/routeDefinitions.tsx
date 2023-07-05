import OutboxIcon from '@mui/icons-material/Outbox';
import AddCircleIcon from '@mui/icons-material/AddCircleRounded';


type TDrawerRoute = {
  to: string,
  key: number,
  text: string,
  icon?: any,
}

export const drawerPrimaryRoutes: TDrawerRoute[] = [
  {
    to: "/izlazni",
    key: 2,
    text: "Računi",
    icon: <OutboxIcon />
  }
]

export const drawerSecondaryRoutes: TDrawerRoute[] = [
  {
    to: "/kreiraj",
    key: 3,
    text: "Kreiraj račun",
    icon: <AddCircleIcon color="success"/>
  }
]