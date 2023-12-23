import React, { useState } from 'react'
import Layout from './Layout/Layout'

const ALL_ITEMS = [{
  name: 'Red Velvet Cupcake',
  price: 2.5,
  quantity: 0,
}, {
  name: "Hearted Muffins",
  price: 1.5,
  quantity: 0
  
},
{
  name: 'Themed Cake',
  price: 15,
  quantity: 0
  
},
{
  name: "Red Velvet Cake",
  price: 10,
  quantity: 0
  
},
{
  name: "Misterious Cake",
  price: 20,
  quantity: 0
  
}]

export const MakeYourOwnEvent = () => {
  const [cart, setCart] = useState(ALL_ITEMS)
  const [selectedItem, setSelectedItem] = useState('Cake')
  const [quantity, setQuantity] = useState(0)

  const updateCart= (event) =>{
    const item = event.target.value
    setCart(ALL_ITEMS.filter())
  }

  const updateSelectedItem = event => {
    const item = event.target.value
    setSelectedItem(item)
  }

  const addItemToCart = event => {
    const updatedCart = ALL_ITEMS.map(item => {
      if (item.name == selectedItem) {
        item.quantity = Number(quantity)
      }

      return item
    })
    setCart(updatedCart)
  }

  const deleteItem = itemToDelete => {
    const updatedCart = ALL_ITEMS.map(item => {
      if (item.name == itemToDelete) {
        item.quantity = 0
      }

      return item
    })
    setCart(updatedCart)
  }

  const updateQuantity = event => {
    const quantity = event.target.value
    setQuantity(quantity)
  }

  const getTotal = () => {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity * cart[i].price
    }
    return total
  }

  console.log(cart)

  return (
    <Layout>
        <div className='myo-title'>
            <h3>Tell us what you need...</h3>
            <h1>Start Baking</h1>
            <h3>Plan your event ahead of time!</h3>
        </div>
      <body className='cart'>
        <div className='choose-event'>
          <label htmlFor="">Choose your event</label>
          <br />
          <select class="form-select form-select-lg mb-3" aria-label="Large select example">
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Christmas">Christmas</option>
              <option value="New Years">New Years</option>
          </select>
          <br />
          <label htmlFor="">Item</label>
          <br />
          <select class="form-select form-select-lg mb-3" aria-label="Large select example" onChange={updateSelectedItem}>
            {
              ALL_ITEMS.map((item)=>{
                return (
                  <option value={item.name}>{item.name} - ${item.price}</option>
                )
              }) 
            }
          </select>
          <br />
          <label htmlFor="">Quantity</label>
          <br />
          <input placeholder='Input a Number' type="number" onChange={updateQuantity}></input>
          <br />
          <br />
          <button className='btn btn-primary' onClick={addItemToCart}>Add</button>
        </div>
        <div className='cart'>
          <div className='cart-summary'>
            {
              cart
                .filter(item => item.quantity > 0)
                .map(item => {
                  return (
                    <div>
                      <p>Item: { item.name }</p>
                      <p>Quantity: { item.quantity }</p>
                      <p></p>
                      <button className='btn btn-danger' onClick={() => deleteItem(item.name)}>Remove</button>
                    </div>
                  )
                })
            }
          </div>
        </div>   
      </body>
      <footer>
      <div className='footer'>
                        Subtotal: ${
                          getTotal()
                        }
                        <button className='btn btn-secondary'>Checkout</button>
                        <br />
                      </div>
      </footer>
    </Layout>
  )
}

export default MakeYourOwnEvent;