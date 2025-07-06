import Header from './components/header/Header.tsx';
import Menu from './components/menu/Menu.tsx';
import './main-layout.scss';
import { Button } from '@mui/material';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <Menu />
        </div>
    );
};

export default MainLayout;
