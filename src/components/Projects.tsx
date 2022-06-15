import React from 'react'
import algoImage from '../assets/Algo-visualizer.png'
import cryptoImage from '../assets/Crypto-search.png'
import kanbanImage from '../assets/Kanban-image.png'

const Projects = () => {
    return (
        <div className="w-full h-screen bg-zinc-300">
            <h1 className="text-center text-6xl pt-5 text-slate-800">Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center mx-10 my-5">

            <a href="https://dreamy-bunny-1985e8.netlify.app/" target="_blank" rel="noreferrer">
                <div className="bg-white m-4 p-8 rounded-xl shadow-2xl">
                    <img src={algoImage} alt="/"/>
                    <div className="flex justify-between">
                        <h6 className="text-2xl">Sorting Algorithm Visualizer</h6>
                    </div>
                </div>
                </a>

                <a href="https://tourmaline-entremet-124d58.netlify.app/" target="_blank" rel="noreferrer">
                <div className="bg-white m-4 p-8 rounded-xl shadow-2xl relative">
                    <img src={cryptoImage} alt="/"/>
                    <div className="flex justify-between">
                        <h6 className="text-2xl">Crypto Search Engine</h6>
                    </div>
                </div>
                </a>

                <a href="https://github.com/rkaufusi/" target="_blank" rel="noreferrer">
                <div className="bg-white m-4 p-8 rounded-xl shadow-2xl relative">
                    <img src={kanbanImage} alt="/"/>
                    <div className="flex justify-between">
                        <h6 className="text-2xl">Project Management KanBan</h6>
                    </div>
                </div>
                </a>

            </div>
        </div>
    )
}

export default Projects
