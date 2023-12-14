import React, { useContext, useEffect, useState } from 'react'
import Layout from './Layout/Layout';
//import { db } from '../Config/Config';
import { AuthContext } from '../context/data/authContext';
import { getDocs, collection } from 'firebase/firestore';

export const Home = () => {
  const [filter, setFilter] = useState("")
  const [products, setProducts] = useState([]);
  const a = useContext(AuthContext);
  console.log(a);

  const getProducts = async () =>{
    const querySnapshot = await getDocs(collection(db,'Products'))
    const productsArray = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      productsArray.push(doc.data());
      console.log(doc.data())
  });
  console.log(querySnapshot)
  console.log(productsArray)
  setProducts(productsArray)
  }

  useEffect(() =>{
    getProducts()
  },[])

  const handleFilterOnChange = (e) => {
    console.log(e.target.value)
    setFilter(e.target.value)
  }

  console.log(products)

  return (
    <>
      <Layout>
      <select onChange={handleFilterOnChange} class="form-select form-select-lg mb-3" aria-label="Large select example">
          <option selected>What are you craving</option>
          <option value="Cake">Cake</option>
          <option value="Cupcake">Cupcake</option>
          <option value="Bread">Bread</option>
        </select>
      <div className='content'>
        {products.length > 0 ?

          products.filter(product => {
            if (filter == "") return true
            
            return product.category == filter
          }).map(product => (
            <div className='container-fluid' style={{
              backgroundColor: 'lightgrey',
              border: '2px solid black',
              borderRadius: 10,
              maxWidth: 500,
              minWidth: 300,
              padding: 10,
              margin: 10
            }}>
              <img src={ product.url } height={200}/>
              <h1 className='text-center'>{ product.title }</h1>
              <p>price: ${product.price}</p>
              <div className='products-box'>
              </div>
            </div>
          ))

: ''}
        
      </div>
    </Layout>
    </>
  )
}

export default Home;
