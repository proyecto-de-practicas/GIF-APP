import { useEffect, useState } from "react"
import { GetGifs } from "../helpers/getGifs"




export const useFetchGifs = (category) => {
     const [images, setimages] = useState([])
     const [isLoading, setIsLoading] = useState(true)


    const getImagenes = async () => {

      const newImagenes = await GetGifs (category)
      setimages(newImagenes)
      setIsLoading(false)
    }

    useEffect(()=>{// no vuleve a caargar lo que esta dentro ( lo carga solo una vez )
        
      getImagenes()

    },[]) 
  return (
   { images: images,
    isLoading:  isLoading}
  )
}
