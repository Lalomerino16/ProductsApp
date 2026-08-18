import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ShoppApp } from './ShoppApp.tsx'
import { ThemeProvider } from '@/components/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ShoppApp />
    </ThemeProvider>
  </StrictMode>,
)
