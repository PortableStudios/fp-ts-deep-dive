import Person from '../models/Person'
import ValidationError from '../classes/ValidationError'

class PersonDTO {
  deserialise(record: string): Person | ValidationError {
    const [...results] = record.split(',')

    if (results.length !== 3 && results.filter((str) => !!str).length !== 3) {
      return new ValidationError(`Invalid record structure: ${record}`)
    }
    const [ name, age, birthDate ] = results

    if (!name || !parseInt(age) || !(Date.parse(birthDate))) {
      return new ValidationError(`Cannot parse record: ${record}`)
    }

    return { name, age: parseInt(age), dateOfBirth: new Date(birthDate) }
  }
}

export default PersonDTO
