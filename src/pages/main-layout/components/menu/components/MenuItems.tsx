import { menuConfig } from '../menu-config.ts';

const MenuItems = () => {
    return (
        <ul className="py-4">
            {menuConfig.map((menuItem) => (
                <li
                    className="text-white py-2 px-4 hover:text-gray-200 transform duration-150"
                    key={menuItem.title}
                >
                    <a href={menuItem.path} className="block w-100">
                        {menuItem.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default MenuItems;
