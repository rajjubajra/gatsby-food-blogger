import React, { Component } from 'react';
import {Link} from 'gatsby';

export default class navigation extends Component {
  state = {
    nav: [
      { id: 1, name: 'home', path: '/'},
      { id: 2, name: 'blog', path: '/blog' },
      { id: 3, name: 'about', path: '/about'},
    ]
  }


  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light col">
      <a class="navbar-brand text-uppercase" href="#"><h1>Food Blogger</h1></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                        {
                          this.state.nav.map( (item) => {
                            return(
                              <li className="nav-item"><Link className="nav-link text-uppercase" to={item.path} >{item.name}</Link></li>
                            )
                          })
                        }
                </ul>
            </div>         
      </nav>
      
    )
  }
}
