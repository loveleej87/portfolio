import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Meta from './Meta';

/** 리덕스 구성을 위한 참조 */
import { Provider } from 'react-redux';
import store from './store';

/**/
import App from './App';
/*/
import App from './Test';
/**/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <Meta />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);