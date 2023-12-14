import React from 'react'
import Layout from './Layout/Layout';


export const About = () => {
  return (
    <Layout>
      <div className='founder-profile'>
        <div className='founder-photo'>
          <img src="src\images\Andlea.png" class="img-thumbnail" alt=""/>
        </div>
        <div className='founder-description'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='founder-photo'>
          <img src="src\images\Otra de perfil.png" class="img-thumbnail" alt=""/>
        </div>
      </div>
    </Layout>
  )

}

export default About;