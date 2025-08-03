import styles from './Error404.module.css'
import { useRouteError } from 'react-router-dom'
import type { RouteError } from '../../types/error';

export const Error404 = () => {
    const error = useRouteError() as RouteError ;
    console.log(error)
    const info = `no hemos encontrado la ruta- ${error?.data }`
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{error?.status} Ops!</h3>
      <p  className={styles.description}>{info}</p>
    </div>
  )
}
