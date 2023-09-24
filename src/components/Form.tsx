import { nanoid } from 'nanoid'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '~/components/Button'
import { Input } from '~/components/Input'
import type { ItemProps } from '~/components/ListItem'

import styles from './Form.module.scss'

type Props = {
  onChange: (item: ItemProps) => void
}

export function Form({ onChange }: Props) {
  const [text, setText] = useState('')

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setText(event.currentTarget.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onChange({ id: nanoid(), title: text.trim(), isCompleted: false })
    setText('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={text}
        onChange={handleChange}
      />
      <Button disabled={!(text.length >= 4)} />
    </form>
  )
}
