import PageContainer from "../components/PageContainer"
import { useFormik } from 'formik';

const LogIn = () => {
  const title = "Log In"

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