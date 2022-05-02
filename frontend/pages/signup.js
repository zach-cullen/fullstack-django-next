import PageContainer from "../components/PageContainer"
import { useFormik } from 'formik';

const SignUp = () => {
  const title = "Sign Up"

  const formik = useFormik({
    initialValues: {
      'username': '',
      'password': ''
    },
    onSubmit: values => {
      console.log(values)
    },
  })


  return (
    <PageContainer title={title}>
      <h1>{title}</h1>
      <form onSubmit={formik.handleSubmit}>
        <input 
          id="username"
          name="username"
          type="text" 
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <br />
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

export default SignUp