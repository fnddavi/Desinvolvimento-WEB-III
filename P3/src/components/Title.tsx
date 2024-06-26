import styled from "styled-components";

export default function Title({ children }: Props) {
  return (
      <TextSld>{children}</TextSld>
  );
}

const TextSld = styled.h1`
  display: flex;
  color: rgb(202, 60, 74);
  padding: 0px;
`;

interface Props {
  children: string;
}
