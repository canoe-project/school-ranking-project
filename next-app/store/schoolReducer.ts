import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Iinfra } from 'interface/infrastructure/commonInfrastructure';

export const initState: Iinfra[] = [];

const stageSlice = createSlice({
  name: 'aroundSchool',
  initialState: initState,
  reducers: {
    setAroundSchool: (state, action: PayloadAction<Iinfra>) => {
      return [...state, action.payload];
    },
    setInfra: (
      state,
      action: PayloadAction<{
        key: number;
        cate: string;
        value: kakao.maps.services.PlacesSearchResultItem[];
      }>
    ) => {
      const { key, cate, value } = action.payload;
      if (state[key].infra !== undefined && state[key] !== undefined) {
        switch (cate) {
          case 'CS2':
            state[key].infra.CS2 = value;
            break;
          case 'AC5':
            state[key].infra.AC5 = value;
            break;
          case 'CT1':
            state[key].infra.CT1 = value;
            break;
          case 'AD5':
            state[key].infra.AD5 = value;
            break;
          case 'FD6':
            state[key].infra.FD6 = value;
            break;
          case 'CE7':
            state[key].infra.CE7 = value;
            break;
          case 'HP8':
            state[key].infra.HP8 = value;
            break;
          case 'PM9':
            state[key].infra.PM9 = value;
            break;
          default:
        }
      }
    },
  },
});

export const { setAroundSchool, setInfra } = stageSlice.actions;
export default stageSlice.reducer;
