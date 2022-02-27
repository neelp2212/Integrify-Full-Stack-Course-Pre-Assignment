import React, { useState } from 'react';
import { propTypes } from 'prop-types';

import styles from './Form.module.css';

const Form = ({submitSearch}) => {
    const [location, setLocation] = useState('');
    const onSubmit = e => {
        e.preventDefault();
        if(!location || location === '') return;
        submitSearch(location);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: propTypes.func.isRequired,
};

export default Form;
