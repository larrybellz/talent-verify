import { useState } from "react"

export default function Test(){
    const [name,setName]=useState('');

    function handleChange(event){
        console.log(event.target.value)
        setName(event.target.value)
    }
    return <div>
        <form>
            <input type="text"
            placeholder="name"
            onChange={handleChange}
             />
        </form>
    </div>
}