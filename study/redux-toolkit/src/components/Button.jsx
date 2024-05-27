/* eslint-disable react/prop-types */
function Button({ label, onClick: handleClick }) {
    return (
        <>
            <label>{label}</label>
            <button onClick={handleClick}>Button</button>
        </>
    );
}

export default Button;
