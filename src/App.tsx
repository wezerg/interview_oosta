import './assets/index.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import CardMemory from './pages/CardMemory';

function App() {
    return (
        <Provider store={store}>
            <CardMemory></CardMemory>
        </Provider>
    );
}

export default App;
