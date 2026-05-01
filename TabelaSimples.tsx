import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";

type Coluna = {
    titulo: string;
    render?: React.ReactNode[];
};

type TabelaSimplesProps = {
    colunas: Coluna[];
    mensagemVazia?: string;
};
export function TabelaSimples({
    colunas,
    mensagemVazia = "Nenhum registro encontrado.",
}: TabelaSimplesProps) {
    const totalLinhas = colunas[0]?.render?.length || 0;

    const linhas = Array.from({ length: totalLinhas }, (_, rowIndex) =>
        colunas.map(coluna => coluna.render?.[rowIndex])
    );

    return (
        <TableContainer
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            overflowX="auto"
        >
            <Table variant="simple" size="md">
                <Thead bg="gray.50">
                    <Tr>
                        {colunas.map((coluna, index) => (
                            <Th key={index}>{coluna.titulo}</Th>
                        ))}
                    </Tr>
                </Thead>

                <Tbody>
                    {totalLinhas === 0 ? (
                        <Tr>
                            <Td colSpan={colunas.length}>
                                <Text textAlign="center" py={4} color="gray.500">
                                    {mensagemVazia}
                                </Text>
                            </Td>
                        </Tr>
                    ) : (
                        linhas.map((linha, rowIndex) => (
                            <Tr key={rowIndex}>
                                {linha.map((celula, colIndex) => (
                                    <Td key={colIndex}>{celula}</Td>
                                ))}
                            </Tr>
                        ))
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
