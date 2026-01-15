type ImcClassification = {
  id: number;
  minValue: number;
  maxValue: number;
  classification: string;
  text: string;
  tips: string;
  color:
    | "lowColorI"
    | "lowColorII"
    | "lowColorIII"
    | "normalColor"
    | "overweightColor"
    | "obesityColorI"
    | "obesityColorII"
    | "obesityColorIII";
};

export const listImc: ImcClassification[] = [
  {
    id: 1,
    minValue: 0,
    maxValue: 15.9,
    classification: "Baixo peso grave",
    text: "Seu IMC indica baixo peso grave.",
    tips: "É importante buscar orientação de um profissional de saúde para uma avaliação detalhada. O acompanhamento adequado pode ajudar a identificar causas e definir estratégias seguras para melhorar seu estado nutricional.",
    color: "lowColorI",
  },
  {
    id: 2,
    minValue: 16,
    maxValue: 16.9,
    classification: "Baixo peso moderado",
    text: "Seu IMC indica baixo peso moderado.",
    tips: "Considere procurar um profissional de saúde para avaliar sua alimentação e rotina. Uma dieta equilibrada e acompanhamento adequado podem ajudar a alcançar um peso mais saudável.",
    color: "lowColorII",
  },
  {
    id: 3,
    minValue: 17,
    maxValue: 18.4,
    classification: "Baixo peso leve",
    text: "Seu IMC indica baixo peso leve.",
    tips: "Tente manter uma alimentação nutritiva e variada, com atenção ao consumo adequado de calorias e nutrientes. Caso tenha dúvidas, um nutricionista pode auxiliar.",
    color: "lowColorIII",
  },
  {
    id: 4,
    minValue: 18.5,
    maxValue: 24.9,
    classification: "Normal",
    text: "Parabéns! Seu IMC está dentro da faixa considerada saudável.",
    tips: "Mantenha hábitos saudáveis, como alimentação balanceada, prática regular de atividades físicas e bons cuidados com o sono para preservar sua qualidade de vida.",
    color: "normalColor",
  },
  {
    id: 5,
    minValue: 25,
    maxValue: 29.9,
    classification: "Sobrepeso",
    text: "Seu IMC indica sobrepeso.",
    tips: "Pequenas mudanças no estilo de vida, como melhorar a alimentação e aumentar a atividade física, podem trazer benefícios significativos para a saúde. Procure orientação profissional se necessário.",
    color: "overweightColor",
  },
  {
    id: 6,
    minValue: 30,
    maxValue: 34.9,
    classification: "Obesidade I",
    text: "Seu IMC indica obesidade grau I.",
    tips: "É recomendado buscar acompanhamento profissional para avaliar hábitos alimentares e rotina física. Mudanças graduais e supervisionadas podem contribuir para uma melhor saúde.",
    color: "obesityColorI",
  },
  {
    id: 7,
    minValue: 35,
    maxValue: 39.9,
    classification: "Obesidade II",
    text: "Seu IMC indica obesidade grau II.",
    tips: "O acompanhamento com profissionais de saúde é importante para avaliar riscos e definir estratégias adequadas. Cuidados contínuos podem ajudar a melhorar a qualidade de vida.",
    color: "obesityColorII",
  },
  {
    id: 8,
    minValue: 40,
    maxValue: Infinity,
    classification: "Obesidade III",
    text: "Seu IMC indica obesidade grau III.",
    tips: "É fundamental procurar acompanhamento médico e multiprofissional. Um plano de cuidados personalizado pode auxiliar na redução de riscos à saúde e no bem-estar geral.",
    color: "obesityColorIII",
  },
];
