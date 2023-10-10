import { PlusCircle } from 'phosphor-react'
import type { ButtonHTMLAttributes } from 'react'

import styles from './Button.module.scss'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: Props) {
  return (
    <button className={styles.button} {...props}>
      Criar
      <PlusCircle size={24} />
    </button>
  )
}
