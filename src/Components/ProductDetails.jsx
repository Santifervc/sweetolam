import React, { useEffect } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import { db } from '../Config/Config';
import Layout from './Layout/Layout';
import { getDocs, collection } from 'firebase/firestore';

export const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product;

  console.log(product)


  return (
    <Layout>
      <body className='productDetails'>
          <div className='productDetails--description'>
          <h1>Pastry Description</h1>
          <br />
          <br />
            {product.description}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat orci. Pellentesque habitant morbi tristique senectus et. Iaculis urna id volutpat lacus. Est ultricies integer quis auctor. Egestas diam in arcu cursus euismod quis viverra nibh cras. Suspendisse sed nisi lacus sed viverra tellus. Elementum eu facilisis sed odio morbi. Aliquam sem et tortor consequat id porta. Ultricies integer quis auctor elit sed. Ut etiam sit amet nisl purus in. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Erat nam at lectus urna duis convallis convallis tellus. Eleifend donec pretium vulputate sapien nec. Arcu cursus euismod quis viverra nibh cras. Consequat ac felis donec et odio pellentesque diam. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Leo a diam sollicitudin tempor id eu nisl nunc mi. Aliquet enim tortor at auctor urna nunc id. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Fames ac turpis egestas integer eget aliquet. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Accumsan sit amet nulla facilisi morbi tempus iaculis. Accumsan lacus vel facilisis volutpat est. Tortor dignissim convallis aenean et tortor at risus viverra. Vitae suscipit tellus mauris a diam maecenas sed. Tristique senectus et netus et malesuada fames ac turpis egestas.
          </div>
          <div>
            <img src={product.url} alt="" />
          </div>
            <div>
            <h2>Name</h2>{product.title}
            <br />
            <br />
            <br />
            <h2>Price</h2>
            Price ${product.price}
            <br />
            <br />
            <br />
            <h2>Category</h2>
            {product.category}
            </div>
      </body>
    </Layout>
  );
};

export default ProductDetails;