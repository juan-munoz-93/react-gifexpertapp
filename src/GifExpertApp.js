import React, { useState } from 'react'
import AddCategorie from './components/AddCategorie';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Gifs']);
    return (
        <>
            <h2>Gif Expert App</h2>
            <h3>Search gifs by category :D</h3>
            <AddCategorie setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => (

                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
