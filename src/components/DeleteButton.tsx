import { Trash } from 'phosphor-react'
import type { ButtonHTMLAttributes } from 'react'

import styles from './DeleteButton.module.scss'

type Props = {
  onClick: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export function DeleteButton({ onClick }: Props) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.deleteButton} onClick={onClick}>
        <Trash size={24} />
      </button>
    </div>
  )
}
