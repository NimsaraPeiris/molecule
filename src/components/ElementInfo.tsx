import React from 'react';
import { useElementStore } from '../store/elementStore';
import { Atom, Beaker, FlaskRound as Flask } from 'lucide-react';

export const ElementInfo: React.FC = () => {
  const { detectedElements } = useElementStore();

  if (detectedElements.length === 0) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center space-x-4">
          <Atom className="w-8 h-8 text-blue-500" />
          <h2 className="text-xl font-bold">Scan an element marker to begin</h2>
        </div>
      </div>
    );
  }

  const element = detectedElements[0];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-3xl font-bold">{element.name}</h2>
          <p className="text-xl text-gray-600">{element.symbol}</p>
        </div>
        <div className="flex space-x-2">
          <Beaker className="w-6 h-6 text-blue-500" />
          <Flask className="w-6 h-6 text-green-500" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Atomic Number</h3>
          <p>{element.atomicNumber}</p>
        </div>
        <div>
          <h3 className="font-semibold">Atomic Mass</h3>
          <p>{element.atomicMass}</p>
        </div>
        <div>
          <h3 className="font-semibold">Electron Configuration</h3>
          <p>{element.electronConfiguration}</p>
        </div>
        <div>
          <h3 className="font-semibold">Category</h3>
          <p>{element.category}</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Description</h3>
        <p className="text-gray-700">{element.description}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Common Uses</h3>
        <ul className="list-disc list-inside">
          {element.uses.map((use, index) => (
            <li key={index}>{use}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};