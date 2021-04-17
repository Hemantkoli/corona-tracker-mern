import React from 'react'
import './home.css'


function Home() {
      
    return (
        <div className="home_page">
            <h2>Hello everyone!</h2>
            <h3>This site is currently under construction.</h3>
            <h3>Features Completed</h3>
            <p>
                1. Completed Authentication module with features like forgot password, reset
                   password, login with Google and login with Facebook.<br/>
                2. Completed module for seperate admin panel and user panel.<br/>
                3. In the admin panel admin can remove user and update user permissions.<br/>
                4. In the user panel user can update his or her data.<br/>
            </p>
            <h3>Features Remaining</h3>
            <p>
                1. Create UI for displaying covid data.<br/>
                2. Creating endpoints for accessing covid data.<br/>
            </p>
            <h3>Tech Stack</h3>
            <p>
                1. ReactJS for UI<br/>
                2. Mongo DB Atlas for database<br/>
                3. NodeJS<br/>
            </p>
            
        </div>
    )
}

export default Home
