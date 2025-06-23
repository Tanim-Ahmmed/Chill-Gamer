
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
           <Navbar></Navbar>

           <div className='min-h-screen'>
           <Outlet></Outlet>
           </div>
           <Footer></Footer>

           <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;