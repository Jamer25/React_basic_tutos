import React, { useState, useEffect } from 'react';

const DataFetchComponent = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define la función de fetch
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
      
        // Llama a la función de fetch
        fetchData();
      }, []); // El array vacío asegura que el efecto se ejecute solo una vez
        // Renderizado condicional basado en el estado
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div>
            <h1>Fetched Data</h1>
            <ul>
                {data.map(item => (
                <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            </div>
        );
      




}
export default DataFetchComponent;