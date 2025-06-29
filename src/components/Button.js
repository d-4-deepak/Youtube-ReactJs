const Button = (props)=>{
    const {name} =props
    return (
        <div>
            <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg shrink-0">{name} </button>
        </div>
    )
}
export default Button;