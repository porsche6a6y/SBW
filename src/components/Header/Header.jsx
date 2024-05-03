import React, { Component , useState } from 'react';
import styles from './Header.module.css'
import img from './logo.png'
import filter from './filterpng.png'
import select from './select.png'
import { Link } from 'react-router-dom';
const Header = ({searchQuery , setSearchQuery , sort , setSort}) => {
    const categories = ["Electronics", "Men's Clothing", "Jewelery", "Women's Clothing"];
    return (
        <div className={styles.Container}>
        <div className={styles.Header}>
            <img className={styles.image} src={img}/>
            <div className={styles.inputWrapper}>
                <input value={searchQuery} onChange={event => setSearchQuery(event.target.value)}type="text" placeholder="Пошук"/>
            </div>
            <div className={styles.listWrapper}>
                <img className={styles.imageSelect} src={select} />
                    <div className={styles.listContent}>
                            <Link to="/createadvertisement">
                            <a href="">✔️ Створити оголошення</a>
                            </Link>
                            <Link to="/favorite">
                            <a href="">❤️ Улюблене</a>
                            </Link>
                            <Link to="/basket">
                            <a href="">🛒 Кошик</a>
                            </Link>
                    </div>
            </div>
            <div className={styles.listSelectorWrapper}>
                <img  className={styles.imageFilter} src={filter}/>
                    <div className={styles.listSelectorContent}>
                            <select
                            id="category"
                            value={sort}
                            onChange={(event) => setSort(event.target.value)}
                            className={styles.select}
                            >
                            <option value="">Оберіть тип товару</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                {category}
                                </option>
                            ))}
                            </select>
                    </div>
            </div>
            
            
        </div>
        </div>
    );
};

export default Header