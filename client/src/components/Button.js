import React from 'react';
import { useDarkMode } from './DarkMode';

const Btn = () => {
    
    const [darkMode, setDarkMode] = useDarkMode(false);
    
    const toggleing = e => { e.preventDefault(); setDarkMode(!darkMode);

};

    

    return(
        <div className="buttonDiv">

        <button id="darkbtn" onClick={toggleing} className={darkMode ? "is" : "is not"}>Dank Mode</button>
        
        </div>

    );

}

export default Btn;
