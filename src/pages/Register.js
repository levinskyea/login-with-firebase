import { useState, useEffect } from 'react';
import { Row, Col } from "antd";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
//import { Alert } from 'antd';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useNavigate();
  
  useEffect(() => {
      console.log(email)
      console.log(password)
  }, [email, password])

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        alert("Successfully created an account")
        // sendSignInLinkToEmail(auth, email, actionCodeSettings)
        // .then(() => {
        // // The link was successfully sent. Inform the user.
        // // Save the email locally so you don't need to ask the user for it again
        // // if they open the link on the same device.
        // window.localStorage.setItem('emailForSignIn', email);
        // // ...
        //     console.log("Success")
        // })
        // .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // ...
        //     console.log(errorMessage)
        // });
        history("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  };

//   const actionCodeSettings = {
//     // URL you want to redirect back to. The domain (www.example.com) for this
//     // URL must be in the authorized domains list in the Firebase Console.
//     url: 'https://basicloginwithskye.netlify.app',
//     // This must be true.
//     handleCodeInApp: true,
//     iOS: {
//       bundleId: 'com.example.ios'
//     },
//     android: {
//       packageName: 'com.example.android',
//       installApp: true,
//       minimumVersion: '12'
//     },
//     dynamicLinkDomain: 'example.page.link'
//   };

  return (
    <>
      <div className="auth">
        <Row className="center">
          <Col span={6}>
            <h1>Register</h1>

            <Form name="register_form">
              <Form.Item
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                rules={[
                  {
                    type: "email",
                    message: "Please input a valid email.",
                  },
                  {
                    required: true,
                    message: "Required email",
                  },
                ]}
              >
                <Input
                  placeholder="Email"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              {/* <Form.Item
                            name="nickname"
                            rules={[{ required: true, message: 'Required nickname', whitespace: true }]}
                        >
                            <Input placeholder="What do you want others to call you?" prefix={<SmileOutlined className="site-form-item-icon" />}/>
                        </Form.Item> */}

              <Form.Item
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: "Required password",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  placeholder="Password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Confirm your password",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Passwords not match."));
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <br />
              <Form.Item>
                <Button type="submit" onClick={() => register(auth)}>Register</Button>
                <br />
                <br />
                Already have an account?
                <Link to="/"> Login</Link>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}
