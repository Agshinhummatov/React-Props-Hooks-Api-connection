import React, { useState } from 'react'
import '../../src/assets/scss/home.scss'
import Button from 'react-bootstrap/Button';
import Product from '../component/product/Product'

function Home() {
 

  const products =["Iphone","Nokia","Samsung","Xiaomi"];
  // const [num,setNum] = useState(1)

  // const increment =()=>{
  //   setNum(num+1)
  // }

  // const decrement =()=>{
  //   if(num == 1){
  //     return
  //   }
  //   setNum(num-1)
  // }


  return (
   <>
   
   
   <section>
    <div className='container'>

    <div className='row'>
      {

       products.map(function(item,i){
        return<div className='col-3'>
        <Product productName={item}/>
        </div>

       })

       
      
      }
    </div>
    {/* <h1>{num}</h1>
    <Button onClick={increment} variant="success">increment</Button>{' '}
    <Button onClick={decrement} variant="danger">deccrement</Button>{' '} */}

    </div>
 
   </section>

  
   



   </>
  )
}

export default Home