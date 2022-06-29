import cn from 'classnames'
import { useEffect, useMemo, useState } from 'react'

import { EmptyState } from '~/components/EmptyState'
import { ListItem } from '~/components/ListItem'
import type { ItemProps } from '~/components/ListItem'

import styles from './TaskList.module.scss'

type Props = {
  items: ItemProps[]
  className?: string
  onComplete: (id: string) => void
  onDelete: (id: string) => void
}

export function TaskList({ items, className, onComplete, onDelete }: Props) {
  const [list, setList] = useState(items)

  const isEmpty = useMemo(() => list.length === 0, [list])

  const created = useMemo(() => list.length, [list])

  const completed = useMemo(() => {
    const completed = list.filter(({ isCompleted }) => isCompleted).length
    return created === 0 ? completed : `${completed} de ${created}`
  }, [created, list])

  useEffect(() => {
    setList(
      items.sort((a, b) => (a.isCompleted ? 1 : 0) - (b.isCompleted ? 1 : 0))
    )
  }, [items])

  return (
    <section className={cn(styles.list, className && className)}>
      <header>
        <div className={styles.created}>
          Tarefas criadas <span className={styles.counter}>{created}</span>
        </div>
        <div className={styles.completed}>
          Concluídas <span className={styles.counter}>{completed}</span>
        </div>
      </header>
      <main>
        {isEmpty ? (
          <EmptyState />
        ) : (
          <>
            {list.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                onCheck={onComplete}
                onDelete={onDelete}
              />
            ))}
          </>
        )}
      </main>
    </section>
  )
}
