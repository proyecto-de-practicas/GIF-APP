import { useState } from "react"
import {AddCategory, GitGrid  } from './components'

let contador = 1



export const GitExpertApp = () => {
  
    const [categories, setCategories] = useState([ 'html', 'css' ])
    const onAddCategory = (OnNewCategory)=>{
        
        if( categories.includes(OnNewCategory) ) return
        setCategories([OnNewCategory,...categories])
        
       
        //setCategories(cat => [...categories, 'goku'])
    } 
    /* const historCategorias = () =>{
        const historCategorias = categories
        
    } */
    
    const remorArray = () => {
        const dimecionArray = categories.length
        categories.splice(0, dimecionArray )
        setCategories([...categories])
       
      
        
    }

    return (
        <>
     <div className="container" >
            <div className="row d-flex justify-content-center">
                <div className="col-12 text-center my-5">
                
                <h1   >  Gif Expert App   </h1>
                </div>
                <div className="col-11 ">
                    
                        <AddCategory 
                    // setCategories={setCategories} //enviar valor al componente 
                    OnNewCategory={ (value)  => {
                        
                        
                        return onAddCategory(value)} 
                        }
                        />

                </div>
                <div className="col-12 py-5">
                <hr></hr>
                <div className="d-flex justify-content-end">

                <button className="btn" onClick={remorArray}><i className="fa-solid fa-circle-xmark"></i> HISTORIAL</button>
                </div>
                        {
                           
                        categories.map(category => {
                            
                          

                            return (
                                <GitGrid key={category}  category={category} categories={categories}  />
                               
                            )
                            })
                        }
                </div>
            </div>
            
            
     </div>

     <div className="container2 bg-dark">
        <div className="row my-5">
                <div className="col-12 text-center">

                    <footer>
                        <>
                        copyright - Jerardo Romero
                        </>
                    </footer>

                </div>
            </div>
     </div>
     
   </>
     
  )
}
