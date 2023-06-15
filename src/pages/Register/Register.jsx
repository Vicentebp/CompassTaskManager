import LoginLayout from "../../component/loginLayout/LoginLayout";

const Register = () => {
  return (
    <LoginLayout>
      <h1>Welcome,</h1>
      <span>Please, register to continue</span>
      <form>
        <label>Register</label>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </LoginLayout>
  );
};
export default Register;
