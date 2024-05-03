import React, { Component , useEffect , useState } from 'react';
import styles from './Cart.module.css'
import { localStorageUtil } from '../../utilities/localStorage';
import Loader from '../Loader/Loader';
const Cart = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
            setIsLoading(false); 
          } catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false);
          }
        };
        setTimeout(fetchProducts , 1000)
      }, []);
    let sum = 0
    const productsStore = localStorageUtil.getProducts()
    
    if (isLoading) {
        return <Loader/>
    }
    else 
    {if (JSON.stringify(productsStore) !== '[]' ) {
    return (
        <div className={styles.container}>
        <h1>Корзина</h1>
        <table className={styles.cart}>
            <thead>
                <tr>
                    <th>Назва товару</th>
                    <th>Ціна</th>
                    <th>Кількість</th>
                    <th>Сумма</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product) => {
        if (productsStore.indexOf(product.title) !== -1) {
            sum += product.price
            return (
                <tr>
                <td>{product.title}</td>
                <td>{product.price}$</td>
                <td>1</td>
                <td>{product.price}$</td>
            </tr>
            )
                
            }
        })
        }
        </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3"><strong>Загальна сумма</strong></td>
                    <td>{sum}$</td>
                </tr>
            </tfoot>
        </table>
        <a href="#" className={styles.checkoutBtn}>Оформити замовлення</a>
    </div>
    );
    }
    else {
        return (
            <div className={styles.container}>
            <h1>Корзина</h1>
            <table className={styles.cart}>
                <thead>
                    <tr>
                        <th>Назва товару</th>
                        <th>Ціна</th>
                        <th>Кількість</th>
                        <th>Сумма</th>
                    </tr>
                </thead>
                <tbody>
                <h3>На жаль,кошик пустий..</h3>
                </tbody>
                </table>
                </div>
            ) 
    }    }
            };

export default Cart;