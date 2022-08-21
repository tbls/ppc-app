import { createSlice } from '@reduxjs/toolkit';

export const equipmentsSlice = createSlice({
  name: 'equipments',

  initialState: {
    equipments: [
      {
        Id: 'eq001',
        Name: 'Bombas de Hot Oil',
        List: [
          {
            tag: 'PAY-5810',
            condition: { value: 'operativo', label: 'Operativo' },
            state: { value: 'E/S', label: 'E/S' },
            observations: [],
          },
          {
            tag: 'PAY-5820',
            condition: { value: 'operativo', label: 'Operativo' },
            state: { value: 'E/S', label: 'E/S' },
            observations: [
              {
                description: 'Fuga por sello mecánico',
                aviso: '10586234',
              },
              {
                description: 'Motor con bajo aislamiento',
                aviso: '10586234',
              },
            ],
          },
          {
            tag: 'PAY-5830',
            condition: { value: 'operativo', label: 'Operativo' },
            state: { value: 'E/S', label: 'E/S' },
            observations: [
              {
                description: 'Fuga por sello mecánico',
                aviso: '12589631',
              },
            ],
          },
          {
            tag: 'PAY-15810',
            condition: { value: 'operativo', label: 'Operativo' },
            state: { value: 'E/S', label: 'E/S' },
            observations: [],
          },
          {
            tag: 'PAY-15820',
            condition: { value: 'operativo', label: 'Operativo' },
            state: { value: 'E/S', label: 'E/S' },
            observations: [],
          },
          {
            tag: 'PAY-15830',
            condition: { value: 'operativo', label: 'Operativo' },
            state: { value: 'E/S', label: 'E/S' },
            observations: [],
          },
        ],
      },
      {
        Id: 'eq002',
        Name: 'Hornos de Hot Oil',
        List: [
          {
            tag: 'EAP-5850',
            condition: 'Operativo',
            state: 'E/S',
          },
          {
            tag: 'EAP-5860',
            condition: 'Inoperativo',
            state: 'F/S',
          },
          {
            tag: 'EAP-5870',
            condition: 'Operativo con Observaciones',
            state: 'S/B',
          },
        ],
      },
    ],
    activeEquipment: {
      tag: null,
      condition: null,
      state: null,
      observations: [],
    },
  },

  reducers: {
    updateCondition: (state, action) => {
      state.activeEquipment.condition = action.payload;
    },
    updateState: (state, action) => {
      state.activeEquipment.state = action.payload;
    },
    setActiveEquipment: (state, action) => {
      state.activeEquipment.tag = action.payload.tag;
      state.activeEquipment.condition = action.payload.condition;
      state.activeEquipment.state = action.payload.state;
      state.activeEquipment.observations = action.payload.observations;
    },
    removeActiveEquipment: (state) => {
      state.activeEquipment.tag = null;
      state.activeEquipment.condition = null;
      state.activeEquipment.state = null;
      state.activeEquipment.observations = [];
    },
  },
});

export const {
  updateState,
  updateCondition,
  setActiveEquipment,
  removeActiveEquipment,
} = equipmentsSlice.actions;
