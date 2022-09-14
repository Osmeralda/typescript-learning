import React from 'react';

interface UutisPropsit {  //interfacella määritellään tietyt tyypit eli mitä tyyppejä mitää objecteissa olla
    uutiset: {        //uutiset on objekti
      uutisTitle: string,          //objektin parametrit tulee sen jälkeen
      uutisId: number,            // joihin määritellään tyyppi
      uutisKuva?: string,   // ? kertoo että kyseessä on EI pakollinen tyyppi eli se voi olla joko string tai undefined
      content: string
    }[]                 //jälleen [] kertoo että kyseessä on array eli monta objektia tulee
  }

  //alla määritetään että "Tavara" on React.FunctionalComponent ja sen propsit otetaan mukaan eli <UutisPropsit>
const UutisLista: React.FC<UutisPropsit> = ({ uutiset }) => { //sen jälkeen otetaan uutiset ja destructuroidaan seuraavien sulkeiden sisällä
                                    //nuolifunktio on vaan funktio. eli funktio({uutiset}) "auki" kirjoitettuna
    const renderUutiset = (): JSX.Element[] => { //muista määritellä mikä on return value eli tässä halutaan palauttaa JSX elementtejä monta, koska [] on taas ilmoittamassa arraysta
        return uutiset.map((uutiset) => {   //mapataan uutiset olio auki
            return (    //aina pitää muistaa että {olionNimi.propsinNimi}
            <li>
                <h3>
                    {uutiset.uutisTitle}            
                </h3>
                <div>
                    {uutiset.uutisKuva}
                </div>
                <div>
                    {uutiset.uutisId}
                </div>
                <div>
                    {uutiset.content}
                </div>
            </li>
            )
        })
    }
    return (                
        <ul>
            {renderUutiset()}
        </ul>
    )
}
//yläpuolella pitää muistaa että 'renderUutiset' on funktio joten siihen pitää laitta () perään, muuten ei toimi.
export default UutisLista;