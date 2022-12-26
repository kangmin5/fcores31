import React from 'react'

const Logged = () => {
  return (
    <div className=' w-64 px-4 flex justify-between'>
        <p className='ml-30px text-sm font-thin py-2 hover:font-bold hover: underline '>시스템 관리자</p>
        <button
        type="button"
        className=" rounded border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-blue-900  hover:text-white
        focus:outline-none  focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            LogOut </button>
    </div>
  )
}

export default Logged