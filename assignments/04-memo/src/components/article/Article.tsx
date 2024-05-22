import { AppDispatch, RootState } from "@/redux/store";
import { Memo, UPDATE } from "@/types/d";
import formattedDate from "@/utils/getTime";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

function Article() {
    const dispatch = useDispatch<AppDispatch>();
    const memos = useSelector((state: RootState) => state.memo);
    const [selectedMemoId, setSelectedMemoId] = useState<string | null>(null);

    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);

        if (selectedMemoId) {
            const updatedMemo: Memo = {
                id: selectedMemoId,
                contents: e.target.value,
                time: formattedDate,
            };

            dispatch({
                type: UPDATE,
                payload: updatedMemo,
            });
        }
    };

    useEffect(() => {
        if (memos.length > 0 && selectedMemoId === null) {
            setSelectedMemoId(memos[0].id);
            setText(memos[0].contents);
        }
    }, [memos, selectedMemoId]);

    return (
        <StyledArticle>
            <StyledSpan />
            <StyledTextArea onChange={handleChange} value={text} />
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
