import styled from 'styled-components'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Info = styled.div`
  opacity:0;
  position: absolute;
  background-color: rgb(0,0,0,0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:3;
  transition: all 0.5s ease;
  cursor: pointer;
  
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display:flex;
  justify-content: center;
  align-items: center;
  position:relative;
  background-color: #f5fbfd;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;


const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    background-color: white;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s  ease;
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
   
`;

const Product = ({item}) => {
  return (
      <Container>
             <Circle />
             <Image src={item.img} />
             <Info>

                <Icon>
                     <ShoppingCartOutlined />
                </Icon>

                 <Icon>
                     <Link to={`/product/${item._id}`}>
                         <SearchOutlined />
                     </Link>
                </Icon>

                    <Icon>
                     <FavoriteBorderOutlined />
                </Icon>


             </Info>
      </Container>
  )
}

export default Product;