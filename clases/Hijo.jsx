import React from 'react'
import PropTypes from 'prop-types';

const Hijo = React.memo((({ numero, incrementar }) => {
    Hijo.displayName = 'Hijo';

    console.log('  Me volví a generar :(  ');

    return (
        <butto
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
}))

Hijo.propTypes = {
    numero : PropTypes.number,
    incrementar : PropTypes.any
}

export { Hijo };
