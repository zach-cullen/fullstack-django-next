import PageContainer from "../components/PageContainer"
import Link from 'next/link'

const Home = () => {
  const title = "Home"
  return (
    <PageContainer title={title}>
      <h1>{title}</h1>
      <Link href="/login">Log In</Link>
    </PageContainer>
  )
}

export default Home
