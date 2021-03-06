import React from "react";
import "./login.scss";
import history from "../../history";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { alertActions } from "../../redux/actions/alertActions";
import { userActions } from "../../redux/actions/userActions";

class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.props.logout();

		this.props.clearAlerts();

		this.state = {
			username: "",
			password: "",
			submitted: false,
			nickname: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ submitted: true });
		const { username, password, nickname } = this.state;
		if (username && password) {
			this.props.login(username, password);
			// localStorage.setItem("token", true);
			// localStorage.setItem("localuser", nickname);
		}
	}

	render() {
		const { loggingIn, alert } = this.props;
		const { username, password, submitted } = this.state;
		return (
			<div className="login-container">
				<div className="login-form">
					<form name="form" onSubmit={this.handleSubmit}>
						<div className="login-form__box">
							<div className="heading">
								<h2>Login</h2>
							</div>
							{alert.message && (
								<div className={`alert ${alert.type}`}>{alert.message}</div>
							)}
							<div>
								<label htmlFor="username">Email</label>
								<input
									type="text"
									className="form-control"
									name="username"
									value={username}
									onChange={this.handleChange}
								/>
								{submitted && !username && (
									<div className="help-block">Username is required</div>
								)}
							</div>
							<div>
								<label htmlFor="password">Password</label>
								<input
									type="password"
									className="form-control"
									name="password"
									value={password}
									onChange={this.handleChange}
								/>
								{submitted && !password && (
									<div className="help-block">Password is required</div>
								)}
							</div>
							<div>
								<button className="btn btn-primary">Login</button>
								{loggingIn && (
									<img
										style={{ marginTop: "50px", marginLeft: "20px" }}
										src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
									/>
								)}
								<Link
									to="/register"
									className="btn btn-link"
									style={{ marginTop: "50px" }}
								>
									Register
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

function mapState(state) {
	const { loggingIn, alert } = state;

	return { loggingIn, alert };
}

const actionCreators = {
	login: userActions.login,
	logout: userActions.logout,
	clearAlerts: alertActions.clear,
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };
