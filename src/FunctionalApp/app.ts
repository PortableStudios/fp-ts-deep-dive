// This application:
// * reads some information at startup about which storage to use
// * reads some data about people, from that storage location
// * reject any data that isn't valid
// * print out the valid information
// * ask if we want to save the validated information and if yes, save that to
//   some storage with a random identifier

import { Kind, URIS } from 'fp-ts/HKT'
import { Monad1 } from 'fp-ts/Monad'
import { Do } from 'fp-ts-contrib/Do'
import { some } from 'fp-ts/Option'
import { log } from 'fp-ts/Console'
import { flow } from 'fp-ts/function'
import * as T from 'fp-ts/Task'

import { Person } from './models'

// Sample Data
const storageFake = [
  { name: 'Chris', age: some(36), dateOfBirth: new Date('04-02-1985') }
]

// App eDSL

interface Storage<F extends URIS> {
  getNames: () => Kind<F, Person[]>
}

interface Console<F extends URIS> {
  putStrLn: (input: string) => Kind<F, void>
}

type Program<F extends URIS> = Monad1<F> & Storage<F> & Console<F>

// App API

const storageGetNames = <F extends URIS>(storage: Storage<F>) =>
  () => storage.getNames()

const consolePutStrLn = <F extends URIS>(console: Console<F>) =>
  (input: string) => console.putStrLn(input)

// Interpreters

export const getTaskInterpreter = (): Program<T.URI> => {
  return {
    ...T.task,
    getNames: () => async () => storageFake,
    putStrLn: flow(log, T.fromIO)
  }
}

// App
export const FPApp = <F extends URIS>(P: Program<F>) =>
  () => Do(P)
    .bind('names', storageGetNames(P)())
    .bindL('result', ({ names }) => consolePutStrLn(P)(JSON.stringify(names)))
    .return(({ result }) => result)
