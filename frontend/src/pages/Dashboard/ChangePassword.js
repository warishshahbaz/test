
import {
    Button,
    Card,
    Form,
    Input,
    Radio,
    Select,
    Modal
} from "antd";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from '../../config/config'


const ChangePassword = ({ message }) => {
    const [form] = Form.useForm();
    const [registerObj, setRegisterObj] = useState({});










    const onFinish = (values) => {
        console.log("Success:", values);
        setRegisterObj(values);
    };


    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };



    const changePassword = () => {

    }

    return <div className="items-center ml-[350px] mt-[160px] ">


        <Card style={{ boxShadow: "1px", width: "600px" }}>
            <div className="items-center">

                <Form
                    form={form}
                    name="register"
                    initialValues={{
                        residence: ["zhejiang", "hangzhou", "xihu"],
                        prefix: "86",
                    }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                    scrollToFirstError
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >



                    <div> <Form.Item
                        name="oldPassword"
                        label="Old Password"
                        // className="w-[320px] ml-[12px] "
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                              required: true,
                              message: (
                                <p className="w-[210px]  ml-[12px] flex ">
                                  Please enter your old password !
                                </p>
                              ),
                            },

                        ]}
                    >
                        <Input.Password className="w-[230px] mr-[64px] " />
                    </Form.Item></div>

                    <div>  <Form.Item
                        name="newPassword"
                        label="New Password"
                        // className="w-[320px] ml-[12px] "
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                              required: true,
                              message: (
                                <p className="w-[250px]  ml-[15px] flex ">
                                  Please confirm your new password !
                                </p>
                              ),
                            },

                        ]}
                    >
                        <Input.Password className="w-[230px] mr-[64px] " />
                    </Form.Item></div>

                    <div>


                        <Form.Item
                            name="confirmPassword"
                            label="Confirm Password"
                            // className="w-[320px] ml-[12px] "
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                                {
                                  required: true,
                                  message: (
                                    <p className="w-[250px]  ml-[15px] flex ">
                                      Please confirm your new password !
                                    </p>
                                  ),
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("newPassword") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error(
                                                "Passwords not match !"
                                            )
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password className="w-[230px] mr-[64px] " />
                        </Form.Item>




                    </div>


                    <Button
                        className="bg-[blue] text-white ml-[0px]"
                        htmlType="submit"
                        onClick={changePassword}
                    >
                        Submit
                    </Button>
                </Form>

            </div >


        </Card>

    </div >

};
export default ChangePassword;


