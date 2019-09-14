import { useEffect, useState } from 'react';

 export const useDarkMode = setValue => {
    const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
      if (darkMode === true) {
          document.body.classList.add('darkmode');
      } else {
          document.body.classList.remove('darkmode');
      }
  }, [darkMode]);

return [darkMode, setDarkMode];
}

 