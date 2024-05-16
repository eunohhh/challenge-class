import React, { useState } from "react";
import "./Ground.css";

function Ground() {
    const [position, setPosition] = useState({ top: 0, left: 0, flip: 1 });
    const [isJumping, setIsJumping] = useState(false);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (isJumping) return; // 이미 점프 중이면 그냥 종료

        // 새로운 포지션 값을 저장할 변수 세개 생성하고 기존 값 담아놓기
        let newTop = position.top;
        let newLeft = position.left;
        let newFlip = position.flip;

        // 업이면 탑 값을 80px 씩 빼는 값과 최대값(0)을 비교하여 높은값 / 다운이면 반대이고 최대값은 720(800px잔디 - 80px피카츄)
        // 레프트면 레프트 값을 80px 씩 빼는 값과 최대값(0)을 비교하여 높은값 / 라이트면 반대이고 최대값은 역시 720
        switch (event.key) {
            case "ArrowUp":
            case "w":
            case "ㅈ":
                newTop = Math.max(position.top - 80, 0);
                break;
            case "ArrowDown":
            case "s":
            case "ㄴ":
                newTop = Math.min(position.top + 80, 720);
                break;
            case "ArrowLeft":
            case "a":
            case "ㅁ":
                newFlip = -1;
                newLeft = Math.max(position.left - 80, 0);
                break;
            case "ArrowRight":
            case "d":
            case "ㅇ":
                newFlip = 1;
                newLeft = Math.min(position.left + 80, 720);
                break;
            case " ":
                // 스페이스바 눌렀을 때 점프중이 아니면
                if (!isJumping) {
                    // 일단 스테이트 트루로 만들고 === 점프중으로
                    setIsJumping(true);
                    // 80 만큼 위로 보내는데, 맥스는 0으로 해야 밖으로 안나감~~
                    newTop = Math.max(position.top - 80, 0);
                    // 새 값 사용하여 setState - newLeft 는 그대로임
                    setPosition({
                        top: newTop,
                        left: newLeft,
                        flip: position.flip,
                    });

                    // position.top 은 기존 값이므로, 이 값을 사용해서 100ms 뒤에 다시 setPosition
                    setTimeout(() => {
                        setPosition({
                            top: position.top,
                            left: newLeft,
                            flip: position.flip,
                        });
                        setIsJumping(false);
                    }, 100); // 0.5초 후에 다시 내려오게 합니다.
                }
                break;
            default:
                break;
        }
        // switch 문을 빠져나왔을 때 생성된 새 값들로 setState
        setPosition({ top: newTop, left: newLeft, flip: newFlip });
    };

    return (
        <div className="game-container" tabIndex={0} onKeyDown={handleKeyDown}>
            <div
                className="pikachu"
                style={{
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    transform: `scaleX(${position.flip})`,
                }}
            >
                <img src={"/pikachu.png"} alt="Pikachu" />
            </div>
        </div>
    );
}

export default Ground;
