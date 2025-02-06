export interface Element {
  id: number;
  name: string;
  symbol: string;
  atomicNumber: number;
  atomicMass: number;
  electronConfiguration: string;
  electronegativity: number;
  oxidationStates: number[];
  category: string;
  description: string;
  bohrModel: string; // URL to image
  uses: string[];
  bondTypes: {
    ionic: string[];
    covalent: string[];
    metallic: boolean;
  };
}