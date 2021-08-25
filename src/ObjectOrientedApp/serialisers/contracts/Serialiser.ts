interface Serialiser<Err, Result> {
  deserialise: (record: string) => Err | Result
}

export default Serialiser
