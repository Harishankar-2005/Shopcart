import Headtop from './components/Headtop';
import Headbottom from './components/Headbottom';
import Card from './components/Card';
import Changepage from './components/ChangePage';
import Menu from './components/Menu';
import headphone from './assets/headphone.jpg';
import hoodie from './assets/hoodie.png'
import smartwatch from './assets/smartwatch.png'
import sneakers from './assets/sneakers.png'
import sunglasses from './assets/sunglasses.png'
import backpack from './assets/backpack.png'
import plant from './assets/plant.png'
import lamp from './assets/lamp.png'
import mouse from './assets/mouse.png'
import jacket from './assets/jacket.png'
import wallet from './assets/wallet.png'
import bottle from './assets/bottle.png'
import './App.css'

let dataArr = [
  {
    "img": headphone,
    "name": "Headphones",
    "collection": "Electronics",
    "rating": 128,
    "price": 59.99,
    "status": "New"
  },
  {
    "img": hoodie,
    "name": "Classic Hoodie",
    "collection": "Clothing",
    "rating": 86,
    "price": 39.99,
    "status": "-29%"
   },
  {
    "img": smartwatch,
    "name": "Smart Watch",
    "collection": "Electronics",
    "rating": 64,
    "price": 129.99,
    "status": "New"
  },
  {
    "img": sneakers,
    "name": "Sport Sneakers",
    "collection": "Footwear",
    "rating": 102,
    "price": 67.99,
    "status": "-12%"
  },
  {
    "img": sunglasses,
    "name": "Polarized Sunglasses",
    "collection": "Accessories",
    "rating": 74,
    "price": 24.99,
    "status": ""
  },
  {
    "img": backpack,
    "name": "Travel Backpack",
    "collection": "Accessories",
    "rating": 53,
    "price": 45.99,
    "status": "New"
  },
  {
    "img": plant,
    "name": "Indoor Plant",
    "collection": "Home & Living",
    "rating": 36,
    "price": 18.99,
    "status": ""
  },
  {
    "img": lamp,
    "name": "Table Lamp",
    "collection": "Home & Living",
    "rating": 29,
    "price": 35.99,
    "status": "-37%"
  },
  {
    "img": mouse,
    "name": "Ergonomic Wireless Mouse",
    "collection": "Electronics",
    "rating": 40,
    "price": 49.99,
    "status": "New"
  },
  {
    "img": jacket,
    "name": "Oversized Denim Jacket",
    "collection": "Clothing",
    "rating": 4,
    "price": 54.99,
    "status": ""
  },
  {
    "img": wallet,
    "name": "RFID Blocking Leather Wallet",
    "collection": "Accessories",
     "rating": 78,
    "price": 29.99,
    "status": "-30%"
  },
  {
    "img": bottle,
    "name": "Stainless Steel Insulated Tumbler",
    "collection": "Home & Living",
    "rating": 90,
    "price": 24.95,
    "status": "New"
  }
  
]

function App() {
  return (
    <div className='body'>
    <div className='menu'>
      <Menu/>
    </div>
    <div className='page1'>
      {/* <div> */}
        <Headtop></Headtop>
        <Headbottom></Headbottom>
            <div className='card'>
        {dataArr.map((product,idx) => (
          <Card
            key={idx}
            img={product.img}
            name={product.name}
            collection={product.collection}
            rating={product.rating}
            price={product.price}
            status={product.status}
          />
        ))}
      {/* </div> */}
      <Changepage></Changepage>
    </div>
    </div>
    </div>
  )
}

export default App
