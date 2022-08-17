import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
   name: 'ui',

   initialState: {
      isEquipmentModalVisible: false
   },

   reducers: {
      showEquipmentModal: ( state ) => {
         state.isEquipmentModalVisible = true;
      },
      hideEquipmentModal: ( state ) => {
         state.isEquipmentModalVisible = false;
      },
   },
});

export const { showEquipmentModal, hideEquipmentModal } = uiSlice.actions;