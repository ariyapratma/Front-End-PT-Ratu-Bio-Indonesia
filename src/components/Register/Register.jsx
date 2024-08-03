import { useEffect } from "react";
import CardBody from "../CardBody/CardBody";
import HeaderRegister from "./HeaderRegister";
import ParagraphRegister from "./ParagraphRegister";
import CheckboxRegister from "./CheckboxRegister";
import InputRegister from "./InputRegister";
import ButtonRegister from "./ButtonRegister";
import ParagraphAlreadyAcount from "./ParagraphAlreadyAcount";

function Register() {
  useEffect(() => {
    document.title = "Register | PT Ratu Bio Indonesia";
  }, []);

  return (
    <CardBody>
      <HeaderRegister />
      <ParagraphRegister />
      <InputRegister />
      <CheckboxRegister />
      <ButtonRegister />
      <ParagraphAlreadyAcount />
    </CardBody>
  );
}

export default Register;
