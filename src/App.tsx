import React from 'react';
import { Camera } from './components/Camera';
import { ElementInfo } from './components/ElementInfo';
import { Atom } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Atom className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">Chemistry AR Lab</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Camera />
          </div>
          <ElementInfo />
        </div>
      </main>
    </div>
  );
}

export default App;