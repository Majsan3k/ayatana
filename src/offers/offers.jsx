import React from 'react'
import OfferContainer from './offerContainer'

const offers = [
    {
        desc: {
            header: "Klassisk svensk massage",
            description: `Avslappnande massage som hjälper till att släppa på spänningar i trötta och stela muskler. Behandlingen reducerar stress och oro, förbättrar immunförsvaret och ökar ditt välbefinnande. 
            
            Det går bra att välja ett fokusområde som vi jobbar lite extra med.`,
            prices: [
                {name: "Halvkropp 30 min", price: 350},
                {name: "Helkropp 60 min", price: 695},
                {name: "Helkropp 90 min", price: 1045},
            ],
        },
        photo: {
            src: "/img/massage.jpg",
            alt: "massage"
        },
        key: 'massage'
    },
    {
        desc: {
            header: "Taktil behandling", 
            description: "En holistisk kroppsbehandling med fokus på att skapa trygghet, avslappning och en helande effekt på kroppen. Genom lugna, mjuka och jämna tryck försätts din fysiska kropp i ett lugn som skapar avslappning ända in i själen.",
            prices: [
                {name: "70 min", price: 750}
            ]
        },
        photo: {
            src: "/img/hand-massage.jpg",
            alt: "massage"
        },
        key: 'taktil'
    },
    {
        desc: {
            header: "Taktil behandling med ljudresa", 
            description: "Att beröra flera olika sinnen har en stark effekt på oss. Här kombineras den fysiska beröringen med den läkande effekten ljudet ger oss. Tillsammans skapas en inre naturlig läkningsprocess. \n \n Behandlingen inleds med en taktil behandling och avslutas med en ljudresa.",
            prices: [
                {name: "80 min", price: 795}
            ]
        },
        photo: {
            src: "/img/handpan.jpeg",
            alt: "massage"
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