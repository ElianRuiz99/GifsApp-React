export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=15&api_key=t72iykm5f4sVEg6N4KTrELCwv2h3wgK0`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_large.url
    }) )

    console.log( gifs );

    return gifs;
}