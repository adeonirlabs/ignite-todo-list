import { Clipboard } from 'phosphor-react'

import styles from './EmptyState.module.scss'

export function EmptyState() {
  return (
    <div className={styles.emtpy}>
      <Clipboard size={64} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
