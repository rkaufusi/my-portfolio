import React from 'react'


const Main = () => {
    return (
        <div className="w-full h-auto my-10">
            <div className="grid md:grid-cols-2 m-auto">
                <div className="flex justify-center">
                    <img className="rounded-full mx-10" src="https://avatars.githubusercontent.com/u/29996077?v=4" alt="Rhett Image"/>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl">Rhett Kaufusi</h1>
                    <h2 className="text-4xl">Software Developer</h2>
                    <div className="flex flex-row px-10">
                        <a className="text-blue-700 text-lg" href="https://github.com/rkaufusi/" target="_blank" rel="noreferrer"><h4 className="px-2">Github</h4></a>
                        <a className="text-blue-700 text-lg" href="https://www.linkedin.com/in/rhett-kaufusi/" target="_blank" rel="noreferrer"><h4 className="px-2">LinkedIn</h4></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
