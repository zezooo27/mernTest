import styled from 'styled-components';
import {ArrowLeftOutlined, ArrowRightOutlined} from "@mui/icons-material";
import img from '../img/pexels-sora-shimazaki-5935754.jpg';
import { sliderItems } from "../data";
import {useState} from "react";

const  Container  = styled.div`
    height:100vh;
    width: 100%;
    display: flex;
    position:relative;
    overflow: hidden;
  
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius:50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:0;
  bottom:0;
  right: ${props => props.direction === 'right' && '10px'} ;
  left: ${props => props.direction === 'left' && '10px'} ;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2 ;
`
const Wrapper = styled.div`
  height:100%;
  display: flex;
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props)=> props.slideIndex * -100}vw);


`

const Slide = styled.div`
  display:flex;
  align-items: center;
  background-color: #${props => props.bg};
  width: 100vw;
  height: 100vh;
  align-items: center;


`;
const ImgContainer = styled.div`
  height:100%;
  flex: 1;
`;
const Image = styled.img`
   height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding:50px;
`;


const Title = styled.h1`
  font-size: 70px;
  font-weight: 500;
`;
const Desc = styled.p`
 margin: 50px 0px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  
`;




const Slider = () => {
    const [slideIndex , setSlideIndex]=useState(0);
    const  handleClick = (direction) => {
        if(direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }
    return <Container>
        <Arrow direction='left' onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            { sliderItems.map(item => {
               return <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image
                            src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            })
            }
        </Wrapper>
        <Arrow direction='right' onClick={()=>handleClick('right')} >
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
};

export default Slider;