import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { DrawerHeader, Main } from "../styled/Layout";

interface Props {
  children: React.ReactNode;
}

const RMain = ({ children }: Props) => {
  
  const drawerOpen = useSelector((state: RootState) => state.layout.drawerOpen);

  return (
    <Main open={drawerOpen}>
      <DrawerHeader />
      {children}
    </Main>
  )
}

export default RMain