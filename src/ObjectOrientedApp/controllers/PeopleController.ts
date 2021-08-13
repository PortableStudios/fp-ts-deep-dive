import Person from '../models/Person'
import PeopleView from '../views/PeopleView'
import PersonDTO from '../dto/PersonDTO'
import ValidationError from '../classes/ValidationError'
import FileStorage from '../services/FileStorage'

class PeopleController {
  constructor(public storage: FileStorage) {
  }

  index() {
// * reads some data about people, from that storage location
    const data = this.storage.read()

// * reject any data that isn't valid
    const people = data.map(
      (record) => new PersonDTO().deserialise(record)
    ).filter((person): person is Person => !(person instanceof ValidationError))

// * print out the valid information
    const view = new PeopleView(people)
    const output = view.render()
    console.log(output)

// * ask if we want to save the validated information and if yes, save that to
//   some storage with a random identifier
    // TODO
  }
}

export default PeopleController
