import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notes = () => {
    let [data, setdata] = useState([])
    let [note, setnote] = useState("")
    let [count,setcount] = useState(1)
    let navigate = useNavigate()
    let text = { note }


    useEffect(() => {
        axios.get('http://localhost:1000/Note')
            .then((res) => {
                console.log(res);
                setdata(res.data);

            })
            .catch((err) => {
                console.log(err);
            })
    },[data])
    let addNote = (e) => {
        e.preventDefault()
        axios.post('http://localhost:1000/Note', text)
            .then((res) => {
                console.log(res);
                alert("Note Added Successfully")
            })
            .catch((err) => {
                console.log(err);
            })

    }
    let deleteTask  = (id) =>{
        axios.delete(`http://localhost:1000/Note/${id}`, )
        .then((res) => {
            console.log(res);
            alert("Note Deleted Successfully")
            setcount(count++)
            console.log(count);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    let edit = (id) =>{
        navigate(`/editnotes/${id}`)
    }
    return (
        <div onSubmit={addNote} className="notes">
            <form action="">
                <input value={note} onChange={(e) => { setnote(e.target.value) }} placeholder="Enter the Notes Here" type="text" />
                <button>Add Notes</button>
            </form>
            <div className="displayNotes">
                {data.map((x) => {
                    return (
                        <div className="dsip1">
                            <h1>{x.note}</h1>
                            <div className="options">
                            <button onClick={()=>{deleteTask(x.id)}}>Delete</button>
                            <button onClick={()=>{edit(x.id)}}>Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Notes;