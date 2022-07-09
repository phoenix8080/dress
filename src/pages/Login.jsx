import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  font-family: 'Sans';
  direction:rtl;
  ${mobile({ width: "75%" })}


`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-family: 'Sans';

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  font-family: 'Sans';

`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  font-family: 'Sans';

`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  font-family: 'Sans';

`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>ورود</Title>
        <Form>
        <Input placeholder="نام کاربری " />
        <Input placeholder="رمز ورود" />
          <Button>ورود</Button>
          <Link>رمز عبور را فراموش کرده اید؟</Link>
          <Link>ساخت اکانت جدید</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;