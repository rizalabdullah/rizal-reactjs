import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Link } from 'react-router-dom';

const Home = () => {
    const [product, setProduct] = useState([]);
  
  
    useEffect(()=>{
         getProduct();
  
    }, [] );
  
    const getProduct = async () => {
      const response = await axios.get(`http://localhost:5000/api/products`);
      setProduct(response.data.data);
      console.log(response);
    }
  

    return(
        <div>
            <div className="bg-danger header">
                <label className="pos text-white">POS</label>
                <select className="kategori" >
                        <option value="" >Kategori</option>
                </select>
                    <input id="input" type="text" placeholder="cari barang"></input>
                    <button type="submit"><i className="fa fa-fw fa-search text-info"></i></button> 
                    <i className="fa fa-fw fa-shopping-cart text-info"></i>
                    <Link to="/register" className="btn btn-danger"> bjhjhj</Link>
                    <Link to="/Form" className="btn btn-sm btn-warning">Edit</Link>
            </div>

                <div className="row" >
                
                {
                      product.map && product.map((products, i) => (
                            <div key={i}  className="col-md-4 col-sm-6 " >
                <div className="card "  >
                <img src={products.image_url} className="card-img-top" alt="..." />
                <div className="card-body"  >
                <h5 className="card-title title">{products.name} </h5> <br />
                <p className="card-text">Rp. {products.price} <br />
             <i className="fa fa-lg fa-shopping-cart text-success"></i>  </p>

                </div>
                </div>
                </div>
                            
                        )  
                        )
                        
                }
                    

                </div>
           
        </div>
    )
}

export default Home;