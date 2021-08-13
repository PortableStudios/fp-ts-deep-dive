import fs from 'fs'
import path from 'path'

class FileStorage {
  read(): string[] {
    try {
      const filepath = path.resolve('src/data/people.txt')
      return fs.readFileSync(filepath, 'utf8').split("\n")
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default FileStorage
