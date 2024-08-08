import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.min.css';

import { App } from './App.jsx';
import './styles/index.css';
import { store } from './store/store.tsx';
import { Toast } from '@/shared/Toast/Toast.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Toast />
        <App />
    </Provider>
);
