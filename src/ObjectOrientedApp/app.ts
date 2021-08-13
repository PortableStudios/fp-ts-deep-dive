// This application:
// * reads some information at startup about which storage to use
// * reads some data about people, from that storage location
// * reject any data that isn't valid
// * print out the valid information
// * ask if we want to save the validated information and if yes, save that to
//   some storage with a random identifier

import process from 'process'

import PeopleController from './controllers/PeopleController'
import FileStorage from './services/FileStorage'

class Application {
  run() {
// * reads some information at startup about which storage to use
    const storageType = process.env['APP_STORAGE']
    let storage: FileStorage
    switch(storageType) {
      case 'file': {
        storage = new FileStorage()
        break;
      }
      default: {
         throw new Error(`Invalid storageType: ${storageType}`)
      }
    }

    const controller = new PeopleController(storage)
    controller.index()
  }
}

export default Application
