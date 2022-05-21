import { useState, useEffect } from 'react';
export default function Welcome(props){
    const [counter, setCounter] = useState(0);
    const [semaforo, setSemaforo] = useState (false);
    const contar = () => {
        console.log('entrando en contar');
        setCounter( counter + 1 );
        setSemaforo(!semaforo);
    }
    useEffect(()=>{
        console.log(semaforo);
    }, [semaforo])
const { message, name } = props;
return (
    <div>
        <h1>Hola { name }</h1>
        <h2>Contador de React con hooks</h2>
        <h4>El numero de contador es: {counter}; </h4>
        <button type ="submit" onClick={ contar }>Sumar</button>
        <p>{ message }</p>
        <h2>Semaforo</h2>
        <p>El semaforo esta en color {semaforo ? 'red' : 'green' } </p>



    </div>
)
}