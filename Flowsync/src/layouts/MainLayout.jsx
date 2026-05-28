import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
