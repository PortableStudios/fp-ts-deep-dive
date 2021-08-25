import process from 'process'
import FileStorage from './services/providers/FileStorage'
import PersonSerialiser from './serialisers/PersonSerialiser'
import Person from './models/people/Person'

class Config {
  storage() {
// * reads some information at startup about which storage to use
    const storageType = process.env['APP_STORAGE']
    let storage: FileStorage<Person>
    switch(storageType) {
      case 'file': {
        const serialiser = new PersonSerialiser()
        storage = new FileStorage('src/data/people.txt', serialiser)
        break;
      }
      default: {
         throw new Error(`Invalid storageType: ${storageType}`)
      }
    }
    return storage
  }
}

export default Config
