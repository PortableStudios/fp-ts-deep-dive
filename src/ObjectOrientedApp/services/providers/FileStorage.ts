import fs from 'fs'
import path from 'path'

import Storage from '../../services/contracts/Storage'
import Serialiser from '../../serialisers/contracts/Serialiser'
import ValidationError from '../../models/errors/ValidationError'

class FileStorage<T> implements Storage<T> {
  constructor(
    public filepath: string,
    public serialiser: Serialiser<Error, T>
  ) {}

  read(): T[] {
    try {
      const fullpath = path.resolve(this.filepath)
      const data = fs.readFileSync(fullpath, 'utf8').split("\n")

      const resultOrError = data.map(
        record => this.serialiser.deserialise(record)
      )

      const errors = resultOrError.filter(
        (result): result is ValidationError => (result instanceof ValidationError)
      )
      console.warn(errors.map(error => error.message))

      const people = resultOrError.filter(
        (result): result is T => !(result instanceof ValidationError)
      )

      return people
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default FileStorage
