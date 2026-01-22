import axios from "axios";
import { IoCloseCircle } from "react-icons/io5";
import React, { useEffect, useState } from "react";
function Leader_signin(){
    const [apicalling, setapicalling] = useState([])
    const [problem,setProblem] = useState([])
    const [studentproblem, setstudentproblem] = useState([])
    const [problemview, setproblemview] = useState()
    const [problems, setproblems] = useState([])
    const [appear, setappear] = useState(false)

    const handleapi = async()=>{
        let api = await axios.get("https://gokulraman.pythonanywhere.com/student/detail/")
        setapicalling(api.data)
        let apitwo = await axios.get("https://gokulraman.pythonanywhere.com/student/problem/")
        setProblem(apitwo.data)
    }
    let mergeddataSummery = (apicalling, problem)=>{
        return apicalling.map((student)=>({
            ...student, problem: problem.filter(
                p => p.student === student.id
            ) 
        }))
    }
    const disappear = ()=>{
        setappear(false)
    }
    const studentproblemview = (data)=>{
        setproblemview(data)
        setappear(true)

    }
    // const datacheck = ()=>{
    //     return problem.filter(f =>
    //         f.
    //     )
    // }
    const setproblemdata = ()=>{
        return problem.filter(p =>
            p.student === problemview
        )
    }
    
    useEffect(()=>{
        handleapi()
    },[])
    useEffect(()=>{
        if (apicalling.length && problem.length){
            const merge = mergeddataSummery(apicalling,problem)
            setstudentproblem(merge)
        }
    },[apicalling,problem])
    useEffect(()=>{
        if(problemview && problem){
            const mergeproblems = setproblemdata(problemview, problem)
            setproblems(mergeproblems)
        }
    },[problemview, problem])


return(<>
<div className="table_container">
     {appear?"":(<table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Problem</th>
            <th>Status</th>
        </tr>
        </thead>

       <tbody>
            {studentproblem.map((student=>(
            <tr key={student.id}>
                <td>{student.first_name}</td>
                <td>{student.phone_no}</td>
                <td>{student.email}</td>
                <td>{student.problem.map((p)=>(
                <div key={p.id}><button className="buttons-for-stick"onClick={()=>studentproblemview(p.student)}>{p.problem_title}</button>
                </div>
                ))}</td>
                <td><button className="btn btn-dark">Strick</button></td>
            </tr>
            )))}
        </tbody>

    </table>)}

</div>
    {appear ?<div  className="problem-container-apper">
        <b><IoCloseCircle role="button" onClick={disappear} size={30} className="text text-danger f-6 "/></b>
            {problems.map((da)=>(
                <div key={da.id}>
                    <div className="appear-problem-description">
                        <p>{da.problem}</p>
                        </div>
                </div>
            ))}
    </div>:""}

</>
)
}
export default Leader_signin




// const mergedData = problems.map((p) => {
//     const user = users.find(u => u.id === p.userId);
//     return {
//         ...p,
//         name: user?.first_name,
//         email: user?.email,
//         phone: user?.phone_no
//     };
// });

// const [problems, setProblems] = useState([]);

// const fetchData = async () => {
//     try {
//         const userApi = await axios.get("http://localhost:3000/Signin");
//         const problemApi = await axios.get("http://localhost:3000/Problems");

//         setUsers(userApi.data);
//         setProblems(problemApi.data);
//     } catch (err) {
//         console.error(err);
//     }
// };