import useMemoApp from "@/hooks/useMemoApp";
import getTime from "@/utils/getTime";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Article() {
    const { memos, selected, updateMemo } = useMemoApp();

    const [text, setText] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);

        updateMemo(e.target.value);
    };

    useEffect(() => {
        const selectedMemo = memos.find((memo) => memo.id === selected);
        if (selectedMemo) {
            setText(selectedMemo.contents);
        }
    }, [memos, selected]);

    useEffect(() => {
        if (textAreaRef.current) textAreaRef.current.focus();
    }, []);

    return (
        <StyledArticle>
            <StyledSpan>{getTime()}</StyledSpan>
            <StyledTextArea
                ref={textAreaRef}
                onChange={handleChange}
                value={text}
            />
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
