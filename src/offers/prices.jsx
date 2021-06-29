import React from 'react'

const Prices = (props) => {

    const {prices} = props;

    return (
        <div>
        {prices.map(({name, price}, index) =>
            <div>
            <span>{name}</span>
            <span> / </span>
            <span>{price} kr</span>
            </div>
        )}
        </div>
    )
}

export default Prices