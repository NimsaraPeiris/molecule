export const atomicColors = {
  Hydrogen: '#C80000',
  Helium: '#00C800',
  Lithium: '#0000C8',
  Beryllium: '#C8C800',
  Boron: '#C800C8',
  Carbon: '#00C8C8',
  Nitrogen: '#800000',
  Oxygen: '#008000',
  Fluorine: '#000080',
  Neon: '#808000',
  Sodium: '#8B008B',
  Magnesium: '#008B8B',
  Aluminum: '#A9A9A9',
  Silicon: '#696969',
  Phosphorus: '#FF8C00',
  Sulfur: '#FF69B4',
  Chlorine: '#8A2BE2',
  Argon: '#FF4500',
  Potassium: '#32CD32',
  Calcium: '#6495ED',
} as const;

export const atomicStructures = {
  1: [1],
  2: [2],
  3: [2, 1],
  4: [2, 2],
  5: [2, 3],
  6: [2, 4],
  7: [2, 5],
  8: [2, 6],
  9: [2, 7],
  10: [2, 8],
  11: [2, 8, 1],
  12: [2, 8, 2],
  13: [2, 8, 3],
  14: [2, 8, 4],
  15: [2, 8, 5],
  16: [2, 8, 6],
  17: [2, 8, 7],
  18: [2, 8, 8],
  19: [2, 8, 8, 1],
  20: [2, 8, 8, 2],
} as const;

export const atomicNames = {
  1: "Hydrogen",
  2: "Helium",
  3: "Lithium",
  4: "Beryllium",
  5: "Boron",
  6: "Carbon",
  7: "Nitrogen",
  8: "Oxygen",
  9: "Fluorine",
  10: "Neon",
  11: "Sodium",
  12: "Magnesium",
  13: "Aluminum",
  14: "Silicon",
  15: "Phosphorus",
  16: "Sulfur",
  17: "Chlorine",
  18: "Argon",
  19: "Potassium",
  20: "Calcium",
} as const;

export const atomicSymbols = {
  1: "H", 2: "He", 3: "Li", 4: "Be", 5: "B", 6: "C", 7: "N", 8: "O", 9: "F", 10: "Ne",
  11: "Na", 12: "Mg", 13: "Al", 14: "Si", 15: "P", 16: "S", 17: "Cl", 18: "Ar", 19: "K", 20: "Ca"
} as const;

export const knownCompounds = {
  "H2O": { H: 2, O: 1 },
  "CO2": { C: 1, O: 2 },
  "O2": { O: 2 },
  "H2": { H: 2 },
  "CH4": { C: 1, H: 4 },
  "NH3": { N: 1, H: 3 },
  // Add more compounds as needed
} as const;