import { InputHTMLAttributes } from 'react'

import styles from './Checkbox.module.scss'

type Props = {
  checked?: boolean
  onChange?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

export function Checkbox({ checked, onChange, ...props }: Props) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
