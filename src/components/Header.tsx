import styles from './Header.module.scss'
import { Logo } from '~/components/Logo'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  )
}
