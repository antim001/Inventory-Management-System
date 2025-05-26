import React from 'react';

const Supplier = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4 p-4'>
      <h1 className='text-2xl font-bold'>Supplier Management</h1>
      <div className='flex justify-between items-center'>
        <input
          type="text"
          placeholder='Search'
          className='border p-1 bg-white rounded px-4'
        />
        <button className='px-4 py-1.5 bg-blue-500 text-white rounded'>
          Add Supplier
        </button>
      </div>
    </div>
  );
};

export default Supplier;
