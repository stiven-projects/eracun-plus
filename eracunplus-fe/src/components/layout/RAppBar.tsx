import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeDrawerState } from "../../features/layout/stores/layoutSlice";
import { RootState } from "../../stores/store";
import { AppBar } from '../styled/Layout';
import RBreadCrumbs from './RBreadCrumbs';

const RAppBar = () => {

  const dispatch = useDispatch();
  const drawerOpen = useSelector((state: RootState) => state.layout.drawerOpen);

  return (
    <AppBar position="fixed" open={drawerOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => dispatch(changeDrawerState())}
          edge="start"
          sx={{ mr: 2, ...(drawerOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Stack>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography variant="h6" noWrap component="div">
              eRačun Plus
            </Typography>
          </Link>
          <RBreadCrumbs />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default memo(RAppBar);
