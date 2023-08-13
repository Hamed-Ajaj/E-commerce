import { PRODUCTS } from "../products";
import Product from "C:\\Users\\UP-DATE COMPUTER\\OneDrive\\Desktop\\react projects\\ecommerce\\src\\pages\\Product.js";

const Home = () => {
    return ( 
        <div className="shop">
            <div className="shopTitle">
                <h1>My Shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map(product => <Product key={product.id} data={product} />)}
            </div>
        </div>
     );
}
 
export default Home;