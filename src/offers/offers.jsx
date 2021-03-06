import React from 'react'
import OfferContainer from './offerContainer'

const offers = [
    {
        desc: {
            header: "Klassisk svensk massage",
            description: `Avslappnande massage som hjälper till att släppa på spänningar i trötta och stela muskler. Behandlingen reducerar stress och oro, förbättrar immunförsvaret och ökar ditt välbefinnande. 
            
            Det går bra att välja ett fokusområde som vi jobbar lite extra med.`,
            prices: [
                {name: "Halvkropp 30 min", price: 395},
                {name: "Helkropp 60 min", price: 695},
                {name: "Helkropp 90 min", price: 1150},
            ],
        },
        photo: {
            src: "massage",
            alt: "massage"
        },
        key: 'massage'
    },
    {
        desc: {
            header: "Taktil behandling", 
            description: "En holistisk kroppsbehandling med fokus på att skapa trygghet, avslappning och en helande effekt på kroppen. Genom lugna, mjuka och jämna tryck försätts din fysiska kropp i ett lugn som skapar avslappning ända in i själen.",
            prices: [
                {name: "60 min", price: 695},
                {name: "70 min", price: 750}
            ]
        },
        photo: {
            src: "taktil",
            alt: "taktil"
        },
        key: 'taktil'
    },
    {
        desc: {
            header: "Taktil behandling med ljudresa", 
            description: "Att beröra flera olika sinnen har en stark effekt på oss. Här kombineras den fysiska beröringen med den läkande effekten ljudet ger oss. Tillsammans skapas en inre naturlig läkningsprocess. \n \n Behandlingen inleds med en taktil behandling och avslutas med en ljudresa.",
            prices: [
                {name: "60 min", price: 695},
                {name: "70 min", price: 750},
                {name: "80 min", price: 800}
            ]
        },
        photo: {
            src: "soundHealing",
            alt: "sound-healing"
        },
        key: 'taktilAndSound'
    }
]

const Offers = () => {
    return (
        <>
            {offers.map(({desc, photo, key}, index) =>
                <OfferContainer key={key} desc={desc} photo={photo} reversed={ index % 2 === 0} />
            )
            }
        </>
    )
}

export default Offers;