import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/Button';

function App() {
    const idade = 18;
    const nome = 'Francisca';

    const uuid = crypto.randomUUID();

    const cor = 'verde';
    const corClass = cor === 'red' ? 'vermelho' : 'azul';

    const isRequired = false;
    const typeOfInput = 'number';

    const min = 3;
    const max = 6;

    return (
        <>
            <div id={uuid} className="primeira segunda terceira quarta">
                <Button label="Ver mais" />
                <Button label="Voltar" />

                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <input
                required={isRequired}
                type={typeOfInput}
                min={min}
                max={max}
            />
            <h1>Vite + React</h1>

            <div className="card">
                <h1>Nome e idade</h1>
                <span>
                    Nome {nome} e idade {idade}
                </span>
                {/* <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                    <span style={{ background: 'red', color: 'blue' }}></span>
                </button> */}
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR\
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
