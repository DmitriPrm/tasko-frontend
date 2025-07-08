import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { logout } from '../../../../store/slices/authSlice.ts';

const Header = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="header__title-wrap">
                <a href="/">
                    <h1 className="header__title text-white text-2xl">TASKO</h1>
                </a>
            </div>
            <div className="text-white flex items-center justify-end pe-5">
                {isAuth ? (
                    <div className="inline-flex gap-3 items-center">
                        <span>Hello, User!</span>
                        <Button variant="contained" onClick={() => dispatch(logout())}>
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
