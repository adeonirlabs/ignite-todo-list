import { EmptyState } from '~/components/EmptyState'

import styles from './TaskList.module.scss'

export function TaskList() {
  return (
    <section className={styles.list}>
      <header>
        <div className={styles.created}>
          Tarefas criadas <span className={styles.counter}>0</span>
        </div>
        <div className={styles.completed}>
          Concluídas <span className={styles.counter}>0</span>
        </div>
      </header>
      <main>
        <EmptyState />
      </main>
    </section>
  )
}
