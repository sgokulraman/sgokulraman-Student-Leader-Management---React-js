import React, { useEffect, useState } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import axios from 'axios'
import './example.css'
import { LiaUserEditSolid } from "react-icons/lia";
import { MdOutlineFormatStrikethrough } from "react-icons/md";
import { FaPlus } from "react-icons/fa"; export default function Example() {
    const [update, setupdate] = useState(false)
    const [edit, setedit] = useState("")
    const [todo, settodo] = useState("")
    const [apicalling, setapicalling] = useState([])
    const [deleteid, setdeleteid] = useState(null)
    const [textstrick, settextstrick] = useState([])
    const [time, settime] = useState("")
    const [date, setdate] = useState("")
    const [loading, setloading] = useState()
    const [todoicon, settodoicon] = useState(false)
    const [disabled, setdisabled] = useState(false)
    const handleinput = (e) => {
        settodo(e.target.value)
    }
    const handledata = async () => {
        if (todo.length === 0) {
            alert("Please Check Your Field!...")
            return
        } else {
            let body = {
                task: todo,
                date: date,
                time: time,
            }
            let handleing = await axios.post("http://localhost:3000/todoList", body)
            settodo("")
            callingapi()
        }

    }
    const callingapi = async () => {
        let dat = new Date().toLocaleDateString()
        setdate(dat)
        let timing = new Date().toLocaleTimeString()
        settime(timing)
        setupdate(true)
        setloading(true)
        try {
            let handleing = await axios.get("http://localhost:3000/todoList")
            setapicalling(handleing.data)
            setloading(false)

        }
        catch (error) {
            console.error("Fetching Data Error", error)
        }
    }

    const handledelete = async (id) => {
        try {
            let handling = await axios.delete("http://localhost:3000/todoList/" + id)
        }
        catch (error) {
            console.error("Delete Error", error)
        }
        callingapi()

    }
    const canceldelete = () => {
        setdeleteid(false)
    }
    const handleediting = async () => {
        let dat = new Date().toLocaleDateString()
        setdate(dat)
        let timing = new Date().toLocaleTimeString()
        settime(timing)
        const body ={
            task: todo,
            date: date,
            time: time
        }
        const the = await axios.put("http://localhost:3000/todoList/" + edit, body)
        settodo("")
        setedit(null)
        setupdate(true)
        callingapi()
    }
    const handleedit =  (data) => {
        settodo(data.task)
        setedit(data.id)
        setupdate(false)
    }
    const strick = (da) => {
        settextstrick(prev => (prev.includes(da.id) ? prev.filter(id => id !== da.id) : [...prev, da.id]))
    }

    const incancel = () => {
        setupdate(true)
        settodo("")

    }
    let changeicon = () => {
        settodoicon(true)
        setdisabled(true)
    }
    useEffect(() => {
        callingapi()
    }, []);
    return (
        <>
            {todoicon ? (<div className='inputvalue'>
                <input value={todo} onChange={handleinput} className='form-control d-inline-block form-control-lg w-auto m-5' placeholder='Create Your todo' autoFocus />
                {update ? (<button className='btn d-inline-block btn-primary  pt-2 pb-2' onClick={handledata}> Submit</button>) : (<div className='d-inline-block'><button className='btn btn-warning' onClick={handleediting}>Update</button><button className='btn btn-info ms-5' onClick={incancel}>Cancel</button></div>)}
            </div>) : (<button onClick={changeicon} className='page-icon'><FaPlus /></button>)}
            <ol>
                {loading ? (<div className='d-flex justify-content-center'><span className='spinner-border text-danger'></span></div>) : (
                    apicalling.map((da) => (
                        <div className='container' key={da.id}>
                            <li className={textstrick.includes(da.id) ? "strick" : "sub-container"}>{da.task}</li>
                            <p>{da.time}<br />{da.date}</p>
                            {disabled ?(<div>
                                <button className='btn ms-4 btn-danger pt-0 pb-0' onClick={() => setdeleteid(da.id)}><FaDeleteLeft /></button>
                                <button className='btn ms-4 btn-light pt-0 pb-0' onClick={() => handleedit(da)}><LiaUserEditSolid /></button>
                                <button className='btn ms-4 btn-light pt-0 pb-0' onClick={() => strick(da)}><MdOutlineFormatStrikethrough /></button>
                            </div> ):("")}

                            {deleteid === da.id && (<div className='deleting'>
                                <li>
                                    <b>Confirmation message = {da.task.substring(0, 5)}</b>
                                </li>
                                <button onClick={() => handledelete(da.id)} className='btn btn-danger m-4'>Delete</button>
                                <button onClick={() => canceldelete()} className='btn btn-secondary m-4'>Cancel</button>
                            </div>)}
                        </div>
                    ))

                )}</ol>

        </>
    )
}
