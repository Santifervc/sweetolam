import React from 'react'
import { useState } from 'react';
//import { storage } from '../Config/Config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const AddProducts = () => {

    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [price, setPrice]=useState('');
    const [image, setImage]=useState(null);
    const [uploadError, setUploadError] = useState(null);
    const [category, setCategory] = useState('')

    const [imageError, setImageError]=useState('');

    const handleProductImg = (e) =>{
        const file= e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setImage(file);
        }else{
            setImage(null);
            setImageError('Please select a valid image file type')
        }
    };

    const handleUpload = async (e) => {
      e.preventDefault()
        if (!image) {
          // No file selected or invalid file type
          return;
        }

        setImageError(null);
        setUploadError(null);

        let dUrl;

        try {
            // const storageRef = storage.ref(`images/${setImage.name}`);
            // const uploadTask = storageRef.put(setImage);
            const storageRef = ref(storage, 'images/' + image.name);
            const uploadTask = await uploadBytes(storageRef, image);

            console.log(uploadTask)

            dUrl = await getDownloadURL(uploadTask.ref)

            console.log(dUrl)
      
            // uploadTask.on(
            //   'state_changed',
            //   null,
            //   (error) => {
            //     // Handle errors during the upload
            //     console.error('Upload error:', error.message);
            //     setUploadError('Error uploading the image.'); 
            //   },
            //   async () => {
            //     // Handle successful upload
            //     const downloadURL = await storageRef.getDownloadURL();
      
            //     // Now you can save the product information and the download URL to your Firestore database
            //     const productData = {
            //       title,
            //       description,
            //       price: Number(price),
            //       imageUrl: downloadURL,
            //       // other product details
            //     };
            //     console.log(productData);
      
            //     // Save product data to Firestore
            //     await fs.collection('Products').add(productData);
      
            //     // Reset form and state after successful upload
            //     // setTitle('');
            //     // setDescription('');
            //     // setPrice('')
            //     // setImage(null);
            //   }
            // );
          } catch (error) {
            console.error('Upload error:', error.message);
            setUploadError('Error uploading the image.');
          }

          try {
            // Your Firestore write operation
            // await fs.collection('Products').add(productData);
            // Add a new document with a generated id to Firestore
            const firestore = getFirestore();
            await addDoc(collection(firestore, "Products"), {
              title,
              description,
              price: Number(price),
              name: image.name,
              category: category,
              url: dUrl
            }); 
            console.log('Data successfully written to Firestore');
          } catch (error) {
            console.error('Firestore write error:', error.message);
          }
        };

  return (
    <div className='container'>
            <br></br>
            <br></br>
            <h1>Add Products</h1>
            <hr></hr>        
            <form>
                <label>Product Title</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                <br></br>
                <label>Product Description</label>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}></input>
                <br></br>
                <label>Product Price</label>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}></input>
                <br></br>
                <label>Category</label>
                <input type="text" onChange={(e)=>setCategory(e.target.value)} value={category}></input>
                <br></br>
                <label>Upload Product Image</label>
                <input type="file" id="image" accept="image/*" onChange={handleProductImg}></input>
                <br></br>  
                {imageError&&<>
                <div className='error-msg'>{imageError}</div>      
                <br></br>          
                </>}        
                <div>
                    <button onClick={handleUpload} type="submit" className='btn btn-success btn-md'>
                        SUBMIT
                        
                    </button>
                    {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}
                </div>
            </form>
        </div>
  )
}

export default AddProducts;