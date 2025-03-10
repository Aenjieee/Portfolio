 import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-yellow-100 text-black'}>
      <nav className="p-4 flex justify-between items-center shadow-md"> 
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-300 dark:bg-gray-700">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
      <div className="flex">
        <aside className="w-64 p-4 bg-gray-800 text-white h-screen">
          <ul className="space-y-4">
            <li>🏠 Home</li>
            <li>📜 Experience</li>
            <li>📂 Projects</li>
            <li>🛠 Skills</li>
            <li>📞 Contact</li>
          </ul>
        </aside>
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-semibold">Welcome to My Portfolio</h2>
          <p className="mt-4">Explore my experience, projects, and skills.</p>
        </main>
      </div>
    </div> 
  );
} 
