import { Phone,Room,  MailOutline,Instagram, Pinterest, Telegram, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive";


const Container =styled.div`

display: flex;
font-family:'Sans';
${mobile({ flexDirection: "column" })}



`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
direction: rtl;

`
const Center = styled.div`
flex:1;
padding: 20px;
text-align: right; 
direction: rtl;
${mobile({ display: "none" })}

`
const Title = styled.h3`
  margin-bottom: 30px;
  font-family:'Sans';
  

`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Sans';
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-family: 'Sans';
`;
const Right = styled.div`
padding: 20px;
flex:1;
text-align: right;
${mobile({ backgroundColor: "#fff8f8" })}

`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  direction: rtl;
  font-family:'Sans';
  
`;

const Payment = styled.img`
    width: 50%;
`;
const Logo = styled.h1`
direction: ltr;


`
const Desc = styled.p`
margin: 20px 0px;
text-align: right; 
font-family: 'Sans';

`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color:white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor:pointer;x
`;




const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>PHOENIX.</Logo>
                <Desc>
                فروشگاه های اینترنتی با پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض ورود به سایت با دنیایی از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Telegram />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon  color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
            <Title>دسته بندی</Title>
        <List>
          <ListItem>خانه</ListItem>
          <ListItem>سبد خرید</ListItem>
          <ListItem>مردانه</ListItem>
          <ListItem>زنانه</ListItem>
          <ListItem>اکسسوری</ListItem>
          <ListItem>حساب من</ListItem>
          <ListItem>پیگیری سفارشات</ListItem>
          <ListItem>مورد علاقه ها </ListItem>
          <ListItem>قوانینX</ListItem>
        </List>
            </Center>
            <Right>
            <Title>ارتباط با ما</Title>
            <ContactItem>
          <Room style={{marginRight:"10px"}}/>تهران شهرک گلستان 
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 09196275634
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> phoenix208080@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
