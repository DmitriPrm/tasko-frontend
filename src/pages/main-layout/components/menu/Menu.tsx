import './menu.scss';
import WorkSpacesMenuList from './components/WorkSpacesMenuList.tsx';
import MenuItems from './components/MenuItems.tsx';
import { useSelector } from 'react-redux';

const Menu = () => {
    const isOpen = useSelector((state) => state.config.isMenuOpen);

    return (
        isOpen && (
            <div className="menu">
                <MenuItems />
                <hr className="text-white" />
                <WorkSpacesMenuList />
            </div>
        )
    );
};

export default Menu;
