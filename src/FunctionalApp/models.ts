import { Option } from 'fp-ts/Option'

export interface Person {
  name: string
  age: Option<number>
  dateOfBirth: Date
}
