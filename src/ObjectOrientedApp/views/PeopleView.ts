import Person from '../models/Person'

class PeopleView {
  constructor(private people: Person[]) {
  }

  render(): string {
    const result = this.people.map((person: Person) => {
      const {name, age, dateOfBirth} = person
      return `${name}: ${!!age ? age : 'Age not provided'} - ${dateOfBirth.toLocaleString()}`
    })

    return result.join('\n')
  }
}

export default PeopleView
