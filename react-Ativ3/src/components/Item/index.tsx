import styled from "styled-components";


export default function Item({children}:any){
    return <Sld>{children}</Sld>;
}
const Sld = styled.div`
    display: flex;
    cursor: pointer;
    margin: 5px 0;

    &:hover {
        color: orange;
    }
`;	