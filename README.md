# Tabela-Simples
Componente de tabela genérico e reutilizável para React + Chakra UI, com renderização dinâmica por colunas, suporte a conteúdo customizado (texto, botões, badges, componentes React) e foco em simplicidade de uso e reaproveitamento entre projetos.


A proposta do `TabelaSimples` é fornecer uma forma prática de renderizar tabelas dinâmicas mantendo uma API simples, flexível e reutilizável entre diferentes projetos.

## Objetivo

Esse componente foi criado para abstrair a construção de tabelas em projetos React, permitindo:

- Reutilização entre projetos
- Estrutura simples baseada em colunas
- Renderização dinâmica de conteúdo
- Suporte a qualquer tipo de elemento React
- Fácil manutenção e expansão

---

## Funcionalidades

- Estrutura baseada em colunas
- Geração automática de linhas
- Suporte a:
  - texto
  - números
  - botões
  - badges
  - ícones
  - componentes customizados
- Mensagem de estado vazio
- Tipagem genérica com TypeScript
- Integração com Chakra UI

---

##Exemplo de uso

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
