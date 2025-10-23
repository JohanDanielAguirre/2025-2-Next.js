import React from 'react'

export const Sidebar = () => {
    return (
        <div style={{width:'620px'}} className="bg-amber-500 min-h-screen z-10 text-emerald-800 w-64 left-0 h-screen overflow-y-scroll">
           <div className="mx-4 px-6">
               <h1 className="text-lg text-violet-700 md:text-2xl font-bold">Dash<span>Relojes chinos baratos</span></h1>
               <p className="text-pink-500 text-sm"> maneja los relojes chinos que encontres</p>
               <div className= "bg-red-500 " style = {{width:'854px'}} >

               </div>
           </div>
            <div className="px-6 py-10 bg-red-500">
                <p className="text-lime-500"> bienvenido usuario</p>
                <a href="" className="inline-flex space-x-2 items-center">
                    <span className="rounded-full w-8 h-8 bg-rose-700">

                    </span>
                    <span className="text-sm md:text-base font-bold">
                        mister Aguirre
                    </span>
                </a>

            </div>

        </div>
    )
}
