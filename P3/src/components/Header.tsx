import { ReactNode } from "react";
import styled from "styled-components";

export default function Header({ children }: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

interface Props {
  children: ReactNode;
}
