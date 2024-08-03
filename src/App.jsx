import { useState } from "react";
import CardBody from "./components/CardBody";
import HeaderLogin from "./components/HeaderLogin";
import ParagraphLogin from "./components/ParagraphLogin";
import CheckboxLogin from "./components/CheckboxLogin";
import InputLogin from "./components/InputLogin";
import ButtonLogin from "./components/ButtonLogin";
import ParagraphNeedAcount from "./components/ParagraphNeedAcount";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-yellow">
      <CardBody>
        <HeaderLogin />
        <ParagraphLogin />
        <InputLogin />
        <CheckboxLogin />
        <ButtonLogin />
        <ParagraphNeedAcount />
      </CardBody>
    </div>
  );
}

export default App;
