const Filter =(props) =>{
    return (
<div>
    filter shown with: <input value={props.filter} onChange={props.handleChange3}/>
</div>
    )
}

export default Filter
