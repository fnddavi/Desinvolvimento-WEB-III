import Item from "../components/Item";
import Title from "../components/Title";
import useIbge from "../hooks/useIbge";

export default function Principal() {
  const { regioes } = useIbge();
  return (
    <>
      <Title>Regiões</Title>
      {regioes.map((regiao) => (
        <Item key={regiao.id}>{regiao.nome}</Item>
      ))}
    </>
  );
}
