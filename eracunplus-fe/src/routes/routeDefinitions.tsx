import InboxIcon from "@mui/icons-material/MoveToInbox";
import OutboxIcon from '@mui/icons-material/Outbox';
import AddCircleIcon from '@mui/icons-material/AddCircleRounded';


type TDrawerRoute = {
  to: string,
  text: string,
  icon?: any
}

export const drawerPrimaryRoutes: TDrawerRoute[] = [
  {
    to: "/ulazni",
    text: "Ulazni računi",
    icon: <InboxIcon />
  },
  {
    to: "/izlazni",
    text: "Izlazni računi",
    icon: <OutboxIcon />
  }
]

export const drawerSecondaryRoutes: TDrawerRoute[] = [
  {
    to: "/kreiraj",
    text: "Kreiraj račun",
    icon: <AddCircleIcon color="success"/>
  }
]