import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import { Alert } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  const history = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        history('/admin')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  };

  return (
    <>
      <div className="auth">
        <Row className="center">
          <Col span={6}>
            <h1>Admin Login</h1>
            {}
            <Form
              name="login_form"
              className="login-form"
              // initialValues={{
              //     remember: true,
              // }}
              // onFinish={onFinish}
            >
              <Form.Item
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: "Required email",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: "Required password",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <br />
              <Form.Item>
                <Button
                  type="submit"
                  className="login-form-button"
                  onClick={login}
                >
                  Log in
                </Button>
                <br />
                <br />
                Don't have an account yet?
                <Link to="/register"> Register here</Link>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}
