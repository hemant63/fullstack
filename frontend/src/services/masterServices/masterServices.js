import { getRequest } from "../axios";

class masterServices {
    getProducts = async()=>{
        return await getRequest('/products');
    }
}
const instance = new masterServices();
export default instance;