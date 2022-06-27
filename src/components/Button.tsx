import { ButtonHTMLAttributes } from 'react'
import { PlusCircle } from 'react-bootstrap-icons'

import styles from './Button.module.scss'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: Props) {
  return (
    <button className={styles.button} {...props}>
      Criar
      <PlusCircle size={16} />
    </button>
  )
}
