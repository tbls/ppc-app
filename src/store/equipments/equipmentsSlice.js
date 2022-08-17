import { createSlice } from '@reduxjs/toolkit';

export const equipmentsSlice = createSlice({
   name: 'equipments',

   initialState: {
      equipments: [
         {
            Id:'eq001',
            Name: 'Bombas de Hot Oil',
            equipmentList: [
               {
               tag: 'PAY-58100',
               condition: 'Operativo',
               state: 'E/S'
               },
               {
                  tag: 'PAY-5820',
                  condition: 'Operativo',
                  state: 'E/S'
               },
               {
                  tag: 'PAY-5830',
                  condition: 'Inoperativo',
                  state: 'F/S'
               },
            ],
         },
         {
            Id:'eq002',
            Name: 'Hornos de Hot Oil',
            equipmentList: [
               {
               tag: 'EAP-5850',
               condition: 'Operativo',
               state: 'E/S'
               },
               {
                  tag: 'EAP-5860',
                  condition: 'Inoperativo',
                  state: 'F/S'
               },
               {
                  tag: 'EAP-5870',
                  condition: 'Operativo con Observaciones',
                  state: 'S/B'
               },
            ],
         }
      ],
      activeEquipment: {
         tag: '',
         condition: '',
         state: ''
      },
   },

   reducers: {
      setActiveEquipment: ( state, action ) => {
         state.activeEquipment.tag = action.payload.tag;
         state.activeEquipment.condition = action.payload.condition;
         state.activeEquipment.state = action.payload.state;
      },
   },
})

export const { setActiveEquipment } = equipmentsSlice.actions;