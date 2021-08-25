import Person from '../models/people/Person'
import PeopleView from '../views/PeopleView'
import Storage from '../services/contracts/Storage'

class PeopleController {
  constructor(public storage: Storage<Person>) {}

  index() {
    const people = this.storage.read()
    const view = new PeopleView(people)
    const output = view.render()
    console.log(output)
  }
}

export default PeopleController
