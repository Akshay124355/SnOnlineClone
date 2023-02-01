
const ChildFunction = (porps) => {

    return (
        <div>
            <h1>Child {porps.name}</h1>
            <button className="btn btn-primary">fdf</button>

            <button onClick={() => porps.setFirst("akki")}>clilkme</button>
            <navbar className="bg-primary">fvvdfgfdfd</navbar>
        </div>
    )
}

export default ChildFunction;