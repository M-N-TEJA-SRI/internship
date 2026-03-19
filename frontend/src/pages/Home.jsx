import { useEffect, useState } from "react"
import axios from "axios"

export default function Home(){
  const [products,setProducts]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/api/products")
    .then(res=>setProducts(res.data))
  },[])

  return(
    <div className="grid grid-cols-4 gap-4 p-4">
      {products.map(p=>(
        <div key={p._id} className="shadow p-3">
          <img src={p.image}/>
          <h2>{p.name}</h2>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  )
}
