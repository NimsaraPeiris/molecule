import { Element } from '../types/element';

export const elements: Element[] = [
  {
    id: 1,
    name: 'Hydrogen',
    symbol: 'H',
    atomicNumber: 1,
    atomicMass: 1.008,
    electronConfiguration: '1s¹',
    electronegativity: 2.20,
    oxidationStates: [-1, 1],
    category: 'Nonmetal',
    description: 'The lightest and most abundant element in the universe.',
    bohrModel: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e',
    uses: ['Fuel', 'Industrial processes', 'Water formation'],
    bondTypes: {
      ionic: ['Li', 'Na', 'K'],
      covalent: ['H', 'C', 'N', 'O', 'F', 'Cl'],
      metallic: false
    }
  },
  // Add more elements here...
];