import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.min.css';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './App.jsx';
import { persistor, store } from './store/store.tsx';
import { Toast } from '@/shared/Toast/Toast.tsx';
import { Loader } from '@/shared/Loader/Loader.tsx';
import './styles/index.css';
import './utils/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loader />}>
            <Toast />
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </PersistGate>
    </Provider>
);
