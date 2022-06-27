import { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

type Props = InputHTMLAttributes<HTMLInputElement>

export function Input(props: Props) {
  return <input className={styles.input} type="text" {...props} />
}
