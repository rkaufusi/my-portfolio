import React from 'react'
import algoImage from '../assets/Algo-visualizer3.png'
import cryptoImage from '../assets/Crypto-search3.png'
import timeclock from '../assets/timeclock.png'
import notes from '../assets/note-fullstack.png'

const Projects = () => {
    return (
        <div className="w-auto h-auto bg-zinc-300">
            <h1 className="text-center text-6xl pt-5 text-slate-800">Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto my-5">

            <a href="https://github.com/rkaufusi/notesBackend" target="_blank" rel="noreferrer">
                <div className="bg-white m-4 p-8 rounded-xl shadow-2xl hover:scale-105 ease-in duration-200">
                    <img src={notes} alt="/"/>
                    <div className="flex justify-between">
                        <h6 className="text-2xl">Sorting Algorithm Visualizer</h6>
                    </div>
                </div>
                </a>

                <a href="https://tourmaline-entremet-124d58.netlify.app/" target="_blank" rel="noreferrer">
                <div className="bg-white m-4 p-8 rounded-xl shadow-2xl hover:scale-105 ease-in duration-200">
                    <img src={cryptoImage} alt="/"/>
                    <div className="flex justify-between">
                        <h6 className="text-2xl">Crypto Search Engine</h6>
                    </div>
                </div>
                </a>

                <a href="https://leafy-nasturtium-422453.netlify.app/" target="_blank" rel="noreferrer">
                <div className="bg-white m-4 p-8 rounded-xl shadow-2xl hover:scale-105 ease-in duration-200">
                    <img src={timeclock} alt="/"/>
                    <div className="flex justify-between">
                        <h6 className="text-2xl">Time Clock App</h6>
                    </div>
                </div>
                </a>

            </div>
        </div>
    )
}

export default Projects
