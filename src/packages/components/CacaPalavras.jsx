import { useState } from "react";
import verificaOcorrencias from "../funcoes";

const grade = [
  ["A", "B", "A", "C", "A", "T", "E", "A", "Z", "U", "L", "P", "E"], // 0
  ["P", "P", "L", "U", "L", "A", "O", "W", "Q", "A", "Z", "U", "S"], // 1
  ["D", "O", "T", "R", "E", "S", "K", "E", "W", "Q", "A", "Z", "U"], // 2
  ["R", "I", "O", "V", "A", "M", "P", "E", "T", "A", "D", "U", "A"], // 3
  ["A", "D", "K", "A", "L", "S", "A", "O", "D", "S", "Z", "D", "D"], // 4
  ["Z", "D", "K", "S", "Z", "S", "A", "O", "D", "A", "K", "D", "D"], // 5
  ["U", "O", "T", "S", "L", "U", "A", "O", "L", "U", "Z", "A", "P"], // 6
  ["L", "O", "T", "T", "T", "R", "Z", "L", "P", "S", "K", "D", "D"], // 7
]; //0   1    2    3    4    5    6    7    8    9     10   11  12

const style = {
  backgroundColor: "#ddd",
  width: "25px",
  margin: "2px",
  display: "inline-block",
  textAlign: "center",
};

function Coluna({ col, i = 0, j = 0, ocorr = [] }) {
  const pos = [i, j].join(",");

  const colStyle = ocorr.find((el) => el.join(",") === pos)
    ? { ...style, backgroundColor: "#ff5555" }
    : style;

  return <div style={colStyle}>{col}</div>;
}

function Linha({ li, i = 0, ocorr = [] }) {
  return (
    <div>
      {li.map((col, j) => (
        <Coluna key={j} col={col} i={i} j={j} ocorr={ocorr} />
      ))}
    </div>
  );
}

export default function CacaPalavras() {
  const [ocorr, setOcorr] = useState([]);

  return (
    <div>
      <h1>Caça-Palavras</h1>

      <input
        style={{ marginBottom: 10 }}
        onChange={(e) => {
          const _ocorr = verificaOcorrencias(
            e.target.value.toLocaleUpperCase(),
            grade
          );

          setOcorr(_ocorr);
        }}
      />

      {grade.map((li, i) => (
        <Linha key={i} li={li} i={i} ocorr={ocorr} />
      ))}
    </div>
  );
}
