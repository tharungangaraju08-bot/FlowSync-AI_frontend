import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../common/PrimaryButton';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="sticky top-0 z-30 border-b border-slate-200 bg-slate-950/85 backdrop-blur shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
                <button
                    type="button"
                    className="flex items-center gap-3 text-left text-slate-900 focus:outline-none"
                    onClick={() => navigate('/')}
                >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-xl font-black text-white shadow-sm">
                        FS
                    </span>
                    <div>
                        <p className="text-lg font-semibold leading-tight text-white">FlowSync</p>
                        <p className="text-xs text-slate-500">AI workspace</p>
                    </div>
                </button>

                <div className="ml-auto flex items-center gap-3">
                    <PrimaryButton
                        title="Login"
                        onClick={() => navigate('/login')}
                        className="rounded-full border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
                    />
                    <PrimaryButton
                        title="Signup"
                        onClick={() => navigate('/signup')}
                        className="rounded-full bg-slate-900 text-white hover:bg-slate-700 focus:ring-slate-900/40"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
