import styled from "styled-components";

export default function Item({ children }: any) {
  return <Sld>{children}</Sld>;
}

const Sld = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: red;
`;
