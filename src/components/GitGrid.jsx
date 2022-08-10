
import { useEffect, useState } from "react"

//import { GetGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"



export const GitGrid = ({category, categories}) => {

  

  const {images, isLoading} = useFetchGifs(category)

  
 
  /* const [images, setimages] = useState([])

    const getImagenes = async () => {

      const newImagenes = await GetGifs (category)
      setimages(newImagenes)
    }

    useEffect(()=>{// no vuleve a caargar lo que esta dentro ( lo carga solo una vez )
        
      getImagenes()

    },[]) */

    const deshabilitar =()=>{
      
       
        document.getElementById(`b${category}`).remove()
      const indixe =  categories.indexOf(`${category}`)
      categories.splice(indixe, 1)
       
       
       
      
    }

    
  return (
    <> 
     <div>
     <div id={`b${category}`}>
      <div className="py-5 d-flex justify-content-center titulos ">
        
       <p className=" text-center" > <i className="fa-solid fa-hand-point-right"></i>     {category}</p>
        <button className="btn eliminar " onClick={deshabilitar}> <i className="fa-solid fa-circle-xmark"></i></button >
       </div>
       
        {
          isLoading && (<h2>Cargando....</h2>)

          //------------------------------
          /* isLoading 
          ? (<h2>Cargando....</h2>)
          :null */
        }
        <div className="card-grid" >
          {
            images.map((img) =>  {
              return (
                <GifItem key={img.id} 
                {...img} />  
              )
            })
          }
        </div>
      </div>
     </div>
    </>
  )
}
