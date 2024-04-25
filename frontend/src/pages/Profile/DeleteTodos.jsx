import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
}));

const DeleteTodos = () => {

    const {baseURL,token} = useSelector((state) => (state.auth));
    const [disabledButton ,setDisableButton] = useState(false);


    async function deleteHandler() {

        setDisableButton(true);

        const conf = window.confirm("Are you sure you want to delete your all Todos?");

        if( !conf){
            setDisableButton(false);
            return;
        }

        try{

            const res = await axios.delete(`${baseURL}/api/todo/deleteall`,{
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

        setDisableButton(false);
    }

  return (
    <div className=' w-full'>

        <div className=" w-full p-1">

            <div className=" text-center">
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" sx={{ width: 200, height: 200 }}/>
                </StyledBadge>
            </div>

            <h1 className=' my-8 text-2xl'>
                Are you sure you want to delete your all Todos?
            </h1>


            <button
            className='bg-pink-600 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] flex mt-8 items-center justify-center gap-x-2 disabled:bg-gray-500 w-full'
            disabled={disabledButton}
            onClick={deleteHandler}
            >
                <p className="text-[1.1rem]">
                    Delete All Todos
                </p>
                <FaUser size={26}></FaUser>
            </button>

        </div>

    </div>
  )
}

export default DeleteTodos