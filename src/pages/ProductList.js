import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from "../componets/Navbar";
import Announcement from "../componets/Announcement";
import Products from "../componets/Products";
import Newsletter from "../componets/Newsletter";
import Footer from "../componets/Footer";
import {useState} from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin:20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;
const Filter = styled.div`
   display: flex;
    
`;

const FilterText = styled.div`
   font-size: 20px;
   font-weight: 600;
   margin-right: 20px;
   margin-left: 20px;
`;

const Select = styled.select`
   padding: 10px;
   margin-right: 20px;
`;
const Option = styled.option``;


const ProductList = ()=>{
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [ filters , setFilters ] = useState({});
    const [sort , setSort ] = useState("newest");
    const handlerFilter = (e)=>{
        const value = e.target.value;
        setFilters({
            ...filters,
        [e.target.name] :   value
        });
    };

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>

                    <Select name='color' onChange={handlerFilter}>
                        <Option disabled >
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name='size' onChange={handlerFilter} >
                        <Option disabled >
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>

                </Filter>

                <Filter >
                    <FilterText>Sort Products:</FilterText>

                    <Select onChange={(e)=>setSort(e.target.value)}>
                        <Option value='newest'>Newest</Option>
                        <Option value='asc'>Price (asc)</Option>
                        <Option value='desc'>Price (desc)</Option>
                    </Select>

                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>

    )
};

export default ProductList;