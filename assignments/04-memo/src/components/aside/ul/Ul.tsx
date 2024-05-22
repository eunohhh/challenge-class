import styled from "styled-components";

function Ul() {
    return (
        <StyledUl>
            <StyleLi>
                <StyledH6></StyledH6>
                <StyledTime></StyledTime>
            </StyleLi>
        </StyledUl>
    );
}

export default Ul;

const StyledUl = styled.ul`
    padding: 20px 12px;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    align-content: flex-start;
    row-gap: 8px;
    margin: 0px;
    overflow-x: hidden;
`;

const StyleLi = styled.li`
    height: 56px;
    border-radius: 4px;
    background-color: rgb(255, 224, 127);
    width: 100%;
    padding: 12px 24px;
    cursor: pointer;
`;

const StyledH6 = styled.h6`
    margin: 0px 0px 2px;
    font-size: 13px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
`;

const StyledTime = styled.time`
    font-size: 12px;
    color: rgb(64, 64, 64);
`;
