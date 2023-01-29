
const ChildFunction = (porps) => {

    return (
        <div>
            <h1>Child {porps.name}</h1>

            <button onClick={() => porps.setFirst("akki")}>clilkme</button>
        </div>
    )
}

export default ChildFunction;