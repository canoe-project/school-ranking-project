import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserLocation } from 'interface/location/userLocation';

export const initState: IUserLocation = {
  lat: 33.452613,
  lng: 126.570888,
};

const stageSlice = createSlice({
  name: 'subwayStation',
  initialState: initState,
  reducers: {
    setUserLocation: (state, action: PayloadAction<IUserLocation>) => {
      // const { lat, lng } = action.payload;
      // state.lat = lat;
      // state.lng = lng;
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserLocation } = stageSlice.actions;
export default stageSlice.reducer;
