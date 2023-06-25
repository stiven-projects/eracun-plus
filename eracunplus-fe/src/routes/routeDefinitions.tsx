import InboxIcon from "@mui/icons-material/MoveToInbox";
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
    to: "/ulazni",
    key: 1,
    text: "Ulazni računi",
    icon: <InboxIcon />
  },
  {
    to: "/izlazni",
    key: 2,
    text: "Izlazni računi",
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