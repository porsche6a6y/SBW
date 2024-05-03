import React, { useState } from 'react';
import styles from './CreateProductPage.module.css';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
const CreateProductPage = () => {
 
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [isLoading , setIsLoading] = useState(false)
  const navigate = useNavigate()
  const categories = ["Electronics", "Men's Clothing", "Jewelery", "Women's Clothing"];

  const handleSubmit = async (event) => {
    event.preventDefault();
    await setIsLoading(true)
    setTimeout(() => {
    fetch('https://fakestoreapi.com/products', {
            method:"POST",
            body:JSON.stringify(
                {
                    title: title,
                    price:price,
                    description: description,
                    image: image,
                    category: category
                }
            )
        })
        .then(res=>res.json())
        .then(
        json=> {console.log(json);
        setIsLoading(false);
        navigate(`/catalog`)
        })}  , 1000)
    setTitle('');
    setPrice('');
    setDescription('');
    setImage('');
    setCategory('');
  };

  return (
    <div>
    {isLoading
    ? <Loader/>
    :  (<div className={styles.container}>
    <h2 className={styles.title}>Створення оголошення</h2>
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.label}>Назва товару:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="price" className={styles.label}>Ціна:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>Опис:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className={styles.textarea}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="image" className={styles.label}>Зображення:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="category" className={styles.label}>Категорія товару:</label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className={styles.select}
        >
          <option value="">Оберіть категорію</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className={styles.button} >Створити оголошення</button>
    </form>
  </div>)
}
</div>
  )
};

export default CreateProductPage;