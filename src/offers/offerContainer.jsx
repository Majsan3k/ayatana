import React from 'react'
import PropTypes from 'prop-types'
import './offers.css'
import classNames from 'classnames';
import Offer from './offer';

const OfferContainer = (props) => {
    const {desc, photo, reversed} = props;
    const imgUrl = photo.src;
    const styles = classNames({'container': true, 'reversed': reversed} )

    return (
        <div className={styles}>
            <Offer header={desc.header} description={desc.description} prices={desc.prices}/>
                <img className='half-screen' src={imgUrl} alt={photo.alt} />
        </div>
    )
}

OfferContainer.propTypes = {
    desc: PropTypes.shape({
        header: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
    photo: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }).isRequired
}

export default OfferContainer;