export const GetGifs = async(category) =>{
        
   try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CNyI1UExCFT8cJsVdXHdeLDNErS8rbhh&q=${category}&limit=7`
    const resp = await fetch(url)
    const {data=[]} = await resp.json()
    

    const gits = data.map (img =>{
        
        return (
            {
                id:img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        )
    })
    return gits
   } catch (error) {
    console.log(error)
   }
    
    
}