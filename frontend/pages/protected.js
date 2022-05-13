import { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '../context/AuthContext'
import PageContainer from "../components/PageContainer"


const Protected = () => {
  const title = "Protected"
  const authContext = useContext(AuthContext)

  return (
    <PageContainer title={title}>
      <Link href="/login">Log In</Link>
      <h1>{title}</h1>
      <p>Authenticated Users Only!</p>
      <h2>Token: { authContext.authState.token }</h2>
      <h2>Username: { authContext.authState.user.username }</h2>
    </PageContainer>
  )
}

export default Protected