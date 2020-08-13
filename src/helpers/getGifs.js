export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PE43oGdtLB8eVitDKBJ1Usl0Y0WLF9kw&q=${ encodeURI(category) }&limit=2`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

   return gifs;
}