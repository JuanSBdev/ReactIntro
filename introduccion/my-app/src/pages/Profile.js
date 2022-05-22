import { useParams } from "react-router-dom";
export default function Profile(){
    const { name } = useParams();
    console.log( name   );
        return (<div>
    <h4> El nombre ingresado es {name} </h4>
</div>)
};