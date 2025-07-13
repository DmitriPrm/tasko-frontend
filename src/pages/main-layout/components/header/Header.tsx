import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { destroyTokenInApp } from '../../../../providers/auth/auth.ts';
import { toggleMenu } from '../../../../store/slices/configSlice.ts';

const Header = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const isMenuOpen = useSelector((state) => state.config.isMenuOpen);

    const dispatch = useDispatch();

    const handleToggleMenu = () => dispatch(toggleMenu());

    return (
        <header className="header">
            <div className="header__title-wrap">
                <Button variant="contained" onClick={handleToggleMenu}>
                    {isMenuOpen ? '-' : '+'}
                </Button>
                <a href="/">
                    <h1 className="header__title text-white text-2xl">TASKO</h1>
                </a>
            </div>
            <div className="text-white flex items-center justify-end pe-5">
                {isAuth ? (
                    <div className="inline-flex gap-3 items-center">
                        <span>Hello, User!</span>
                        <Button variant="contained" onClick={destroyTokenInApp}>
                            Sign out
                        </Button>
                    </div>
                ) : (
                    <span>Sign in</span>
                )}
            </div>
        </header>
    );
};

export default Header;
