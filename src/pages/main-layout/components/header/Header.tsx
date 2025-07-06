import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__title-wrap">
                <a href="/">
                    <h1 className="header__title text-white text-2xl">TASKO</h1>
                </a>
            </div>
        </header>
    );
};

export default Header;
