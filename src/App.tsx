import styles from './App.module.scss'
import { Header } from '~/components/Header'
import { Main } from '~/components/Main'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  )
}
