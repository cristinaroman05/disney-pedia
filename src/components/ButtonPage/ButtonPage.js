import'../ButtonPage/ButtonPage.css'

const ButtonPage = ({previousPage, text, nextPage}) =>{
    
    return(
        <div className="button-container">
           <button onClick={previousPage} >Anterior</button>
           <p>{text}</p>
           <button onClick={nextPage} >Siguiente</button> 
        </div>
        
    )
}
export default ButtonPage;