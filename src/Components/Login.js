import React, { useState } from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
// import { Formik } from 'formik'
import swal from 'sweetalert'
import { validationSchema } from '../Schema/validationSchema'
const Login = (props) => {
	const { setLoginStatus } = props
	const [errorToggle, setErrorToggle] = useState(false)
	const users = [
		{ email: 'anirudda@gmail.com', password: 'hello@123' },
		{
			email: 'harish@gmail.com',
			password: 'hello@121',
		},
	]

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(values)
			users.map((ele) => {
				if (ele.email == values.email && ele.password == values.password) {
					localStorage.setItem('user', JSON.stringify(true))
					setLoginStatus(true)
					swal({
						title: 'Good job!',
						text: 'You Logged-In!',
						icon: 'success',
					})
				} else {
					setErrorToggle(true)
				}
			})
		},
	})
	return (
		<>
			<h1>Test Email : 'anirudda@gmail.com', password: 'hello@123' </h1>
			<Row>
				<Col>
					<Card>
						<Card.Header>
							<Card.Title>Login</Card.Title>
						</Card.Header>
						<Card.Body>
							<Card.Title>Please Enter Your Valid Datails</Card.Title>
							<hr />
							<Form onSubmit={formik.handleSubmit}>
								<Row>
									<Col md={6}>
										<Form.Group>
											<Form.Label>Email</Form.Label>
											<Form.Control
												type='email'
												id='email'
												placeholder='Enter Your Email'
												name='email'
												value={formik.values.email}
												onChange={formik.handleChange}
											/>
											{formik.errors.email && (
												<Form.Text className='text-danger'>
													{formik.errors.email}
												</Form.Text>
											)}
										</Form.Group>
										<Form.Group>
											<Form.Label>Password</Form.Label>
											<Form.Control
												type='password'
												id='password'
												placeholder='Enter Your Password'
												name='password'
												value={formik.values.password}
												onChange={formik.handleChange}
											/>
											{formik.errors.password && (
												<Form.Text className='text-danger'>
													{formik.errors.password}
												</Form.Text>
											)}
										</Form.Group>
									</Col>
									<Col>
										{errorToggle && (
											<div className='mt-5'>
												<h2 className='text-danger'>You do Not Have Access </h2>
												<p className='text-success'>
													Please Use Valid Credentials
												</p>
											</div>
										)}
									</Col>
								</Row>
								<Row>
									<Col md={3}>
										<Form.Group>
											<Form.Control
												className='btn btn-success'
												type='submit'
												value='submit'
											/>
										</Form.Group>
									</Col>
								</Row>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default Login