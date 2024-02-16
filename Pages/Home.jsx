import React from 'react'
import hero from './hero4.png'
function Home() {
  const myStyle = {
    backgroundImage: "url('https://aditya955569.github.io/MirrorBuy/images/hero4.png')",
    height: "100vh",
    width: "100",
    backgroundSize: "cover",
    backgroundPosition: "top 25% right 0",
    padding: "0 80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flexstart",
    justifyContent: "center",
  };
  return (
    <>
      <div style={myStyle}>
        {/* <div className='text-red-800 text-5xl'>Product Catalog</div>
      <div>
        <button className='bg-blue-500 text-white'
        onClick={()=>{
          window.open('/login','blank');
        }} >
          Login</button>
        <button className='ml-5 bg-blue-500 text-white'
        onClick={()=>{
          window.open('/signup','blank');
        }} >Signup</button>
      </div> */}
        <div className='text-3xl font-bold'>Trade-in-offer</div>
        <div className='text-4xl font-semibold pt-2'>Super value deals</div>
        <div className='text-5xl font-bold py-2 text-teal-600'>On all products</div>
        <div className='text-xl'>Save more with coupons & up to 70% off! </div>
        <div><button className='bg-orange-200 my-4 text-xl py-2 px-2 mx-2 text-teal-600 rounded-md rou'>Shop Now</button></div>
      </div>
    </>
  )
}

export default Home