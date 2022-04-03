import { useState, useEffect } from 'react';

export const RoutePropio = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
    useEffect(() => {
      const onLocationChange = () => {
        console.log('La propiedad location ha cambiado');
        setCurrentPath(window.location.pathname);
      }
      
      window.addEventListener('cambioDeRuta', onLocationChange);
      
      return () => {
        window.removeEventListener('cambioDeRuta', onLocationChange);
      }
    }, [])
      
    return currentPath === path ? children : null
  }