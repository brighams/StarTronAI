import React from 'react';
import './styles/index.css';

const App: React.FC = () => {
  const openGitHub = () => {
    window.open('https://github.com/brighams/typescript-tailwind-webpack-sauce', '_blank');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-midnight-950 via-midnight-900 to-starry-950 dark:from-midnight-950 dark:via-midnight-900 dark:to-starry-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Spinning Gear Button - Upper Right */}
      <button
        onClick={openGitHub}
        className="absolute top-8 right-8 z-50 p-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
        title="Visit GitHub Repository"
      >
        <svg
          className="w-8 h-8 text-white animate-spin"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <g transform="translate(12, 12)">
            <circle cx="0" cy="-7" r="1.5" fill="currentColor" />
            <circle cx="6" cy="-3.5" r="1.5" fill="currentColor" />
            <circle cx="6" cy="3.5" r="1.5" fill="currentColor" />
            <circle cx="0" cy="7" r="1.5" fill="currentColor" />
            <circle cx="-6" cy="3.5" r="1.5" fill="currentColor" />
            <circle cx="-6" cy="-3.5" r="1.5" fill="currentColor" />
          </g>
        </svg>
      </button>

      {/* Main Content */}
      <div className="text-center px-8 max-w-3xl">
        <h1 className="font-audiowide text-7xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 drop-shadow-lg animate-pulse">
          Initialized with love by <span className="text-pink-400">app-sauce.sh</span>
        </h1>

        <p className="font-audiowide text-3xl md:text-2xl text-purple-300 mb-8 drop-shadow-lg">
          ✨ Welcome to your next-generation app! ✨
        </p>

        <p className="font-audiowide text-3xl md:text-base text-purple-300 mb-8 drop-shadow-lg">
          If you wish to add additional files or packages, and share them with a pull request, please duplicate app-sauce.sh, add a file called:
          <div className="text-pink-400"> <code>app-sauce-XXXXXXX.sh</code></div>
          where XXXXXXX identifies the purpose of the file, such as:
          <div className="text-pink-400"> <code>app-sauce-websockets.sh</code></div>
        </p>


        <div className="font-roboto text-xl md:text-2xl text-purple-200 space-y-4 mb-12">
          <p className="text-purple-300">
            Feel free to send pull requests to: <div className="font-bold text-pink-400"><a href='https://github.com/brighams/typescript-tailwind-webpack-sauce'>typescript-tailwind-webpack-sauce on github</a></div>
          </p>
        </div>
      </div>

      {/* Decorative stars background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-pulse">✨</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse" style={{animationDelay: '0.5s'}}>⭐</div>
        <div className="absolute bottom-32 left-1/4 text-4xl animate-pulse" style={{animationDelay: '1s'}}>✨</div>
        <div className="absolute bottom-20 right-1/3 text-5xl animate-pulse" style={{animationDelay: '1.5s'}}>⭐</div>
      </div>
    </div>
  );
};

export default App;

