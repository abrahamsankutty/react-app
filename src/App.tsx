

import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from './pages/forms';
import ListItem from './pages/ListItems';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import "./App.css";
import WindowTracker from './pages/window-tracker';
import ApiIntegration from './pages/ApiIntegration';
import ReducerHook from './pages/reducer';
import LifeCycleComponent from './pages/LIfeCycle';
import {QueryClient, QueryClientProvider} from 'react-query';
import UseQueryComponent from './pages/UseQuery';

export default function MyApp() {
  const queryClient = new QueryClient();
 
  return(
    <main>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="list-items" element={<ListItem />} />
            <Route path="window-tracker" element={<WindowTracker />} />
            <Route path='forms' element={<Forms />} />
            <Route path='api-integration' element={<ApiIntegration />} />
            <Route path='reducer' element={<ReducerHook />} />
            <Route path='life-cycle' element={<LifeCycleComponent />} />
            <Route path='use-query' element={<UseQueryComponent />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    </main>
  );
}


