import React from 'react';
import Header from 'src/shared/ui/header/Header';
import Main from './Main';
import './styles/app.scss'
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
// eslint-disable-next-line import/no-unresolved


function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Header />
                <Main />
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
