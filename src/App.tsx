import React, { FunctionComponent } from 'react';
import { LogoIcon } from './Icons';

export const App: FunctionComponent = () => {
  return (
    <div className="bg-gray-100 text-gray-900 tracking-wider leading-normal h-screen flex flex-col items-center">
      <header className="bg-white shadow flex align-center p-4 container">
        <LogoIcon className="bg-red-500 w-12 h-8 mr-2 rounded" />
        <h1 className="text-xl text-gray-900">Riga App</h1>
      </header>

      <section className="w-full container">
        <h2 className="text-gray-900 text-xl my-6 pl-4">Configure</h2>

        <div className="p-4 rounded shadow bg-white flex gap-4">

          <div className="w-1/2">
            <label className="text-gray-600 font-bold pr-4">
              Start calendar from
            </label>
            <div className="flex">
              <div className="w-2/3">
                <label className="text-gray-600 font-bold pr-4">
                  Year
                </label>
              </div>
              <div className="w-1/3">
                <input className="form-input block w-full border" type="number" value="" />
              </div>
            </div>

            <div className="flex">
              <div className="w-2/3">
                <label className="text-gray-600 font-bold pr-4">
                  Month
                </label>
              </div>
              <div className="w-1/3">
                <input className="form-input block w-full border" type="number" value="" />
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <label className="text-gray-600 font-bold pr-4">
              Preview
            </label>
          </div>

        </div>

        <div className="p-4 rounded shadow bg-white">

          <blockquote className="border-l-4 border-yellow-600 italic my-4 pl-8 md:pl-12">Final confirmation disclaimer message etc</blockquote>

          <div className="pt-8">

            <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4" type="button">
              Download calendar
            </button>

          </div>

        </div>
      </section>
    </div>
  );
};
