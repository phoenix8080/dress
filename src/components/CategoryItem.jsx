import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  min-width: 330px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

  
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Sans';
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    font-family: 'Sans';
`;

const Button = styled.button`
font-family: 'Sans';
align-items: center;
background-color: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: .25rem;
box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
box-sizing: border-box;
color: rgba(0, 0, 0, 0.85);
cursor: pointer;
display: inline-flex;

font-size: 16px;
font-weight: 500;
justify-content: center;
line-height: 1.25;
margin: 0;
min-height: 3rem;
padding: calc(.875rem - 1px) calc(1.5rem - 1px);
position: relative;
text-decoration: none;
transition: all 250ms;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
vertical-align: baseline;
width: auto;
:hover,
button:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}
:hover {
  transform: translateY(-1px);}

  :active {
    background-color: #F0F0F1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
    
    
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button >مشاهده همه</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;





