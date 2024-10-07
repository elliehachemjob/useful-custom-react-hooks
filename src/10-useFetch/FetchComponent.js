import { useState } from "react"
import useFetch from "./useFetch"

export default function FetchComponent() {
  const [id, setId] = useState(1)
  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  )

  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId(currentId => currentId + 2)}>
        Increment ID by 2
      </button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, console.log("error here), 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  )
}
