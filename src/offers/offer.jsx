import React from 'react'
import PropTypes from 'prop-types'
import Prices from './prices';
import Book from './book';

const Offer = (props) => {
    const {header, description, prices} = props;

    return (
        <div className="container-item">
            <div className="offerHeader">{header}</div>
            <div className="offerDesc">{description}</div>
            <Prices prices={prices} />
            <Book treatmeant={header}/>
        </div>
    )
}

Offer.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    prices: PropTypes.array
}

export default Offer