import React from 'react';
import {useState} from 'react'

const Supplier = () => {
  const [addEditModel,setEditModel]=useState(null)
  return (
    <div className='w-full h-full flex flex-col gap-4 p-4'>
      <h1 className='text-2xl font-bold'>Supplier Management</h1>
      <div className='flex justify-between items-center'>
        <input
          type="text"
          placeholder='Search'
          className='border p-1 bg-white rounded px-4'
        />
        <button className='px-4 py-1.5 bg-blue-500 text-white rounded'
        onClick={()=>setEditModel(1)}
        >
          Add Supplier
        </button>
      </div>
      {addEditModel && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'>
          <div className='bg-white p-4 rounded shadow-md w-1/3 relative'>
      <h1 className='text-xl font-bold'>Add Supplier</h1>
      <button className='absolute top-4 right-4 font-bold text-lg 'onClick={()=>setEditModel(null)}>X</button>
      <form className='flex flex-col gap-4 mt-4'>
   <input type="text" placeholder='supplier name' className='border p-1 bg-white rounded px-4'/>
   <input type="email" placeholder='supplier email' className='border p-1 bg-white rounded px-4'/>
   <input type="text" placeholder='supplier phone number' className='border p-1 bg-white rounded px-4'/>
   <input type="text" placeholder='supplier address' className='border p-1 bg-white rounded px-4'/>
   <button className='px-4 py-1.5 bg-blue-500 text-white rounded cursor-pointer'>Add Supplier</button>
      </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Supplier;
