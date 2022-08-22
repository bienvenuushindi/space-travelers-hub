import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import spaceStore from './Components/Redux/spaceStore';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={spaceStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);
<<<<<<< HEAD

=======
>>>>>>> 89cbc7a4dce4b89d6a89ce1dfa8204990f3b781f
