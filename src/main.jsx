import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppRoutes from './routes/AppRoutes.jsx'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
        <QueryClientProvider client={queryClient} >
    <AppRoutes/>

        </QueryClientProvider>
  </StrictMode>,
)
