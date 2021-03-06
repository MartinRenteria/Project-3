import React, { useRef } from "react";
import { useLogin } from "../../utils/auth";
import { Form, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function LoginForm(props) {
	let history = useHistory();

	const emailRef = useRef();
	const passwordRef = useRef();
	const individualContributorRef = useRef();

	// Get the helper login function from the `useLogin` hook.
	const login = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const individualContributor = individualContributorRef.current.checked;

		try {
			await login({ email, password, individualContributor });

			// User has been successfully logged in and added to state.

			if (individualContributor === true) {
				history.push("/Employer");
			} else if (individualContributor === false) {
				history.push("/Employee");
			}
		} catch (err) {
			// Handle error responses from the API
			if (err.response && err.response.data) alert("Oh no! Invalid password or email. Please try again.");
			
		}
	};

	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="LoginEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" ref={emailRef} placeholder="Enter email" />
					</Form.Group>
					<Form.Group controlId="LoginPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" ref={passwordRef} placeholder="Password" />
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlSelect4">
						<Form.Label>Are you a Manager?</Form.Label>
						<Form.Control type="checkbox" ref={individualContributorRef} />
					</Form.Group>
					<div className="d-flex justify-content-between">
						<Button variant="outline-info btn-dark" type="submit" onClick={props.onHide}>
							Log In
						</Button>

						<Button variant="outline-info btn-dark" onClick={props.onHide}>
							Close
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
}
