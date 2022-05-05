import {useState , useEffect} from "react";
import styled from "styled-components";
import {popularProducts} from '../data';
import Product from './Product';
import axios from "axios";

const Container = styled.div`
   padding: 20px;
   display: flex;
   flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Products = ({cat , filters , sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async ()=> {
            try {
                const res =
                cat ?   await axios.get(`http://localhost:5000/api/products?category=${cat}`) :
                        await axios.get(`http://localhost:5000/api/products`);

                setProducts(res.data);
            }catch (e){
               console.log(e);
            }
        }
        getProducts();
    },[cat]);

    useEffect(() => {
        cat &&
        setFilteredProducts(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        );
    }, [products, cat, filters]);



    useEffect(()=>{
      cat &&  setFilteredProducts(
          products.filter((item)=>
             Object.entries(filters).every(([key, value])=>
                   item[key].includes(value)
            )
        ))
    },[products , filters , cat ]);

    useEffect(()=>{
        if(sort === 'newest'){
            setFilteredProducts((prev)=>
                [...prev].sort(
                    (a , b)=>a.createdAt - b.createdAt)
            )
        }else if(sort === 'asc'){
            setFilteredProducts((prev)=>
                [...prev].sort((a , b )=> a.price - b.price)
            )
        }else {
                setFilteredProducts((prev)=>[...prev].sort((a , b )=> b.price - a.price  ))

        }

    },[sort])

    return (
      <Container>

          { cat ? filteredProducts.map(item => {
             return <Product item={item} key={item.id} />
          }) :  products.map(item => {
              return <Product item={item} key={item.id} />
          })

          }
      </Container>
  )
}

export default Products