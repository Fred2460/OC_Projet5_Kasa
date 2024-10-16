import React, { useEffect, useState } from 'react';
import Header from 'Header'

const activeUrl = window.location.pathname;
console.log("activeUrl=", activeUrl);

const ActivePath = ({ activeUrl }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Cette fonction sera appelée chaque fois que activeUrl change
    console.log('activeUrl a changé:', activeUrl);
    // Logique pour mettre à jour les données ou l'état selon le besoin
    setData(`Données mises à jour avec ${activeUrl}`);
  }, [activeUrl]); // Le composant réagit au changement de activeUrl

  return (
    <Header ActivePath={data} />
  );
}

export default ActivePath;
