import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './components/Home';
// import Login from './components/login';
// import Register from './components/register';

function App() {
  return (
    <div className="App">

    <Home />
    {/* <Login />
    <Register /> */}
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>

    
  );
}

export default App;
