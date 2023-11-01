import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './allproducts.module.css'
import CardsP from 'components/cards/Cards_p';
import { calculateProdPerformance } from 'utils/graphData';

const AllProducts = ({ setGraphData }) => {
	const [products, setProducts] = useState([]);
	const [selectedCard, setSelectedCard] = useState(null);
	const [currentLimit, setCurrentLimit] = useState(5);

	const decreaseLimit = () => {
		if (currentLimit <= 5
		) return;
		setCurrentLimit(currentLimit - 5
		);
	}

	const handleClick = (prodId, performance, index) => {
		selectedCard === index ? setSelectedCard(null) : setSelectedCard(index)
		const graph = calculateProdPerformance(prodId, performance);
		setGraphData(graph)
	}

	const increaseLimit = () => {
		if (currentLimit >= products.length) return;
		setCurrentLimit(currentLimit + 5
		);
	}


	const fetchAllProducts = () => {
		axios
			.get("http://localhost:5000/api/product/fetch")
			.then((res) => {
				const allProd = res.data;
				allProd.forEach((prod) => {
					const image = `data:img/jpeg;base64,${prod.image}`;
					prod.image = image;
				});
				setProducts(allProd);
			})
			.catch((error) =>
				console.log("Error fetching all products : ", error.message)
			);
	};

	useEffect(() => {
		fetchAllProducts();
	}, []);

	return (
		<div>
			{products.slice(currentLimit - 5
				, currentLimit).map((product, index) => (
					<CardsP
						key={index}
						prodId={product.prodId}
						prodName={product.prodName}
						image={product.image}
						createdAt={product.createdAt}
            			onClick={() => handleClick(product.prodId, product.performance, index)}
						active={selectedCard === index}
						cardMin={selectedCard === null}
					/>

				))}

			<div className={styles.footer}>
				<button className={styles.button} onClick={decreaseLimit}>&lt;</button>
				&nbsp;&nbsp;&nbsp;
				{currentLimit - 4} - {(currentLimit > products.length) ? products.length : currentLimit} of {products.length}
				&nbsp;&nbsp;&nbsp;
				<button className={styles.button} onClick={increaseLimit}>&gt;</button>
			</div>
		</div>
	);
};


export default AllProducts
