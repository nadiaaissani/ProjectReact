import React from 'react';
import { useState, useEffect } from 'react';
const UseRecupération = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    console.log(response.ok);
                    if (!response.ok) {
                        throw new Error("désolé une erreur s'est produit");
                    }

                    return response.json();
                })
                .then((data) => { // ici c'est bien 'data', pas 'date'
                    console.log(data);
                    setData(data); // ✅ ça utilise la bonne variable
                    setIsloading(false);
                })
                .catch((err) => {
                    console.error('Erreur lors du fetch :', err);
                    setError(true);
                    setIsloading(false);

                });
        }, 2000);
    }, [url]);
    return { data, isLoading, error }
};

export default UseRecupération;