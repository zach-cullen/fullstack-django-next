import PageContainer from "../components/PageContainer"
import { useFormik } from 'formik';
import { publicFetch } from '../util/fetch'

const SignUp = () => {
  const title = "Sign Up"

  const submitCredentials = async credentials => {
    const { data } = await publicFetch.post('auth/registration/', credentials)
    console.log(data)
  }

  const formik = useFormik({
    initialValues: {
      'username': '',
      'email': '',
      'password1': '',
      'password2': '',
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
        <label htmlFor="email">Email</label>
        <input 
          id="email"
          name="email"
          type="text" 
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <label htmlFor="password1">Password</label>
        <input 
          id="password1"
          name="password1"
          type="password" 
          onChange={formik.handleChange}
          value={formik.values.password1}
        />
        <input 
          id="password2"
          name="password2"
          type="password" 
          onChange={formik.handleChange}
          value={formik.values.password2}
        />
        <br />
        <input type="submit" />
      </form>
    </PageContainer>
  )
}

export default SignUp