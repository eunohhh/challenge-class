import useMemoApp from "@/hooks/useMemoApp";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

function Ul() {
    const { memos, selected, selectMemo } = useMemoApp();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = (id: string) => () => {
        selectMemo(id);
    };

    useEffect(() => {
        setSearchParams({ id: selected });
    }, [selected, setSearchParams]);

    // searchParams 가 바뀔때
    useEffect(() => {
        const param = searchParams.get("id");

        console.log(param);
    }, [searchParams]);

    return (
        <StyledUl>
            {memos.map((memo) => {
                let h6String = "";
                if (memo.contents.length > 14) {
                    const sliced = memo.contents.substring(0, 15);
                    h6String = `${sliced}...`;
                } else {
                    h6String = memo.contents;
                }

                return (
                    <StyleLi
                        key={memo.id}
                        onClick={handleClick(memo.id)}
                        $isSelected={selected === memo.id}
                    >
                        <StyledH6>
                            {memo.contents === "" ? "새로운 메모" : h6String}
                        </StyledH6>
                        <StyledTime>{memo.time.slice(13)}</StyledTime>
                    </StyleLi>
                );
            })}
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

const StyleLi = styled.li<{ $isSelected: boolean }>`
    height: 56px;
    border-radius: 4px;
    background-color: ${({ $isSelected }) =>
        $isSelected ? "rgb(255, 224, 127)" : "rgb(255, 255, 255)"};
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
