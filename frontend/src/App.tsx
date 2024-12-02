
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import './App.css'
import { MainLayout } from './Layouts/MainLayout'
import { HomePage } from './Pages/HomePage';
import {DecorationsPage} from './Pages/DecorationsPage';
import { DecorationPage } from './Pages/DecorationPage';
import {GiftsPage} from './Pages/GiftsPage';
import {GiftPage} from './Pages/GiftPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/decorations" element={<DecorationsPage/>}/>
      <Route path="/decorations/:id" element={<DecorationPage/>}/>
      <Route path="/gifts" element={<GiftsPage/>}/>
      <Route path="/gifts/:id" element={<GiftPage/>}/>
  </Route>
))

function App() {
  
 return <RouterProvider router={router}/>
}

export default App;
