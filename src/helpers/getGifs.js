export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=8lED64caO5pyTq5ArCdRvKjWb6hKOq5u&q=${category}&limit=3`;
    const res = await fetch(url);
    const {data} = await res.json();
    
    //Acontinuacion en la variable gifs guardamos en un objeto solo las propiedades que deseamos del json
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    

    return gifs;
}