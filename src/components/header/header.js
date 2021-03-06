import './header.css';

const Header = ( props ) => {

    const { heading } = props;
   
    return (
        <header>
            <h1>{ heading }</h1>
        </header>
    );
}

export default Header;