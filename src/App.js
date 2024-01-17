import { Container, Content, Row } from "./style";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [currentNumber, SetCurrentNumber] = useState("");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    SetCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      SetCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      SetCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleSubtractionNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      SetCurrentNumber("0");
      setOperation("-");
    } else {
      const subtraction = Number(firstNumber) - Number(currentNumber);
      SetCurrentNumber(String(subtraction));
      setOperation("");
    }
  };

  const handleMultiplicationNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      SetCurrentNumber("0");
      setOperation("*");
    } else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      SetCurrentNumber(String(multiplication));
      setOperation("");
    }
  };

  const handleDivisionNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      SetCurrentNumber("0");
      setOperation("/");
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      SetCurrentNumber(String(division));
      setOperation("");
    }
  };

  const handleRemainderNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      SetCurrentNumber("0");
      setOperation("%");
    } else {
      const percent = parseInt(firstNumber) / 100;
      const remainder = percent * parseInt(currentNumber);
      SetCurrentNumber(String(remainder));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== 0) {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubtractionNumbers();
          break;
        case "*":
          handleMultiplicationNumbers();
          break;
        case "/":
          handleDivisionNumbers();
          break;
        case "%":
          handleRemainderNumbers();
          break;
        default:
          break;
      }
    }
  };

  const handleOnClear = () => {
    SetCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"*"} onClick={handleMultiplicationNumbers} />
          <Button label={"/"} onClick={handleDivisionNumbers} />
          <Button label={"%"} onClick={handleRemainderNumbers} />
          <Button label={"C"} onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber("7")} />
          <Button label={"8"} onClick={() => handleAddNumber("8")} />
          <Button label={"9"} onClick={() => handleAddNumber("9")} />
          <Button label={"-"} onClick={handleSubtractionNumbers} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber("4")} />
          <Button label={"5"} onClick={() => handleAddNumber("5")} />
          <Button label={"6"} onClick={() => handleAddNumber("6")} />
          <Button label={"+"} onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber("1")} />
          <Button label={"2"} onClick={() => handleAddNumber("2")} />
          <Button label={"3"} onClick={() => handleAddNumber("3")} />
          <Button label={"="} onClick={handleEquals} />
        </Row>
        <Row>
          <Button label={"."} />
          <Button label={"0"} onClick={() => handleAddNumber("0")} />
          <Button label={"."} />
          <Button label={"."} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
