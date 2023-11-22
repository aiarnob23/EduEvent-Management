import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServicesCards = ({ card }) => {
    const { eventName, image, price, details, id } = card;
    return (
        <div>
            <div className="card md:w-[500px]  bg-base-100 shadow-xl">
                <figure><img className='max-w-[400px] h-[400px] rounded-lg p-2' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{eventName}</h2>
                    <p>{details}</p>
                    <p className='text-xl'>Price: {price}</p>
                    <div className="card-actions my-2">
                        <Link to={`/detail/${id}`}><button className="btn text-xl text-[#ffffff] bg-[#090B42]"> Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServicesCards.propTypes = {
    card: PropTypes.object.isRequired,
}

export default ServicesCards;