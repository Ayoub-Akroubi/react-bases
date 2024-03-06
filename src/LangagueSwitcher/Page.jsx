import LangagueSwitcher from "./LangagueSwitcher";
import { useState } from "react"

export default function Page() {

    const [currentLang,setCurrentLang] = useState('FR')
    const displayMessage = () => {
        switch (currentLang) {
            case 'FR': return 'Bonjour Ayoub';
            case 'ENG': return 'Hello Ayoub';
            case 'ESP': return 'Hola Ayoub';
        
            default:
                break;
        }
    }

    return <>
        <LangagueSwitcher onLangagueChange={ (value) =>{setCurrentLang(value)}}>
        </LangagueSwitcher>
        {displayMessage()}
    </>
}