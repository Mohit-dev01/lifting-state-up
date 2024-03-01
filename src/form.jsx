import { useState } from "react"

const User = (props) => {
    function handleSubmit(e){
        e.preventDefault()
        props.func(name)
    }
    const[name,setName]= useState("")
    return(
        <>
      <form onSubmit={handleSubmit} >
        <input type="text"  value={name} onChange={(e) => {setName(e.target.value)}}/>
        <button>Submit</button>
      </form>
        </>
    )
}
export default User