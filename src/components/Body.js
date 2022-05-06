import React from 'react'
import {Sum,Mul,Add,Sub} from './Arithmaticopp'
let vara = +prompt("A");
let varb = +prompt("B");

function Body() {
  return (
    <>
    
    <h1>Sum is {Sum(vara,varb)}</h1>
    <h1>Mul is {Mul(vara,varb)}</h1>
    <h1>Add is {Add(vara,varb)}</h1>
    <h1>Sub is {Sub(vara,varb)}</h1>
    </>
  )
}

export default Body
