import process from 'process'
import FileStorage from './services/FileStorage'

class Config {
  storage() {
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
    return storage
  }
}

export default Config
