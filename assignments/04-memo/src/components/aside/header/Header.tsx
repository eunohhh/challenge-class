import useMemoApp from "@/hooks/useMemoApp";
import styled from "styled-components";

function Header() {
    const { selected, createMemo, deleteMemo } = useMemoApp();

    const handleAddButtonClick = () => {
        createMemo("");
    };

    const handleDeleteButtonClick = () => {
        deleteMemo(selected);
    };

    return (
        <StyledHeader>
            <StyledButton onClick={handleAddButtonClick}>
                새 메모 작성하기
            </StyledButton>
            <StyledButton onClick={handleDeleteButtonClick}>삭제</StyledButton>
        </StyledHeader>
    );
}

export default Header;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(230, 230, 230);
    padding: 12px 16px;
    position: sticky;
    top: 0px;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 10px;
`;

const StyledButton = styled.button`
    all: unset;
    font-size: 13px;
    font-weight: 500;
    background-color: rgb(255, 255, 255);
    color: rgb(128, 128, 128);
    transition: all 120ms ease 0s;
    padding: 4px 8px;

    &:hover {
        color: rgb(18, 18, 18);
        font-weight: 600;
        cursor: pointer;
    }
`;
