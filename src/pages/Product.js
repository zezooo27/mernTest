import axios from 'axios';
import styled from "styled-components";
import Navbar from "../componets/Navbar";
import Announcement from "../componets/Announcement";
import Newsletter from "../componets/Newsletter";
import Footer from "../componets/Footer";
import {Add, Remove} from "@mui/icons-material";
import {useEffect , useState} from "react";
import {useLocation} from "react-router-dom";
import {publicRequest} from "../requestMethods";
import {useDispatch} from "react-redux";
import {addProduct} from "../redux/cartRedux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
 flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`;


const Title = styled.h1`
   font-weight: 300;
`;

const Desc = styled.p`
   margin: 20px 0px;
`;

const Price = styled.span`
   font-size: 40px;
   font-weight: 400;
`;

const FilterContainer = styled.div`
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  width:50%;

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

const FilterColor = styled.div`
   display: flex;
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
   margin: 0px 5px;
   cursor: pointer;
   
`;

const FilterSize = styled.select`
  padding: 10px;
  margin-left: 10px ;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    border: 1px solid teal;
    border-radius:10px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`;
const Button = styled.button`
   padding: 15px;
   border: 2px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 500;
   &:hover:hover{
     background-color: #f8f4f4;
     
     
   }
`;



const Product = ()=>{
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product , setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const dispatch = useDispatch();
    useEffect(()=>{
        const getData = async ()=>{
          const res = await publicRequest.get(`products/find/${id}`);
          setProduct(res.data);
        };
        getData();
    },[id]);

    const handleQuantity = (type)=>{
        if(type === 'desc'){
         quantity > 1 &&  setQuantity(()=> ( quantity - 1 ));
        }else {
            setQuantity(()=> ( quantity + 1 ));
        }
    }
    console.log(size);
    const handleClick = ()=>{
        dispatch(addProduct({...product , quantity , color , size }))
    };

    return (
        <Container>
            <Announcement />
            <Navbar />
              <Wrapper>
                   <ImgContainer>
                       <Image src={product.img} />
                   </ImgContainer>
                  <InfoContainer>
                      <Title>{product.title}</Title>
                      <Desc>
                          {product.description}
                      </Desc>
                      <Price>$ {product.price}</Price>
                      <FilterContainer>
                      <Filter>
                          <FilterTitle>Color</FilterTitle>
                          {
                             product.color && product.color.map(c =>
                                  <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                              )
                          }
                      </Filter>

                      <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSize onChange={(e) => setSize(e.target.value)}>
                              {
                                  product.size && product.size.map(size=>
                                      <FilterSizeOption key={size}  >{size}</FilterSizeOption>
                                  )
                              }
                          </FilterSize>
                      </Filter>
                      </FilterContainer>

                      <AddContainer>
                          <AmountContainer>
                              <Remove onClick={()=>handleQuantity('desc')} />
                              <Amount>{quantity}</Amount>
                              <Add onClick={()=>handleQuantity('asc')}/>
                          </AmountContainer>
                          <Button onClick={handleClick}>Add TO CART</Button>

                      </AddContainer>

                  </InfoContainer>


              </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
};

export default Product;