import styled from "styled-components";

function Article() {
    return (
        <StyledArticle>
            <StyledSpan />
            <StyledTextArea />
        </StyledArticle>
    );
}

export default Article;

const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
`;

const StyledSpan = styled.span`
    color: rgb(128, 128, 128);
    font-size: 10px;
    margin: 0px auto 24px;
`;

const StyledTextArea = styled.textarea`
    all: unset;
    flex-grow: 1;
    font-size: 15px;
    line-height: 1.66;
`;
