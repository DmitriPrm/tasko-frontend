import './menu.scss';
import WorkSpacesMenuList from './components/WorkSpacesMenuList.tsx';
import MenuItems from './components/MenuItems.tsx';

const Menu = () => {
    return (
        <div className="menu">
            <MenuItems />
            <hr className="text-white" />
            <WorkSpacesMenuList />
        </div>
    );
};

export default Menu;
