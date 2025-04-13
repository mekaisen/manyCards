import { useEffect, useState } from 'react';
import Home from './page/Home';
import { usersData } from './components/Card/data';
import WithLazyLoad from './page/WithLazyLoad';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isHome, setIsHome] = useState(true);
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };
  return (
    <div className={`flex justify-center w-full px-4 min-h-screen transition-colors ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className='container max-w-4xl w-full mx-auto'>
        <div className='flex justify-end gap-3 py-4'>
          <button 
            type='button' 
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${isHome ? 'bg-blue-600 text-white' : isDarkTheme ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`} 
            onClick={() => setIsHome(true)}
          >
            Home
          </button>
          <button 
            type='button' 
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${!isHome ? 'bg-blue-600 text-white' : isDarkTheme ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`} 
            onClick={() => setIsHome(false)}
          >
            WithLazyLoad
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${isDarkTheme ? 'bg-yellow-500 text-black' : 'bg-blue-700 text-white'} md:ml-auto`}
            type='button'
            onClick={toggleTheme}
          >
            {isDarkTheme ? '☀️ Светлая' : '🌙 Темная'}
          </button>
        </div>
          {isHome ? <Home isDarkTheme={isDarkTheme} usersData={usersData} /> : <WithLazyLoad isDarkTheme={isDarkTheme} usersData={usersData} />}
        <div>
    
        </div>
      </div>
    </div>
  );
};

export default App;
