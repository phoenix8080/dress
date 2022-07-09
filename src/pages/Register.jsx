import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Sans';
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  direction: rtl;
  font-family: 'Sans';
  ${mobile({ width: "75%" })}

 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-family: 'Sans';

`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Sans';

`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-family: 'Sans';

`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  font-family: 'Sans';

  
`;

const Button = styled.button`

  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-family: 'Sans';

`;


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>ساخت اکانت جدید</Title>
                <Form>
                    <Input placeholder="نام" />
                    <Input placeholder="نام خانوادگی " />
                    <Input placeholder="ایمیل" />
                    <Input placeholder="نام کاربری " />
                    <Input placeholder="رمز ورود" />
                    <Input placeholder="تایید رمز ورود" />
                    <Agreement>
                    با ایجاد یک حساب کاربری، با پردازش اطلاعات شخصی خود موافقت می کنم
                   
                    </Agreement>
                    <Button>ایجاد</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
