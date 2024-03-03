import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState('');

    return (
        <AddressContext.Provider
            value={{ address, location, setAddress, setLocation }}
        >
            {children}
        </AddressContext.Provider>
    );
};

AddressProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
