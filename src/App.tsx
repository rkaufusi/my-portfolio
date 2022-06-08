import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div className="bg-slate-200">
      <h2 className="text-center font-semibold leading-tight text-5xl mt-0 mb-2 text-slate-800">Rhett Kaufusi</h2>
      <h4 className="text-center font-medium leading-tight text-5xl mt-0 mb-2 text-slate-800">Software Engineer</h4>
      <div className="flex justify-center">
        <a className="flex items-center text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out m-2" href="https://github.com/rkaufusi/" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="flex justify-center">
        <a className="flex items-center text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out m-2" href="https://www.linkedin.com/in/rhett-kaufusi/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <div className="flex justify-center p-5">
        <img src="https://avatars.githubusercontent.com/u/29996077?s=400&u=7ff0609f49dde0b01183b37e8d6384a9ef17f540&v=4" alt="Rhett" width="350" height="350"></img>
      </div>
    </div>

    <div className="flex justify-center p-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-5">
        <img className="w-full" src="https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/6242988e29733f082edf3e99/screenshot_2022-03-29-05-28-57-0000.png" alt="Algo visualizer"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Sorting Algorithm Visualizer</div>
          <a href="https://dreamy-bunny-1985e8.netlify.app" target="_blank" rel="noreferrer">
            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Project</button>
          </a>
        </div>
      </div>

      <div className="p-5 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/6244012e2f52a5384343eea4/screenshot_2022-03-30-07-06-33-0000.png" alt="Algo visualizer"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Crypto Search Engine</div>
          <a href="https://tourmaline-entremet-124d58.netlify.app/" target="_blank" rel="noreferrer">
            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Project</button>
          </a>
        </div> 
      </div>

      <div className="p-5 max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://blogthinkbig.com/wp-content/uploads/sites/4/2020/06/GitHub-Desktop-Logo.jpg?fit=1500%2C1000" alt="Algo visualizer"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">FullStack KanBan</div>
            <a href="https://github.com/rkaufusi/Project-Manager-KB" target="_blank" rel="noreferrer">
              <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Project</button>
            </a>
        </div> 
      </div>

    </div>
    </>
  );
}

export default App;
