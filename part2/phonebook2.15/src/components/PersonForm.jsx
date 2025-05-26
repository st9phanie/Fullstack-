const PersonForm = (props) => {
    return(
    <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.handleChange} />
          phone number: <input value={props.newPhone} onChange={props.handleChange2} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm
