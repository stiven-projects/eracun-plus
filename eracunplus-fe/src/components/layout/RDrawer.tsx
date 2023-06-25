import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from '@mui/material/IconButton';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import React, { memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { changeDrawerState } from "../../features/layout/stores/layoutSlice";
import { drawerPrimaryRoutes, drawerSecondaryRoutes } from "../../routes/routeDefinitions";
import { RootState } from "../../stores/store";
import { DrawerHeader, drawerWidth } from "../styled/Layout";

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref,
) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  return (
    <li>
      <ListItem button component={Link} to={to}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const RDrawer = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const drawerOpen = useSelector((state: RootState) => state.layout.drawerOpen);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={drawerOpen}
    >
      <DrawerHeader>
        <IconButton onClick={() => dispatch(changeDrawerState())}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {drawerPrimaryRoutes.map(({text, to, icon, key}) => (
          <ListItemLink key={key} to={to} primary={text} icon={icon}/>
        ))}
      </List>
      <Divider />
      <List>
        {drawerSecondaryRoutes.map(({text, to, icon, key}) => (
          <ListItemLink key={key} to={to} primary={text} icon={icon}/>
        ))}
      </List>
    </Drawer>
  );
};

export default memo(RDrawer);
