import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
      <h1 className="text-4xl font-bold text-white mb-8">Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
