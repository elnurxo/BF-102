function Button({name,id}) {
    return (
        <button id={id}>{name("hello button")}</button>
    )
}

export default Button