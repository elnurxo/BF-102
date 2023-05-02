
function Header({id,name}) {
    console.log(id);
    return (
        <h1 id={id}>{name("hello header")}</h1>
    )
}

export default Header