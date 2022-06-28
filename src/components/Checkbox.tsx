import { InputHTMLAttributes } from 'react'

import styles from './Checkbox.module.scss'

type Props = InputHTMLAttributes<HTMLInputElement>

export function Checkbox(props: Props) {
  return (
    <div className={styles.wrapper}>
      <input className={styles.checkbox} type="checkbox" {...props} />
    </div>
  )
}
