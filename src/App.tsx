import './assets/index.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import Card from './components/Card';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Card></Card>
            </div>
        </Provider>
    );
}

export default App;
