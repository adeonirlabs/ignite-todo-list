import cn from 'classnames'

import { Checkbox } from '~/components/Checkbox'
import { DeleteButton } from '~/components/DeleteButton'

import styles from './ListItem.module.scss'

export type ItemProps = {
  id: string
  title: string
  isCompleted: boolean
}

type Props = {
  item: ItemProps
  onCheck: (id: string) => void
  onDelete: (id: string) => void
}

export function ListItem({ item, onCheck, onDelete }: Props) {
  return (
    <div className={styles.item}>
      <Checkbox checked={item.isCompleted} onChange={() => onCheck(item.id)} />
      <span className={cn(styles.title, item.isCompleted && styles.completed)}>
        {item.title}
      </span>
      <DeleteButton onClick={() => onDelete(item.id)} />
    </div>
  )
}
