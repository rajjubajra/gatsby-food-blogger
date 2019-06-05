/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navigation from '../components/Globale/navigation';
import Footer from '../components/Globale/footer';
import "./bootstrap.min.css";
import "./layout.css"

const Layout = ({ children }) => (
    <div className="container-fluid">
      <div className="canvas">
          <div className="row">

            <Navigation />  
        </div>
        <div className="row">
          {children}
        </div>
        
      </div>
      <div className="row">
          <Footer />
      </div>

    </div> 
    
  
 
       
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
