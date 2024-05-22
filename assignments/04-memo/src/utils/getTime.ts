const date = new Date("2024-05-22T18:24:00");

const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true, // 12시간 형식을 사용하기 위해 true로 설정
};

const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(date);

export default formattedDate;
