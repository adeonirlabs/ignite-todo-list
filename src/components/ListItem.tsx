import cn from 'classnames'

import { Checkbox } from '~/components/Checkbox'
import { DeleteButton } from '~/components/DeleteButton'

import styles from './ListItem.module.scss'

export type Props = {
  id: string
  title: string
  isCompleted: boolean
}

export function ListItem({ title, isCompleted }: Props) {
  return (
    <div className={styles.listItem}>
      <Checkbox />
      <span className={cn(styles.title, isCompleted && styles.completed)}>
        {title}
      </span>
      <DeleteButton onClick={() => console.log('clicou')} />
    </div>
  )
}
