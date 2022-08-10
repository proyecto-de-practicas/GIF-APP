import { useState } from "react"


export const AddCategory = ({OnNewCategory}) => {
  
    const [ inputValue, setinputValue ] = useState('')

    const onInputChange = ({target:{value}})=>{
       
        setinputValue(value)
    }

    const onSubmit = (event) => {
        event.preventDefault() //evitar que se recarge la pagina 
        if( inputValue.trim().length <= 1 ) return
        OnNewCategory( inputValue.trim() )
        setinputValue('')

       
        
    }
    
        const width = document.body.clientWidth 
       let  buscar
        if(width < 400)
        {
            buscar= <i className="fa fa-search" aria-hidden="true"></i>
        }else{
            buscar= 'Buscar'
        }
        
    
    return (
    <form className="d-flex justify-content-between" onSubmit={(event)=> onSubmit(event) }>
        <input 
        type="text" 
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
        
        /> 
        < button  className="btn" >{buscar}</button>
        

    </form>
  )
}
