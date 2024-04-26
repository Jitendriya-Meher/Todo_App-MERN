import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Dashboard() {

  const {baseURL,token} = useSelector(s=>s.auth);

  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  const getUserTodo = async () => {
    try{
      const res = await axios.get(`${baseURL}/api/todo/user`,{
        headers:{
          Authorization: token
        }
      });
      const data = await res.data;

      if( data.success){
        toast.success(data.message);
        setTodos(data.dbTodo);
      }
      else{
        toast.error(data.message);
      }
    }
    catch(err){
      toast.error(err.message);
    }
  }

  const getUserSearchTodo = async () => {
    try{
      const res = await axios.post(`${baseURL}/api/todo/search`,{
        search
      },{
        headers:{
          Authorization: token
        }
      });
      const data = await res.data;

      if( data.success){
        toast.success(data.message);
        setTodos(data.dbTodo);
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
    getUserTodo();
  },[]);

  return (
    <div className=" max-w-[1120px] w-11/12 text-white mx-auto">

      <div className="">
        <input type="text" value={search}
        className=" text-black"
        onChange={(e) => {
          setSearch(e.target.value);
        }} />
        <button onClick={getUserSearchTodo}>
          Search
        </button>
      </div>

      {
        todos.map((todo) => (
          <div className="" key={todo._id}>
            <p>{todo.task}</p>
            <Link to={`/view/${todo._id}`}>
              View
            </Link>
            <Link to={`/edit/${todo._id}`}>
              Edit
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default Dashboard;
