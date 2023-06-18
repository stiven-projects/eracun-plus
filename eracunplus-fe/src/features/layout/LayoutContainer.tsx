import { Box } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import RAppBar from "../../components/layout/RAppBar"
import RDrawer from "../../components/layout/RDrawer"
import RMain from "../../components/layout/RMain"
import { Outlet } from "react-router"

const LayoutContainer = () => {

  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <RAppBar />
      <RDrawer />
      <RMain>
        <Outlet />
      </RMain>
    </Box>
  )
}

export default LayoutContainer