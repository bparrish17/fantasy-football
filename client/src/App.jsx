import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient, useQueryClient } from '@tanstack/react-query';
import './App.css'
import RankingsPage from './pages/Rankings.page';
import SiteLayout from './SiteLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: SiteLayout,
    children: [
      {
        path: 'rankings',
        Component: RankingsPage
      }
    ]
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  )
}

export default App
