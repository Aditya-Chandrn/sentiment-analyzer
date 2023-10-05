import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './allproducts.module.css'
import CardsP from 'components/cards/Cards_p';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentLimit, setCurrentLimit] = useState(5);
  
    const decreaseLimit = () => {
      if(currentLimit <=5
        ) return;
      setCurrentLimit(currentLimit-5
        );
    }
  
    const increaseLimit = () => {
      if(currentLimit >= products.length) return;
      setCurrentLimit(currentLimit+5
        );
    }
  
    
    const fetchAllProducts = () => {
      axios
        .get("http://localhost:5000/api/product/fetch")
        .then((res) => {
          const allProd = res.data;
          // console.log(allprod)
          allProd.forEach((prod) => {
            console.log(prod.image);
            const image = `data:img/jpeg;base64,${prod.image}`;
            prod.image = image;
          });
          setProducts(allProd);
          console.log(products);
        })
        .catch((error) =>
          console.log("Error fetching all products : ", error.message)
        );
    };
  
    useEffect(() => {
      fetchAllProducts();
    });
  
    return (
      <div>
        {products.slice(currentLimit-5
        ,currentLimit).map((product, index) => (
          <CardsP
            key={index}
            prodId={product.id}
            fname={product.prodName}
            image={product.image}
            joinDate= {product.createdAt}
            onClick = {() => selectedCard===index? setSelectedCard(null) :setSelectedCard(index)}
            active = {selectedCard===index}
            cardMin = {selectedCard===null}
          />
          
        ))}
  
      <div className={styles.footer}>
            <button className={styles.button} onClick={decreaseLimit}>&lt;</button>
            &nbsp;&nbsp;&nbsp;
            {currentLimit-4} - {(currentLimit > products.length )? products.length : currentLimit } of {products.length}
            &nbsp;&nbsp;&nbsp;
            <button className={styles.button} onClick={increaseLimit}>&gt;</button>
        </div>
      </div>
    );
  };  


export default AllProducts
