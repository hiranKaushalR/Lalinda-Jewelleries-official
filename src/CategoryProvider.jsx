import React from 'react';
import { useState, createContext } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [selectedCategoryInJewellery, setSelectedCategoryInJewellery] = useState('all');

    return (
        <CategoryContext.Provider value={{ selectedCategoryInJewellery, setSelectedCategoryInJewellery }}>
            {children}
        </CategoryContext.Provider>
    );
};
