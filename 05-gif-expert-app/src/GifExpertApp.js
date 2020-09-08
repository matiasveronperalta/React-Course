import React, { useState } from 'react';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch', 'Dragon Ball', 'Naruto'])
    
    const handleAdd = () => {
        setCategories([...categories, 'Holi']);
    };

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={ handleAdd }> Agregar Categoría </button>
            <ol>
                {
                    categories.map(category =>{
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </>
     );
}
 
export default GifExpertApp;