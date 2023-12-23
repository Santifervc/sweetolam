import React, { useContext, useEffect, useState } from 'react'
import Layout from './Layout/Layout';
import { db } from '../Config/Config';
import { AuthContext } from '../context/data/authContext';
import { getDocs, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';

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
      productsArray.push({
        ...doc.data(),
        id: doc.id,
      });
      console.log(doc)
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
            <div class="container">
            <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Interdum varius sit amet mattis vulputate enim nulla aliquet. Arcu dui vivamus arcu felis bibendum ut tristique. Suspendisse potenti nullam ac tortor vitae purus. Leo a diam sollicitudin tempor id eu nisl nunc mi. Pellentesque elit ullamcorper dignissim cras. Et leo duis ut diam quam nulla porttitor massa. Magna fermentum iaculis eu non diam phasellus vestibulum. Fusce ut placerat orci nulla pellentesque dignissim enim.</p></div>
              <div id="carouselExampleFade" class="carousel slide carousel-fade">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="src\images\portada.png" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                  <h5>Different themes that you can choose from!</h5>
                  <p>Go check them out</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="src\images\portada2.png" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                  <h5>Different themes that you can choose from!</h5>
                  <p>Go check them out</p>
                </div>
                </div>
                <div class="carousel-item">
                  <img src="src\images\OnePiece.png" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                  <h5>Different themes that you can choose from!</h5>
                  <p>Go check them out</p>
                </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden"></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden"></span>
              </button>
              </div>
              <div className='lorem-ipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Interdum varius sit amet mattis vulputate enim nulla aliquet. Arcu dui vivamus arcu felis bibendum ut tristique. Suspendisse potenti nullam ac tortor vitae purus. Leo a diam sollicitudin tempor id eu nisl nunc mi. Pellentesque elit ullamcorper dignissim cras. Et leo duis ut diam quam nulla porttitor massa. Magna fermentum iaculis eu non diam phasellus vestibulum. Fusce ut placerat orci nulla pellentesque dignissim enim.</div>
            </div>
            <br />
            <br />
        <body>
          <div className='craving'>
          <label htmlFor="">What are you craving?</label>
          <br />
          <select onChange={handleFilterOnChange} className='filter-product' class="form-select form-select-lg mb-3" aria-label="Large select example">
            <option value="Cake">Cake</option>
            <option value="Cupcake">Cupcake</option>
            <option value="Bread">Bread</option>
          </select>
          </div>
          <div className='card-products'>
              {products.length > 0 ?

                products.filter(product => {
                  if (filter == "") return true
                  
                  return product.category == filter
                }).map(product => {
                  console.log(product)
                  return (
                    <div class="card">
                      <div>
                      <img src={ product.url } class="card-img-top" alt="..." style={{
                        width: 300
                      }}/>
                      </div>
                      <div class="card--body">
                        <h5 class="card--title">{ product.title }</h5>
                        <p class="card--price">Price ${ product.price }</p>
                        {/* <a href={`/ProductDetails/${product.id}`} class="btn btn-primary">See More Details</a>  */}
                        <Link to={`/ProductDetails/${product.id}`} state={{ product }}><a class="btn btn-dark" >See More Details</a></Link>
                      </div>
                    </div>
              )
                })
          : ''}   
            </div>
          </body>
        </Layout>
        </>
        
  )
}

export default Home;
