import styled from "styled-components";
import logo from "../assets/fatec.png";

export default function Logo() {
  return (
    <Wrapper>
      <ImageSld src={logo} alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const ImageSld = styled.img`
  width: 150px;
  height: auto;
`;
