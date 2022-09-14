import React, {useState} from 'react';
import { UutisState as Props } from '../App';

interface UutisProps { //tässä pitää olla oma props nimi
    uutiset: Props["uutiset"] //tässä pitää olla importatun propsin nimi
    setUutiset: React.Dispatch<React.SetStateAction<Props["uutiset"]>>
}   //setUutiset: React.Dispatch blablabla:n saa siten että menet App.tsx laitat hiiren setUutiset päälle ja
// kopioit setUutiset: jälkeen kaiken. poistat muuttujat siitä, lisäät Props handlen <:n jälkeen ja käytät arrayn merkkien sisään laitettua objektin nimeä eli
// [objektinNimi]


//alla pitää merkata taas mikä on output tälle eli React.FunktionaalinenKomponentti
//ja <TäälläMääritellynPropsinNimi>     merkkaan tähän alas objecti sekä setObjecti jotta voit käyttää niitä myöhemmin. Tämä käytännössä purkaa ne
const UusiUutinen: React.FC<UutisProps> = ({ uutiset, setUutiset}) => { //määritellään uusi functio

    const [input, setInput] = useState({ //jonka sisälle määritellään uusi array, joka käyttää useStatea
        uutisTitle:'',              //setInputilla saadaan asetettua näppäimistöltä kirjoitusta tämän objectin "input" näihin muuttujiin
        uutisId: '',            //tämä on 2 way bindingia
        uutisKuva:'',
        content:''
    })

// onChange functio       alla olevan React.ChangeEvent.blablabla:n saa selville uutisId:n onChange kohdasta. :void Change funktiot eivät palauta mitään joten
//määrittele että se on void
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setInput({              //yllä oleva tarkoittaa että e on määritelty ja react.vaihtaa joko htmlinputelementin tai htmltextareElementin sisällön
            ...input,           // mihin tahansa input elementtiin ...input
            [e.target.name]: e.target.value //halutaan vaihtaa event.target.name siihen mikä event.target.value on
        }) //e.target e kohta tulee tämän handleChangen määrittelemästä e:stä sen täytyy mätsätä tähän oli se mikä tahansa. 
    }   //target on reactia ja kertoo että haetaan kohdetta
//tällä handleclickillä halutaan muuttaa "uutiset" objekteja, eli lisätä yhden.
//tarvitaan pääsy uutiset sekä setUutiset funktioihin propseilla.
    const handleClick = (): void => {
        if(                         //jos
            !input.uutisTitle ||  // !input.uutisTitle on tyhjä
            !input.uutisId ||      // ! tarkoittaa käytännössä että jos on tyhjä
            !input.content
        ) {
            return //jos jokin ylläolevista kolmesta on tyhjä niin palautetaan aikaisin
        }
        setUutiset([
            ...uutiset, //haluan asettaa kaikki uutiset jotka on jo sekä
            {
                uutisTitle: input.uutisTitle,    //täysin uuden objektin
                uutisId: parseInt(input.uutisId), //pareseInt pitää olla muuten typescript ei pysty laittamaan numeroita tähän
                content: input.content,
                uutisKuva: input.uutisKuva
            }
        ])
        setInput({
            uutisTitle:'',  
            uutisId: '', 
            uutisKuva:'',
            content:''
    })
    }

    return (
        <div>
            <input
                type="text"
                placeholder="muokkaa otsikkoa" 
                value={input.uutisTitle} //eli täksi halutaan muuttaa
                onChange={handleChange} //täällä täytyy referoida onChange function nimi
                name="uutisTitle"      //[e.target.name]: e.target.value muuttaa tämän tuossa ylempänä olevaan valueksi
            //tämä name voisi olla mikä tahansa kunhan se on sama kuin e.target.mikatahansa
            />  
            <input
                type="number"
                placeholder="muokkaa tunnistetta"
                value={input.uutisId} 
                onChange={handleChange}  //kun onChange kohtaan tekee funktion eli onChange={() => {}} ja pitää hiirtä päällä. kertoo typescript mitä elementtejä se odottaa
                name="uutisId"             // sen voi sen jälkeen kopioida ylös handleChange kohtaan ja "tyypittää" e:n eli eventin
            />
            <input
                type="text"
                placeholder="muokkaa kuvan urlia" 
                value={input.uutisKuva}
                onChange={handleChange}
                name="uutisKuva"
            />
            <textarea
                placeholder="muokkaa sisältöä"
                value={input.content}
                onChange={handleChange}
                name="content"
            />
            <button
            onClick={handleClick}>
            Luo uutinen</button>
        </div>
    )
}

export default UusiUutinen;