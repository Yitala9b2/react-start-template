import React, { createContext, SetStateAction, useState, ReactNode, FC, Dispatch } from "react";



interface IThemeProviderProps {
    children: ReactNode;
}

interface IThemeContext {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<IThemeContext>({ theme: 'light', setTheme: () => {} });


export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState('light')


    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
}

