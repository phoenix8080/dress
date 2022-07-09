import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";



const Container = styled.div`

`
const Wrapper = styled.div`
display:flex;
padding:50px;
${mobile({ padding: "10px", flexDirection:"column" })}

`
const ImgContainer = styled.div`
flex:1;

`

const Image = styled.img`
width: 100%;
height:90vh;
object-fit:cover;
${mobile({ height: "40vh" })}

`

const InfoContainer = styled.div`
flex :1;
padding-left:50px;
padding-Right:50px;
direction : rtl;
font-family: 'Sans';
${mobile({ padding: "10px" })}

`
const Desc = styled.p`
margin-top:15px;
margin-bottom:15px;
line-height: 1.6;
}


`
const Price = styled.span`
font-weight: 100;
font-size: 40px;


`

const Title = styled.h1`
font-weight:200;`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`

font-family: 'Sans';

  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
const Product = () => {
    return (
        <Container>
            <Navbar/>
            
            <Wrapper>
                <ImgContainer>
                <Image src="https://www.prada.com/content/dam/pradanux_products/S/SGB/SGB965/1Z8WF0002/SGB965_1Z8W_F0002_S_221_SLF.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>هودی prada</Title>
                    <Desc>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

                    </Desc>
                    <Price>800 هزارتومن </Price>
                    <FilterContainer>
            <Filter>
              <FilterTitle>رنگ</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>سایز</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>اضافه به سبد خرید</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
            <Newsletter/>
            <Footer/>

            
        </Container>
    )
}

export default Product
