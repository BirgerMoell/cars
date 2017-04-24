
export default function carList(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_CARS':
      return {
        ...state,
        showCars: action.show,
      }

    default:
      return state
  }
}

const initialState = {
  cars: [
    {
      reg: 'ABC123',
      name: 'Opel',
      color: '#ff00ff',
      year: 2009,
    },
    {
      reg: 'KAK313',
      name: 'Volvo',
      color: '#00ffff',
    },
    {
      reg: 'IHN491',
      name: 'Volvo',
      color: '#00ffff',
    },
    {
      reg: 'MUE845',
      name: 'Saab',
      color: '#00ffff',
    },
    {
      reg: 'BPE439',
      name: 'Ford',
      color: '#00ff34',
    },
    {
      reg: 'HUV917',
      name: 'Honda',
      color: '#069f12',
    },
    {
      reg: 'MUE845',
      name: 'Volkswagen',
      color: '#9f9f9f',
    },
    {
      reg: 'TDE983',
      name: 'Kia',
      color: '#560ff3',
    },
    {
      reg: 'APY482',
      name: 'Tesla',
      color: '#15f3f8',
    },
    {
      reg: 'IHN491',
      name: 'Subaru',
      color: '#51f3f3',
    },

  ],
  showCars: true,
};
