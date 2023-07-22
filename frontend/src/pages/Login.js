import React from "react";
import { useState } from "react";
import { Card, } from "@mui/material";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from "axios";
import { BASE_URL } from '../config/config'
import Dashboard from './Dashboard/Home';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [isRedirectDashboard, setIsRedirectDashboard] = useState(false);
  const [loginFaildError, setLoginFaildError] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  const handleLogin = (obj) => {

    axios.post(`${BASE_URL}/api/user/login`,
      {
        "password": obj.password,
        "my_sponcer_id": obj.my_sponcer_id
      }
    ).then((result) => {
      console.log(result)
      const payload = result?.data
      navigate('/dashboard',{ state: payload });

    }).catch((error) => {
      console.log(error.response.data?.message)
      setLoginFaildError(true)
    })
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    handleLogin({ password: values.password, my_sponcer_id: values.username })
  };


  return (

    <>

      <div className="bg-[green] w-[100vw] h-[100vh] flex justify-center items-center">
        <Card sx={{ padding: "10px", width: "400px", height: "380px", display: "flex", justifyContent: "center", alignItems: "center", }} >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >

            <h2 className="flex justify-center items-center" > Welcome Back! </h2>
            <h6 className="flex justify-center items-center mt-[5px] mb-[30px]" > Enter your Login credentials </h6>

            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>













            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? (
                    <EyeTwoTone onClick={togglePasswordVisibility} />
                  ) : (
                    <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
                  )
                }
              />
            </Form.Item>


















            {/* <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item> */}














            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="/home">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item>
              <Button
                className="bg-blue-800 text-white flex justify-center items-center h-full w-full"
                htmlType="submit"
              >
                Login
              </Button>
            </Form.Item>
            {loginFaildError && (
              <h5 className="flex justify-center items-center text-[red] ">Login Failed !</h5>
            )}
          </Form>

        </Card>


      </div>
    </>

  );


}

