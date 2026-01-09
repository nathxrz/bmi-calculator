export default function ResultTableImc({
  imcValue: imc,
}: {
  imcValue: number;
}) {
  const listImc = [
    {
      minValue: 0,
      maxValue: 16.0,
      classification: "Baixo peso grave",
    },
    { minValue: 16, maxValue: 16.9, classification: "Baixo peso moderado" },
    { minValue: 17, maxValue: 18.4, classification: "Baixo peso leve" },
    { minValue: 18.5, maxValue: 24.9, classification: "Normal - eutrófico" },
    { minValue: 25, maxValue: 29.9, classification: "Sobrepeso" },
    { minValue: 30, maxValue: 34.9, classification: "Obesidade I" },
    { minValue: 35, maxValue: 39.9, classification: "Obesidade II" },
    { minValue: 40, maxValue: Infinity, classification: "Obesidade III" },
  ];

  const result = listImc.find(
    (item) => imc >= item.minValue && imc <= item.maxValue
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <table border={1}>
        <thead>
          <tr>
            <th>IMC (kg/m²)</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Menor que 16,0</td>
            <td>Baixo peso grave</td>
          </tr>
          <tr>
            <td>16,0 – 16,9</td>
            <td>Baixo peso moderado</td>
          </tr>
          <tr>
            <td>17,0 – 18,4</td>
            <td>Baixo peso leve</td>
          </tr>
          <tr>
            <td>18,5 – 24,9</td>
            <td>Peso normal (eutrófico)</td>
          </tr>
          <tr>
            <td>25,0 – 29,9</td>
            <td>Sobrepeso</td>
          </tr>
          <tr>
            <td>30,0 – 34,9</td>
            <td>Obesidade grau I</td>
          </tr>
          <tr>
            <td>35,0 – 39,9</td>
            <td>Obesidade grau II</td>
          </tr>
          <tr>
            <td>Maior ou igual a 40,0</td>
            <td>Obesidade grau III</td>
          </tr>
        </tbody>
      </table>
      <p>Seu IMC: {imc}</p>
      <p>Sua classificação:{result?.classification}</p>
    </div>
  );
}
