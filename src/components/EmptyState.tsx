import { ClipboardPlus } from 'react-bootstrap-icons'

import styles from './EmptyState.module.scss'

export function EmptyState() {
  return (
    <div className={styles.emtpy}>
      <ClipboardPlus size={64} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
