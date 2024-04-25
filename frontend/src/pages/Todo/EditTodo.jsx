import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditTodo = () => {

    const [task, setTask] = useState("");
    const [isCompleted, setIsCompleted] = useState(null);
    const {baseURL,token} = useSelector(s=>s.auth);
    const {id} = useParams();

    async function getTodo(){
        try{
            const res = await axios.get(`${baseURL}/api/todo/${id}`,{
                headers:{
                    Authorization: token
                }
            });
            const data = await res.data;
            console.log(data.dbTodo);

            if( data.success){
                toast.success(data.message);
                setTask(data.dbTodo.task);
                setIsCompleted(data.dbTodo.isCompleted);
            }
            else{
                toast.error(data.message);
            }
        }
        catch(err){
            toast.error(err.message);
        }
    }

    async function editTodo(){
        try{
            const res = await axios.patch(`${baseURL}/api/todo/edit/${id}`, {
                task,
                isCompleted
            } ,{
                headers:{
                    Authorization: token
                }
            });
            const data = await res.data;

            if( data.success){
                toast.success(data.message);
            }
            else{
                toast.error(data.message);
            }
        }
        catch(err){
            toast.error(err.message);
        }
    }

    useEffect(()=>{
        getTodo();
    },[]);

    if( isCompleted == null){
        return <div className=" text-xl text-white text-center">
            Edit Todo
        </div>
    }

    return (
        <div className=' max-w-[1120px] w-11/12 mx-auto'>
            <p className=' text-xl text-white'>
                Edit Todo
            </p>
            <input type="text" placeholder='add todo' value={task}
            onChange={(e) => {
                setTask(e.target.value);
            }} />
            <span className=' text-white'>
                completed = {isCompleted ? "completed":"not completed"}
            </span>
            <button onClick={()=>{
                setIsCompleted((prev) => (!prev))
            }} className=' text-yellow-50'>
                Toggle edit
            </button>
            <button onClick={editTodo} className=' text-white'>
                Edit
            </button>
        </div>
  )
}

export default EditTodo