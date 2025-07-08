import './header.scss';
import { useSelector } from 'react-redux';

const Header = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);

    return (
        <header className="header">
            <div className="header__title-wrap">
                <a href="/">
                    <h1 className="header__title text-white text-2xl">TASKO</h1>
                </a>
            </div>
            <div className="text-white flex items-center justify-end pe-5">
                {isAuth ? <span>Hello, User!</span> : <span>Sign in</span>}
            </div>
        </header>
    );
};

export default Header;
