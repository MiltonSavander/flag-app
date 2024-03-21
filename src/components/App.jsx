import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { useState } from 'react';

//pages
import Home from '../pages/Home';
import CountryInfo, { countryLoader } from '../pages/CountryInfo';

//layouts
import Rootlayout from '../layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
      <Route
        path="country/:id"
        element={<CountryInfo />}
        loader={countryLoader}
      />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
