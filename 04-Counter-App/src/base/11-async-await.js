

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );


export const getImagen = async() => {

    try {
        const apiKey = 'UkXtWw1t02SZK27KypfrzFJ3wf5sWLnz';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        // manejo del error
        return 'No existe';
    }
}



