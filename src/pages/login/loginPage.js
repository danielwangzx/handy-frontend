import React from "react";
import "./login.scss";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

class NormalLoginForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<section className="sign-in">
				<div className="content">
					<div className="container">
						<Row className="form-header">Login to handy</Row>
						<div className="login-item">
							<Form onSubmit={this.handleSubmit} className="form">
								<Form.Item>
									{getFieldDecorator("username", {
										rules: [
											{ required: true, message: "Please input your username!" }
										]
									})(
										<Input
											className="form-input"
											prefix={
												<Icon
													type="user"
													style={{ color: "rgba(0,0,0,.25)" }}
												/>
											}
											placeholder="Username"
										/>
									)}
								</Form.Item>
								<Form.Item>
									{getFieldDecorator("password", {
										rules: [
											{ required: true, message: "Please input your Password!" }
										]
									})(
										<Input
											className="form-input"
											prefix={
												<Icon
													type="lock"
													style={{ color: "rgba(0,0,0,.25)" }}
												/>
											}
											type="password"
											placeholder="Password"
										/>
									)}
								</Form.Item>

								<Form.Item>
									<div className="options">
										{getFieldDecorator("remember", {
											valuePropName: "checked",
											initialValue: true
										})(<Checkbox>Remember me</Checkbox>)}
										<Row>
											<Link to="/myaccount">
												<Button
													style={{
														width: "300px",
														height: "40px",
														marginTop: "30px"
													}}
													type="primary"
													htmlType="submit"
													className="login-form-button"
												>
													Log in
												</Button>
											</Link>
										</Row>

										<a className="login-form-forgot" href="">
											Forgot your password?
										</a>
									</div>
									<Divider></Divider>
								</Form.Item>
								<Link to="/register">
									<a href="">Register now!</a>
								</Link>
							</Form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
	NormalLoginForm
);

export default WrappedNormalLoginForm;
