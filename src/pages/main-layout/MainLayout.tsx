import Header from './components/header/Header.tsx';
import Menu from './components/menu/Menu.tsx';
import './main-layout.scss';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthPage } from '../auth/AuthPage.tsx';

const MainLayout = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const isMenuOpen = useSelector((state) => state.config.isMenuOpen);

    return isAuth ? (
        <div>
            <div className="main-layout">
                <Header />
                <hr className="text-white" />
                <div className="h-full flex grow shrink">
                    <Menu />
                    <div className="px-10 py-10 container ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <AuthPage />
    );
};

export default MainLayout;
