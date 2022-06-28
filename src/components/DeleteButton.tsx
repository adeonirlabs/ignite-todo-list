import { ButtonHTMLAttributes } from 'react'
import { Trash } from 'react-bootstrap-icons'

import styles from './DeleteButton.module.scss'

type Props = {
  onClick: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export function DeleteButton({ onClick }: Props) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.deleteButton} onClick={onClick}>
        <Trash size={16} />
      </button>
    </div>
  )
}
