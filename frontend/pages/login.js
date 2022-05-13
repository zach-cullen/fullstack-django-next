import { useContext } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { AuthContext } from '../context/AuthContext'
import { publicFetch } from '../util/fetch'
import PageContainer from "../components/PageContainer"

const LogIn = () => {
  const title = "Log In"
  const router = useRouter()
  const authContext = useContext(AuthContext)

  const submitCredentials = async credentials => {
    try {
      const { data } = await publicFetch.post('auth/login/', credentials)
      authContext.setAuthState({ user: data.user, token: data.access_token })
      router.push('/protected')
    } catch(error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      'username': '',
      'password': ''
    },
    onSubmit: values => {
      submitCredentials(values)
    },
  })


  return (
    <PageContainer title={title}>
      <h1>{title}</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
          id="username"
          name="username"
          type="text" 
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input 
          id="password"
          name="password"
          type="password" 
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br />
        <input type="submit" />
      </form>
    </PageContainer>
  )
}

export default LogIn