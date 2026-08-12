import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap Bundle JS (includes Popper.js for dropdowns, tooltips, and modals)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
