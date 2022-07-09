import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";


const Container = styled.div`
font-family:Sans;`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
  
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  font-family:Sans;
  
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-family:Sans;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  font-family:Sans;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
font-family:Sans;
${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-family:Sans;
  ${mobile({ flexDirection: "column" })}

 
`;

const Info = styled.div`
  flex: 3;
  font-family:Sans;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
 
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  font-family:Sans;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`font-family:Sans;`;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-family:Sans;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family:Sans;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
 
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  font-family:Sans;
  ${mobile({ marginBottom: "20px" })}
  
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  font-family:Sans;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  font-family:Sans;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  font-family:Sans;
`;

const SummaryItemText = styled.span`font-family:Sans;`;

const SummaryItemPrice = styled.span`font-family:Sans;`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-family:Sans;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>سبد خرید</Title>
        <Top>
          <TopButton>برکشت به خرید</TopButton>
          <TopTexts>
            <TopText>سبد خرید(2)</TopText>
            <TopText>مورد علاقه (0)</TopText>
          </TopTexts>
          <TopButton type="filled">پرداخت</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>محصول:</b> هودی prada
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>سایز:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>600 </ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>محصول:</b>  T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>سایز:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice> 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>جمع سفارشات</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>جمع</SummaryItemText>
              <SummaryItemPrice> 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>هزینه باربری</SummaryItemText>
              <SummaryItemPrice> 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>تخفیف</SummaryItemText>
              <SummaryItemPrice> -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>جمع کل</SummaryItemText>
              <SummaryItemPrice> 80</SummaryItemPrice>
            </SummaryItem>
            <Button>پرداخت</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;