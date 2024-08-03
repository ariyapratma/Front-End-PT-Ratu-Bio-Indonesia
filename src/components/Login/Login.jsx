import { useEffect } from "react";
import CardBody from "../CardBody/CardBody";
import HeaderLogin from "./HeaderLogin";
import ParagraphLogin from "./ParagraphLogin";
import CheckboxLogin from "./CheckboxLogin";
import InputLogin from "./InputLogin";
import ButtonLogin from "./ButtonLogin";
import ParagraphNeedAcount from "./ParagraphNeedAcount";

function Login() {
  useEffect(() => {
    document.title = "Login | PT Ratu Bio Indonesia";
  }, []);

  return (
    <CardBody>
      <HeaderLogin />
      <ParagraphLogin />
      <InputLogin />
      <CheckboxLogin />
      <ButtonLogin />
      <ParagraphNeedAcount />
    </CardBody>
  );
}

export default Login;
