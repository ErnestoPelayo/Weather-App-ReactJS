import React from 'react';
import PropTypes from 'prop-types';

const ExtraInfo = ({humidity , wind}) => (
    <div>
            <p>Informacion Extra</p>
            <span> Humedad : {`${humidity}% -`} </span>
            <span>Viento de : { `${wind}` }</span>
    </div>
);

ExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired,
}

export default ExtraInfo;