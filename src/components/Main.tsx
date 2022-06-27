import styles from './Main.module.scss'
import { Button } from '~/components/Button'
import { Input } from '~/components/Input'

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form}>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button />
        </form>
      </div>
    </main>
  )
}
