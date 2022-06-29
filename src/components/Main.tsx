import { useState } from 'react'

import { Form } from '~/components/Form'
import type { ItemProps } from '~/components/ListItem'
import { TaskList } from '~/components/TaskList'

import styles from './Main.module.scss'

export function Main() {
  const [items, setItems] = useState<ItemProps[]>([])

  function handleChange(item: ItemProps) {
    setItems([...items, item])
  }

  function handleComplete(id: string) {
    setItems((state) =>
      state.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    )
  }

  function handleDelete(id: string) {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form onChange={handleChange} />

        <TaskList
          items={items}
          onComplete={handleComplete}
          onDelete={handleDelete}
          className={styles.list}
        />
      </div>
    </main>
  )
}
