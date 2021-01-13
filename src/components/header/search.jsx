import React, {useRef} from 'react';
import logo from '../../public/images/logo.png';
import styles from './header.module.css';

const HeaderSearch = ({onSearch}) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };

    const onClick = () => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if(event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <img className={styles.logo_img} src={logo} alt="youtube"/>
            </h1>
            <input ref={inputRef} type="search" className={styles.search} onKeyPress={onKeyPress} />
            <button className={styles.btn_search} type='submit' onClick={onClick}>검색</button>
        </header>
    );
};

export default HeaderSearch;
