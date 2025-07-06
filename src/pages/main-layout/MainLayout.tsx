import Header from './components/header/Header.tsx';
import Menu from './components/menu/Menu.tsx';
import './main-layout.scss';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <div className="h-full flex">
                <Menu />
                <div className="px-10 py-10 container ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
