import { createSlice } from "@reduxjs/toolkit";

export interface LayoutState {
  drawerOpen: boolean
}

const initialState: LayoutState = {
  drawerOpen: true,
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    changeDrawerState: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
})

export const { changeDrawerState } = layoutSlice.actions

export default layoutSlice.reducer