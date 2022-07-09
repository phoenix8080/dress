import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
const Container = styled.div`

`


const Title = styled.h1`
  margin: 20px;
  direction: rtl;
  font-family: 'Sans';
  

`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Sans';
  direction: rtl;
`;

const Filter = styled.div`
  margin: 20px;
  font-family: 'Sans';
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  font-family: 'Sans';
  ${mobile({ marginRight: "0px" })}
  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  font-family: 'Sans';
  ${mobile({ margin: "10px 0px" })}
  
`;
const Option = styled.option``;
const ProuductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>کت شلوار</Title>
      <FilterContainer>
        <Filter>
          <FilterText>فیلتر محصولات</FilterText>
          <Select>
            <Option disabled selected>
             رنگ
            </Option>
            <Option>سفید</Option>
            <Option>مشکی</Option>
            <Option>قرمز</Option>
            <Option>آبی</Option>
            <Option>زرد</Option>
            <Option>سبز</Option>
          </Select>
          <Select>
            <Option disabled selected>
              سایز
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>ترتیب بندی</FilterText>
          <Select>
            <Option selected>جدید ترین</Option>
            <Option>قیمت (ارزان ترین)</Option>
            <Option>قیمت (گرانترین)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>



        
    )
}

export default ProuductList
