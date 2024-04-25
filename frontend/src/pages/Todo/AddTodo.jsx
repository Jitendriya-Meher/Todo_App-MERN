import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AddTodo = () => {

    const [task, setTask] = useState("");
    const {token,baseURL} = useSelector(s=>s.auth);

    async function addTodo(){

        try{
            const res = await axios.post(`${baseURL}/api/todo/add`,{
                task
            },{
                headers:{
                    Authorization: token
                }
            });
            const data = await res.data;

            if( data.success){
                toast.success(data.message);
                setTask("");
            }
            else{
                toast.error(data.message);
            }
        }
        catch(err){
            toast.error(err.message);
        }

    }

  return (
    <div className=' max-w-[1120px] w-11/12 mx-auto'>
        <input type="text" placeholder='add todo' value={task}
        onChange={(e) => {
            setTask(e.target.value);
        }} />
        <button onClick={addTodo} className=' text-white'>
            Add
        </button>
    </div>
  )
}

export default AddTodo