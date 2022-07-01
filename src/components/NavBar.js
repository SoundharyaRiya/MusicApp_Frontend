
import React from 'react'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import "../App.css";

function NavBar() {

        return (
            <div className='NavBar'> 
                <div className='leftSide'>
                    <div className='links'>
                    <a href="/">
                        <img src="https://fontmeme.com/permalink/220701/a522d2fd034906ba2bd3e056e28476d2.png"></img>
                        </a>
                    </div>
                    <div className='navbar-right'>
                        <Link to={'login'} className="btn btn-outline-warning waves-effect"><FontAwesomeIcon icon={faUserPlus} /> Login</Link>
                    </div>
                </div>
                <div className='rightSide'>
                    <input type="text"placeholder='Search... Songs...' />
                    <button>Search</button>
                </div>

            </div>


        )
    }

export default NavBar
