import React, { Component , useState , useEffect} from 'react';
import styles from './Items.module.css'
import { localStorageUtil } from '../../utilities/localStorage';
const Items = ({img , name , price ,id }) => {
    const classNameActive = ' products__button__active'
   
    const className = ' products__button'
    const productAdd = 'Додати в кошик'
    const productRemove = 'Видалити з кошика'
    const [data , setData] = useState('')
    const [favorites , setFavorites] = useState('')
    let activeText = ''
    let activeClass = ''
    let activeClassForever = ''
    const [productStore , setProductStore] = useState(localStorageUtil.getProducts());
    const [favoriteStore , setFavoriteStore] = useState(localStorageUtil.getFavorites());
    useEffect(() => {
        if (productStore) {
          setData(productStore);
        }
        if (favoriteStore) {
            setFavorites(favoriteStore);
          }
      }, [productStore , favoriteStore]);
    
    if(productStore.indexOf(name) === -1) {
        activeText = productAdd
        activeClass = styles.buyButton
        
    }
    else {
        activeClass = styles.activeButton
        activeText = productRemove
        
    }
    if(favoriteStore.indexOf(name) === -1) {
        activeClassForever = styles.favoriteButton
        
    }
    else {
        activeClassForever = styles.activeFavoriteButton
    }
    const local = () => {
        const locale = localStorageUtil.putProducts(name)
        setProductStore(localStorageUtil.getProducts());
        
        if(productStore.indexOf(name) === -1) {
            activeText = productAdd
            activeClass = className
            
        }
        else {
            activeClass = classNameActive
            activeText = productRemove
            
        }
    }
    const addFavorites = () => {
        localStorageUtil.putFavorites(name)
        setFavoriteStore(localStorageUtil.getFavorites());
        if(favoriteStore.indexOf(name) === -1) {
            activeClassForever = styles.classNameForever
            
        }
        else {
            activeClassForever = styles.classNameActiveForever
           
        }
    }
    
    return (
            <div className={styles.productCard} key={id}>
                <div className={styles.imgContainer}>
                    <img src={img} alt="Товар"/>
                </div>
                <div className={styles.productInfo}>
                <h2>{name}</h2>
                <p className={styles.price}>{price}$</p>
                <button className = {activeClass} onClick={local}>{activeText}</button>
                <button className = {activeClassForever} onClick={addFavorites}>❤️</button>
                </div>
            </div>

    );
};

export default Items