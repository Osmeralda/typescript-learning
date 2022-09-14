import React, { useState } from 'react';
import './App.css';
import UusiUutinen from './components/UusiUutinen';
import UutisLista from './components/UutisLista';
import Laskuri from './components/Laskuri';


//export on sen takia että voidaan käyttää tätä interfacea childreneissä ilman että täytyy uudelleen määrittää sitä
export interface UutisState {  //interfacella määritellään tietyt tyypit eli mitä tyyppejä mitää objecteissa olla
  uutiset: {        //uutiset on objekti
    uutisTitle: string,          //objektin parametrit tulee sen jälkeen
    uutisId: number,            // joihin määritellään tyyppi
    uutisKuva?: string,   // ? kertoo että kyseessä on EI pakollinen tyyppi eli se voi olla joko string tai undefined
    content: string
  }[]                 //jälleen [] kertoo että kyseessä on array eli monta objektia tulee
}
//interfacet tehdään function ulkopuolelle, niitä ei voi exportata function sisältä

function App() {

  //uutiset constructori jossa määritellään mitä tarvitaan uutisiin.
  // eli ()=määritellään useState jonka sisällä on [] eli array 
  //jonka sisällä on {} eli objekteja.
            //tämä on jos on jo muutama esimerkki   
        {/*      const [uutiset, setUutiset] = useState([{
                uutisTitle: "Uutinen1",
                uutisId: 1,
                uutisKuva: "",
                content: "lorem ipsum"
              },        //interface on helpompi tapa
              {
                uutisTitle: "Uutinen2",
                uutisId: 2,
                uutisKuva: "",
                content: "lorem ipsum dalai lama"
              }
            ])  */} 
// arraynNimi.map(objektinNimi => {objektinNimi.mikäTahansaPropsJonkaOletMääritellytYlempänä)
// tällä saata yhden propsin valittua koko arraysta ja voit käyttää sitä.
   /*     uutiset.map(uutinen => {
          uutinen.uutisId
        })       */



      //TÄSTÄ ALEMMAS LIITTYY AIVAN YLHÄÄLLÄ OLEVAAN export interface UutisStateen

//alempana taas määritellään että on objekti uutiset jossa on asetus eli setUutiset
// käytetään useState hookkia jolla saadaan objektin tila käyttöön. sen jälkeen
//  <InterFacenNimi>[objektinNimi]> ja jälleen kerran ()= määritellään useState [] eli array eli monta
const [uutiset, setUutiset] = useState<UutisState["uutiset"]>([])

//uutiset.map(uutinen => {   // arraynNimi.map(objektinNimi => {objektinNimi.mikäTahansaPropsJonkaOletMääritellytYlempänä)
//  uutinen.content = "tavaraa"          // tällä saata yhden propsin valittua koko arraysta ja voit käyttää sitä.
//})


   return ( 
      <div className='App'>
      <h1><Laskuri /></h1>

      <UutisLista uutiset={uutiset} /> 
      <UusiUutinen uutiset={uutiset} setUutiset={setUutiset} />
    </div>
   )   
} //muista määrittää propsit. "uutiset" props tarvitaan jotta ei korvata vanhoja vaan lisätään niihin
// "setUutiset" props tarvitaan jotta voidaan oikeasti lisätä niihin tai muokata ollenkaan
export default App;
