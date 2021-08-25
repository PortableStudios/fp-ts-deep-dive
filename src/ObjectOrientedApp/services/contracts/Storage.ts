interface Storage<T> {
  read: () => T[]
}

export default Storage
