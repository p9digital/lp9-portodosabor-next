import styled from "styled-components";

export const Colunas = styled.div`
align-items:center;
display:flex;
justify-content:space-between;

@media (max-width:900px) {
    flex-direction:column;
}
`;

export const Coluna4 = styled.div`
width:calc(100% / 3 - 1rem);

@media (max-width:900px) {
    width:100%;
}
`;

export const Coluna5 = styled.div`
width:calc(100% / 12 * 5 - 1rem);

@media (max-width:900px) {
    width:100%;
}
`;

export const Coluna6 = styled.div`
width:calc(50% - 1rem);

@media (max-width:900px) {
    width:100%;
}
`;

export const Coluna7 = styled.div`
width:calc(100% / 12 * 7 - 1rem);

@media (max-width:900px) {
    width:100%;
}
`;
