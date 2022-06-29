import { nanoid } from 'nanoid'
import { FormEvent, SyntheticEvent, useState } from 'react'

import { Button } from '~/components/Button'
import { Input } from '~/components/Input'
import type { ItemProps } from '~/components/ListItem'
import { TaskList } from '~/components/TaskList'

import styles from './Main.module.scss'

export function Main() {
  const [text, setText] = useState('')
  const [items, setItems] = useState<ItemProps[]>([])

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setText(event.currentTarget.value)
  }

  function onCreate(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    setItems([
      ...items,
      { id: nanoid(), title: text.trim(), isCompleted: false },
    ])
    setText('')
  }

  function onComplete(id: string) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    )
  }

  function onDelete(id: string) {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={onCreate}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={text}
            onChange={handleChange}
          />
          <Button disabled={!(text.length >= 4)} />
        </form>

        <div className={styles.list}>
          <TaskList items={items} onComplete={onComplete} onDelete={onDelete} />
        </div>
      </div>
    </main>
  )
}
