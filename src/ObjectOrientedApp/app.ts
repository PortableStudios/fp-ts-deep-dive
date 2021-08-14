// This application:
// * reads some information at startup about which storage to use
// * reads some data about people, from that storage location
// * reject any data that isn't valid
// * print out the valid information
// * ask if we want to save the validated information and if yes, save that to
//   some storage with a random identifier

import Config from './config'
import PeopleController from './controllers/PeopleController'

class Application {
  run() {
    const config = new Config()
    const controller = new PeopleController(config.storage())
    controller.index()
  }
}

export default Application
