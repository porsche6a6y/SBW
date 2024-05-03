import Header from "../components/Header/Header"
import Items from "../components/Items/Items";
import Loader from "../components/Loader/Loader";
import React from "react";
import styles from "../components/Items/Items.module.css"
import { useEffect , useState , useMemo } from "react";



function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchQuery , setSearchQuery] = useState('')
  const [sort , setSort] = useState('')
  const searchedItems = useMemo(() => {
    if (searchQuery.length === 0 && sort.length === 0) {
      return products
    }
    else {
      if (searchQuery.length !== 0 && sort.length !== 0) {
      const sortedProducts = products.filter(item => item.category.toLowerCase() === sort.toLowerCase())
      return sortedProducts.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
      }
      if (searchQuery.length !== 0 ) {
        return products.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
      }
      if (sort.length !== 0) {
        return products.filter(item => item.category.toLowerCase() === sort.toLowerCase())
      }
    }
  } , [searchQuery , products ,sort])
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
  
return (
  <div>
    {isLoading 
    ? <Loader/>
    :
    (<div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} sort={sort} setSort={setSort}/>
      <div className={styles.productList}>
      {searchedItems.length
      ?  searchedItems.map((obj) => {
        return (<Items name={obj.title} id={obj.id} img={obj.image} price={obj.price}/>)
      })
      :  <h2 style={{textAlign: 'center'}}>Товарів не знайдено!</h2>}
     
      </div>
    </div>)
  }
  </div>
)    
}

export default Main;
