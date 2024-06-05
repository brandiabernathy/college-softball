'use client'

import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = ({ children }: any) => {
    const [ year, setYear ] = useState('');
    const [ games, setGames ] = useState<any[]>([]);

    return (
        <AppContext.Provider value={{ year, setYear, games, setGames }}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => useContext(AppContext);