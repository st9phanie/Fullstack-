const Persons = ({persons,deleteButton}) => {
    return (
        <div>
      {persons.map((person) => (<p key={person.id}>
         {person.name} {person.phone}
          <button onClick={()=>deleteButton(person.id,person.name)}>delete</button>

         </p>))}
        </div>
    )
}

export default Persons
