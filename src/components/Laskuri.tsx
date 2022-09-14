import React, { useState } from 'react';

function Laskuri() {

    const [laskuri, setLaskuri] = useState(0); //määritellään laskuri sekä laskurinasetus. käytetään useStatea ja määritellään se aluksi nollaan


    const [name, setName] = useState('');//määritellään nimi sekä setnimi joka käyttää useStatea. 
    //Alempana input kohdassa = name referoidaan eka tästä arraystä ja onChangessa setNamea.



    return (
    <div>
        <p>Klikkauksien määrä on: {laskuri}</p>
        <button onClick={() => setLaskuri(laskuri - 1)}>vähennä</button> 
        <button onClick={() => setLaskuri(laskuri + 1)}>Paina mua</button>
        <button onClick={() => setLaskuri(laskuri + 2)}>Paina mua ja lisää 2</button>
        <input type="text" 
        name="name" 
        onChange={e => setName(e.target.value)} 
        value={name} 
        placeholder='insert name'/>

        <h1>{name}</h1>

    </div>
    ) //ylhäällä määritellään nappi ja onClick jälkeen tehdään functio jossa kutsutaan setLaskuri joka tekee (edellinen arvo + tai - jokin arvo)
}

export default Laskuri