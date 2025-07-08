import { AppRouter } from './app/router.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

export default App;
