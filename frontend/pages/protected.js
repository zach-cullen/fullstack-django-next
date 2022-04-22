import PageContainer from "../components/PageContainer"

const Protected = () => {
  const title = "Protected"
  return (
    <PageContainer title={title}>
      <h1>{title}</h1>
      <p>Authenticated Users Only!</p>
    </PageContainer>
  )
}

export default Protected