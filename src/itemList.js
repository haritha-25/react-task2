import { useState } from "react";

const items=[
  {
    type:"Fancy Item",
    rating: null,
    price: "$40.00 - $80.00",
  },
  {
    type:"Special Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "18.00",
  },
  {
    type:"Sale Item",
    rating: null,
    price: "25.00",
  },
  {
    type:"Popular Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "40.00",
  },
  {
    type:"Sale Item",
    rating: null,
    price: "25.00",
  },
  {
    type:"Fancy Product",
    rating: null,
    price: "$120.00 - $280.00",
  },
  {
    type:"Special Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "18.00",
  },
  {
    type:"Popular Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "40.00",
  }
];

export function ItemsList({ setCartCount, cartCount}) {

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {
          items.map((item)=>(
            <ItemCard item={item} setCartCount={setCartCount} cartCount={cartCount}/>
          ))
        }
        </div>
      </div>
    </section>
  );

}


function ItemCard({setCartCount,cartCount,item}){

  const [buttonValue, setButtonValue] = useState('Add to Cart');

  return(
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src="https://th.bing.com/th/id/OIP.LF5Yo3BvCZyz3HIKIz-EowHaLI?pid=ImgDet&rs=1"  alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{item.type}</h5>
              <div className="d-flex justify-content-center small mb-2">
                {item.rating}          
              </div>
              {item.price}
            </div>
          </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
          if(buttonValue==='Add to Cart'){
            setButtonValue('Remove from Cart');
            setCartCount(cartCount+1);
          }else{
            setButtonValue('Add to Cart');
            setCartCount(cartCount-1);
          }
      }}>{buttonValue}</button></div>
    </div>
  </div>
</div>
  );
}