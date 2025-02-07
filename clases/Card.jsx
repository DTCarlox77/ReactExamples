import PropTypes from 'prop-types'

const Card = ({ name, image }) => {
    return ( 
        <>
            <div className="card">
                <img src={ image } alt="" />
                <h1>{ name }</h1>
            </div>
        </>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
};

export default Card;