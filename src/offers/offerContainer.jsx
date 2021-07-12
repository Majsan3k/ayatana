import React from 'react'
import PropTypes from 'prop-types'
import './offers.css'
import classNames from 'classnames';
import Offer from './offer';
import massage from '../img/massage.jpg';
import taktil from '../img/hand-massage.jpg';
import soundHealing from '../img/handpan.jpeg';

const OfferContainer = (props) => {
    const {desc, photo, reversed} = props;
    const imgUrl = photo.src;
    const styles = classNames({'container': true, 'reversed': reversed} )

    const images = {
        'massage': massage,
        'taktil': taktil,
        'soundHealing': soundHealing 
    }

    return (
        <div className={styles}>
            <Offer header={desc.header} description={desc.description} prices={desc.prices}/>
                <img className='half-screen offer-img' src={images[imgUrl]} alt={photo.alt} />
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