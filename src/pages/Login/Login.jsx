import LoginLayout from "../../component/loginLayout/LoginLayout";

const Login = () => {
  return (
    <LoginLayout>
      <h1>Welcome,</h1>
      <span>To continue browsing safely, log in to the network.</span>
      <form>
        <label>Login</label>
        <input type="text"></input>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </LoginLayout>
  );
};
export default Login;
