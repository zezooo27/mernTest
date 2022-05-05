import styled from "styled-components";
import {Menu, Search, ShoppingCartOutlined} from "@mui/icons-material";
import {Badge} from "@mui/material";
import {useSelector} from "react-redux";

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
  display: flex;
  padding: 10px 60px;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
  
`
const Language = styled.span`
   font-size: 14px;
   cursor: pointer;
 
`

const SearchContainer = styled.div`
    border: 0.5px solid lightblue;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
  
`
const  Input = styled.input`
    border: none;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Center = styled.div`
   flex: 1;
   text-align: center;
`
const Right = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left: 20px;

`

const Navbar = () => {
    const quantity = useSelector((state)=>state.cart.quantity);
    console.log(quantity);
   return (
       <>
       <Container>
          <Wrapper>
              <Left>
                  <Language>EN</Language>
                  <SearchContainer>
                      <Input/>
                      <Search  style={{color:'gray' , fontSize:'16px'}}  />
                  </SearchContainer>
              </Left>
              <Center>
                  <Logo>LIZA.</Logo>
              </Center>
              <Right>
                  <MenuItem>REGISTER</MenuItem>
                  <MenuItem>SIGN IN</MenuItem>
                  <MenuItem>
                      <Badge badgeContent={quantity} color="primary">
                          <ShoppingCartOutlined color="action" />
                      </Badge>
                  </MenuItem>
              </Right>
          </Wrapper>
       </Container>
       </>
   )
};

export default Navbar;