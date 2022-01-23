import React, { FunctionComponent } from 'react';
import { LogoIcon } from './Icons';

export const App: FunctionComponent = () => {
  return (
    <div className="bg-gray-100 text-gray-900 tracking-wider leading-normal h-screen flex flex-col items-center">
      <header className="bg-white shadow flex align-center p-4 container">
        <LogoIcon className="bg-red-500 w-12 h-8 mr-2 rounded" />
        <h1 className="text-xl text-gray-900">Riga App</h1>
      </header>
    </div>
  );
};
