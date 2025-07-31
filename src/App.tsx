import React from 'react';
import { CardSelector } from './components/CardSelector';
import { CardDisplay } from './components/CardDisplay';
import { Controls } from './components/Controls';

const App = () => (
  <div className="p-6 max-w-screen-md mx-auto font-sans text-gray-800">
    <h1 className="text-2xl font-bold mb-6">Poker Helper</h1>
    <CardSelector />
    <CardDisplay />
    <Controls />
  </div>
);

export default App;