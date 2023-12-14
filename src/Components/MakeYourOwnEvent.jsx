import React from 'react'
import Layout from './Layout/Layout'

export const MakeYourOwnEvent = () => {


  return (
    <Layout>
        <div className='myo-title'>
            <h3>Tell us what you need...</h3>
            <h1>Start Baking</h1>
            <h3>Plan your event ahead of time!</h3>
        </div>
        <div className='choose-event'>
        <select class="form-select form-select-lg mb-3" aria-label="Large select example">
            <option selected>Choose your Event</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Christmas">Christmas</option>
            <option value="New Years">New Years</option>
        </select>
        </div>
    </Layout>
  )
}

export default MakeYourOwnEvent;