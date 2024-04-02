import useIbge from "../hooks/useIbge";

export default function Principal() {
  const { regioes } = useIbge();
  return (
    <>
      <p>Principal {JSON.stringify(regioes)}</p>
    </>
  );
}


