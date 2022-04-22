import Head from 'next/head';

const PageContainer = ({ children, title }) => {
  return(
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        {children}
      </div>
    </>
  )
}

export default PageContainer
