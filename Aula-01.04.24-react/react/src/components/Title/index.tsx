import styled from "styled-components";

export default function Title({ children }: any) {
  return <Sld>{children}</Sld>;
}

const Sld = styled.h4`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

`;
