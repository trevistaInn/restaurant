import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import MyContextProvider from './components/Context/Context.jsx';
import App from './App';

createRoot(document.getElementById('root')).render(
  <MyContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </MyContextProvider>
);
