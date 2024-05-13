---
title: 숙제01
author: EunOh
date: "2023-05-13"
tags: react, challenge, assignment
---

### 01. 가상 DOM

-   가상 DOM은 실제 DOM을 흉내낸 가상의 DOM입니다.
-   React는 가상 DOM을 사용해서 실제 DOM보다 빠르게 UI 변경사항을 관리해줍니다.
-   가상 DOM은 변경이 필요한 부분만 실제 DOM에 반영해 주어서, 페이지 전체를 새로 불러오는 것보다 훨씬 효율적입니다.
-   개발자 입장에서도 직접 DOM을 다루는 대신 React 가 가상 DOM을 이용해 필요한 부분만 자동으로 업데이트 해주니 훨씬 편리하게, 높은 생산성으로 서비스를 만들 수 있어요.

### 02. JSX

#### JSX란?

-   JSX는 JavaScript를 확장한 문법으로, React에서 UI 구조를 표현하는 데 사용합니다.
-   HTML 태그와 유사하게 생겼지만, 실제로는 JavaScript의 확장으로,

```html
<h1>안녕하세요</h1>
```

와

```jsx
<h1>안녕하세요</h1>
```

는 완전히 다른 것입니다.

-   JSX는 React 라이브러리의 React.createElement 함수 호출을 보다 직관적으로 표현해주는 문법적 편의를 제공하는 것입니다.

#### JSX의 특징

1. HTML과 유사한 문법
    - JSX는 HTML 태그와 비슷하게 생겼기 때문에, 웹 개발자에게 친숙하고 읽기 쉽습니다.
2. JavaScript와의 결합

    - JSX 내에서 JavaScript 표현식을 중괄호 **`{}`**로 묶어 사용할 수 있습니다.
    - 이를 통해 데이터 바인딩이나 반복문 처리 등이 가능합니다.

    ```jsx
    function App() {
        const name = "Young";

        return <div>Hello~! My name is {name}.</div>;
    }
    ```

3. 컴포넌트 기반
    - React 컴포넌트를 JSX를 사용하여 리액트 엘리먼트로 만들 수 있습니다.
    - 이를 통해 UI를 구조화하고 재사용할 수 있습니다.

#### JSX사용 예시

```jsx
// 컴포넌트 선언
function SomeComponent() {
    return <h1>{3 + 5}</h1>;
}

// 엘리먼트 생성
const someElement = <SomeComponent />;

// 컴포넌트의 재사용
function AnotherComponent() {
    return (
        <div>
            <SomeComponent />
            <SomeComponent />
        </div>
    );
}
```

#### JSX의 장점

-   읽기 쉽고 작성하기 편리 : UI 코드가 시각적으로 이해하기 쉬워, 개발 효율성이 높아집니다.
-   컴포넌트 구조 명확화 : 컴포넌트의 구조를 한눈에 파악하기 쉬워, 프로젝트의 유지보수성이 향상됩니다.

#### JSX 사용 시 주의사항

-   브라우저는 JavaScript의 확장인 JSX는 읽지 못하고 JavaScript만 읽을 수 있습니다.
-   따라서 트랜스파일러(Babel 등)를 사용하여 JSX를 일반 JavaScript로 변환하여 웹 브라우저에 보내주어야 합니다.

### 03. React Component vs React Element

1.  리액트 컴포넌트 (React Component)
    리액트 컴포넌트는 UI의 한 부분을 캡슐화한 코드 블록입니다.
    과거에는 클래스를 사용하여 컴포넌트를 만들었지만 이제는 함수로 만드는 것이 일반적입니다.

```jsx
function Greeting() {
    return <div>Hello World</div>;
}
```

​ 02. 리액트 엘리먼트 (React Element)
리액트 엘리먼트는 컴포넌트의 인스턴스로, 화면에 표시할 내용을 기술한 객체로 JSX 문법을 사용하여 생성할 수 있습니다.

```jsx
<Greeting />
```

### 04. State

-   State는 React 컴포넌트 내부의 동적인 데이터를 관리하는 데 사용되는 데이터 구조입니다.
-   일반적으로 시간에 따라 변하는 값이나 사용자의 상호작용 또는 네트워크 응답 등에 의해 변경되는 값을 State로 관리합니다.
-   State가 바뀌면 컴포넌트는 리렌더링을 수행 합니다.
-   리렌더링이 된다는 것은 함수가 재실행된다는 뜻이고, 그 결과 화면이 다시 그려지게 됩니다.
-   함수는 재실행되지만 상태값은 어딘가에 계속 기억이 되고 있습니다.

```jsx
import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); // 초기값 0

    const increment = () => {
        setCount(count + 1); // count를 1 증가시키는 함수
    };

    return (
        <div>
            <p>현재 카운트: {count}</p>
            <button onClick={increment}>증가</button>
        </div>
    );
}
```

### 05. Props

-   부모 컴포넌트로부터 자식 컴포넌트에 전달하는 데이터를 Props 라고 합니다.
-   자식 컴포넌트 입장에서 Props는 읽기 전용으로, 수정해서는 안됩니다.
-   props를 잘 사용하면 컴포넌트의 재사용성과 유연성이 크게 증가합니다.
-   부모가 전달해 주는 props 값이 바뀌면 자식 컴포넌트는 리렌더링을 합니다.

```jsx
function Greeting(props) {
    return <h1>안녕하세요, {props.name}님!</h1>;
}

function App() {
    const someName = "철수";
    return (
        <div>
            <Greeting name="지수" />
            <Greeting name={someName} />
        </div>
    );
}
```

### 06. 리렌더링의 조건

1. `state`가 변경되면 컴포넌트는 리렌더링됩니다.
2. 부모 컴포넌트로부터 전달 받는 `props`의 값이 변경되면 컴포넌트는 리렌더링됩니다.
3. 부모 컴포넌트가 리렌더링되면 자식 컴포넌트는 리렌더링됩니다. (React.memo 로 방지할 수 있습니다)
