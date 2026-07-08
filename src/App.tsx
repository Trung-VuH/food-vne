/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ListingPage } from './pages/ListingPage';
import { RouteResolver } from './pages/RouteResolver';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path=":slug" element={<RouteResolver />} />
          <Route path=":slug/:dishSlug" element={<ListingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
