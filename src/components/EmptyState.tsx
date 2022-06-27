import { ClipboardPlus } from 'react-bootstrap-icons'

import styles from './EmptyState.module.scss'

export function EmptyState() {
  return (
    <div className={styles.emtpyState}>
      <ClipboardPlus size={64} />
      <b>Você ainda não tem tarefas cadastradas</b>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
