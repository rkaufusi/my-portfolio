import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'

const Nav = () => {
  return (
    <div className="w-auto h-16 bg-zinc-300 shadow-lg overflow-hidden">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-slate-800">Rhett Kaufusi</h1>
        </div>
        <div className="">
          <a href="https://github.com/rkaufusi/" target="_blank" rel="noreferrer"><AiOutlineGithub className="h-full w-9 text-slate-800"/></a>
        </div>
      </div>
    </div>
  )
}

export default Nav
