import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
    return (
        <li>
            {tech}
            <button 
                type="button"
                onClick={onDelete}>
                    Remove
                </button>
        </li>
    );
}

TechItem.propTypes = {
    onDelete: PropTypes.func.isRequired,
}

export default TechItem;
