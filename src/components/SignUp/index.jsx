import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		carMake: "",
		carModel: "",
		carYear: "",
		milesDriven: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	// Handle input changes
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_cont}>
				<div className={styles.signup_form_container}>
					<div className={styles.left}>
						<h1>Welcome Back</h1>
						<Link to="/login">
							<button type="button" className={styles.white_btn}>
								Sign in
							</button>
						</Link>
					</div>
					<div className={styles.right}>
						<form className={styles.form_container} onSubmit={handleSubmit}>
							<h1 className={styles.create} >Create Account</h1>
							
							<div className={styles.move}>

							<input
								type="text"
								placeholder="First Name"
								name="firstName"
								onChange={handleChange}
								value={data.firstName}
								required
								className={styles.input1}
							/>
							<h1 className={styles.create1}>Register New Account</h1>
							<input
								type="text"
								placeholder="Last Name"
								name="lastName"
								onChange={handleChange}
								value={data.lastName}
								required
								className={styles.input2}
							/>
							<input
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={data.email}
								required
								className={styles.input3}
							/>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								value={data.password}
								required
								className={styles.input4}
							/>
							<input
								type="text"
								placeholder="Car Make"
								name="carMake"
								onChange={handleChange}
								value={data.carMake}
								required
								className={styles.input5}
							/>
							<input
								type="text"
								placeholder="Car Model"
								name="carModel"
								onChange={handleChange}
								value={data.carModel}
								required
								className={styles.input6}
							/>
							<input
								type="number"
								placeholder="Car Year"
								name="carYear"
								onChange={handleChange}
								value={data.carYear}
								required
								min="2000"
								max={new Date().getFullYear()}
								className={styles.input7}
							/>
							<input
								type="number"
								placeholder="Miles Driven"
								name="milesDriven"
								onChange={handleChange}
								value={data.milesDriven}
								required
								min="0"
								className={styles.input8}
							/>
														</div>

							{error && <div className={styles.error_msg}>{error}</div>}
							<button type="submit" className={styles.green_btn}>
								Sign Up
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
