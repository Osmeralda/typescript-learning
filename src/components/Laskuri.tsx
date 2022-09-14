import React, { useState } from 'react';

function Laskuri() {

    const [laskuri, setLaskuri] = useState(0); //määritellään laskuri sekä laskurinasetus. käytetään useStatea ja määritellään se aluksi nollaan


    const [num1, setNum1] = useState();

    return (
    <div>
        <p>Klikkauksien määrä on: {laskuri}</p>
        <button onClick={() => setLaskuri(laskuri - 1)}>vähennä</button> 
        <button onClick={() => setLaskuri(laskuri + 1)}>Paina mua</button>
        <button onClick={() => setLaskuri(laskuri + 2)}>Paina mua ja lisää 2</button>
        <input type="text" value="num1" placeholder='insert number'/>
    </div>
    ) //ylhäällä määritellään nappi ja onClick jälkeen tehdään functio jossa kutsutaan setLaskuri joka tekee (edellinen arvo + tai - jokin arvo)
}

export default Laskuri