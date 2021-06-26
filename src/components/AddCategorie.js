import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategorie = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [ inputValue, ...cats]);
            setInputValue('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add category e.g: The Beatles..."
                    value={inputValue}
                    name="newCat"
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}

AddCategorie.propTypes = {
    setCategories : PropTypes.func.isRequired
}



export default AddCategorie;
