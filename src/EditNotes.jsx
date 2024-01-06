import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
const EditNotes = () => {
    let [data, setdata] = useState("")
    let params = useParams()

    let text = { data }

    useEffect(() => {
        axios.get(`http://localhost:1000/Note/${params.id}`)
            .then((res) => {
                console.log(res);
                setdata(res.data.note);

            })
            .catch((err) => {
                console.log(err);
            })
    },[])
    let EditNote = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:1000/Note/${params.id}`,text)
            .then((res) => {
                console.log(res);
                alert("Note Updated Successfully")
            })
            .catch((err) => {
                console.log(err);
            })

    }
    return ( 
        <div className="notes">
            <form onSubmit={EditNote} action="">
                <input value={data} onChange={(e) => { setdata(e.target.value) }} placeholder="Enter the Notes Here" type="text" />
                <button>Add Notes</button>
            </form>
        </div>
     );
} 
 
export default EditNotes;