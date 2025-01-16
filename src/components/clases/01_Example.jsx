import { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import { cards } from '../cards'

function App() {

    const [color, setColor] = useState('black');
    const [oculto, setOculto] = useState(false);
    const [intervalo, setIntervalo] = useState(1000);

    const styles = {
        color: color,
    };

    const [contador, setContador] = useState(0);
    const handleContador = () => {
        setTimeout(() => {
            setContador(contador + 1);
        }, intervalo);
    }

    useEffect(handleContador, [contador, intervalo]);

    const [indexV, setIndexV] = useState(0);
    const array = ['red', 'pink', 'blue', 'indigo'];

    const handleColor = () => {
        setColor(() => {
            setIndexV(indexV + 1);
            if (indexV === array.length) {
                setIndexV(0);
            }
            return array[indexV];
        })
    }

    return (
        <>
            <h3>Contador { contador }</h3>
            {
                oculto && (
                    <h1 style={styles}>Hola Mundo</h1>
                )
            }

            <button onClick={handleColor}>
                Cambiar
            </button>

            <button onClick={() => setOculto(!oculto)}>
                { oculto ? 'Ocultar' : 'Mostrar' }
            </button>

            <button onClick={() => setIntervalo(intervalo - 100)}>Acelerar</button>

            {
                cards.map((card) => 
                    <Card key={ card.id } name={ card.name } image={ card.image } />
                )
            }
        </>
    );
}

export default App;
