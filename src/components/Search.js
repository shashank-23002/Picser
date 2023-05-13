import { useState } from "react"
import './SearchBar.css'

function Search({onSubmit})
{

    const [term,setTerm]=useState('')

    const handleFormSubmit=(event)=>{
        event.preventDefault()
        // console.log("Making a request")

        //*****NEVER EVER DO THIS***** */
        // onSubmit(document.querySelector('input').value)

        //*******Correct way */
        onSubmit(term)
    }

    
    const handleChange=(event)=>{
        setTerm(event.target.value)
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label className="label-name">Enter Search Term: </label>
               <input className="input-box" value={term} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default Search