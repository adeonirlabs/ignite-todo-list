import { Button } from '~/components/Button'
import { Input } from '~/components/Input'
import { TaskList } from '~/components/TaskList'

import styles from './Main.module.scss'

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form}>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button />
        </form>

        <div className={styles.list}>
          <TaskList />
        </div>
      </div>
    </main>
  )
}
