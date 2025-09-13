import { Caninos } from './info-dog';
import Perro from './perro';



export default function Menu() {
    
    return ( 
    <>
        <Perro perros={Caninos}/>

    </>
    );
}