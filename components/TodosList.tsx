import Link from 'next/link'
import { TodoList } from '@/types/Todo.type'

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  const todos: TodoList = await res.json()
  return todos
}

export default async function TodosList() {
  const todos = await fetchTodos()

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  )
}
