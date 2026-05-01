import { Button } from "@chakra-ui/react";
import { TabelaSimples } from "./TabelaSimples";

export default function App() {
  return (
    <TabelaSimples
      colunas={[
        {
          titulo: "Matéria",
          render: ["Matemática", "Português"],
        },
        {
          titulo: "Horário",
          render: ["15:00", "16:00"],
        },
        {
          titulo: "Ações",
          render: [
            <Button size="sm">Editar</Button>,
            <Button size="sm">Editar</Button>,
          ],
        },
      ]}
    />
  );
}
