import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ViewTodo = () => {

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

    useEffect(()=>{
        getTodo();
    },[]);

    if( isCompleted == null){
        return <div className=" text-xl text-white text-center">
            View Todo
        </div>
    }

    return (
        <div className=' max-w-[1120px] w-11/12 mx-auto'>
            <p className=' text-xl text-white'>
                {task}
            </p>
            <span className=' text-white'>
                completed = {isCompleted ? "completed":"not completed"}
            </span>

        </div>
  )
}

export default ViewTodo