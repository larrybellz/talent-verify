import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";

export default function Search() {
    const options = ['name', 'role'];
    const [query, setQuery] = useState("")
    const [searchBy, setSearchBy] = useState("")
    const [results, setResults] = useState({})
    const [submitted, setSubmitted] = useState(false)
    useEffect(() => {
        if (submitted) {
            axios.get(`http://localhost:8000/search/?query=${query}&search_by=${searchBy}`

            ).
                then(res => {
                    console.log(res.data)
                    setResults(res.data)
                }).
                catch(error => {
                    console.log(error)
                })
            setSubmitted(false)
        }


    }, [query, searchBy, submitted])
    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }

    return <div className="container w-90 ">
        <form onSubmit={handleSubmit}>
            <div id="" className="search w-100 ">
                <input className="form-control w-100 mt-4 rounded-0 border-1"
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)} />

            </div>

            <select className="mt-2 ml-5" value={searchBy} onChange={(event) => setSearchBy(event.target.value)}>

                <option value="">-------</option>

                {
                    options.map(option =>
                        <option value={option}>search by {option}</option>

                    )}
            </select>
            <button type="submit" className="btn btn-outline-primary ml-3">search</button>
        </form>




        <div className="container fluid padding-10px border mt-2">

            <br />

            {
                    results && results.length > 0 ?
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>employee_contacts</th>
                        <th>action</th>

                    </tr>
                </thead>

                        <tbody>
                   
                            {
                            results.map(resultsitem =>


                            <tr>
                                <td>{resultsitem.name}</td>

                                <td>{resultsitem.employee_contacts}</td>
                                <td>
                                    <div className="btn btn-outline-success"><Link to={`/employee/${resultsitem.id}`}>view</Link></div>
                                </td>

                            </tr>






                             )}
                        </tbody>
                        </table>
                        : <h2>NO RESULTS </h2>
                }
            
        </div>
    </div>

}