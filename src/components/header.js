import React from 'react';
import '../stylesheets/header.css'
import image from '../images/search-clipart.png'

export default function Header(){
  return (
    <header>
      <img src={image} alt='magnifying glass logo'/>
      <h1>Word Search Generator</h1>
    </header>
  )
}