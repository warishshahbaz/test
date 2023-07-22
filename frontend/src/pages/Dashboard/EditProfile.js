
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
import OTPInput from "react-otp-input";
import Timer from "../../components/Timer";
import axios from "axios";
import { BASE_URL } from '../../config/config'
import SuccessRegister from "../SuccessRegister";


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const EditProfile = ({ message }) => {
    // console.log(payload)
    const [sponcerToggle, setSponcerToggle] = useState(false);
    const [otpMobNo, setOtpMobNo] = useState("");
    const [sponcerId, setSponcerId] = useState("");
    const [errorHandle, setErrorHandle] = useState(false);
    const [otpErrorMsg, setOtpErrorMsg] = useState("Enter Varifaction Code");
    const [otp, setOtp] = useState("");
    const [varifaction_code_id, setVarifaction_code_id] = useState("");
    const [otpToggle, setOtpToggle] = useState(false);
    const [registerObj, setRegisterObj] = useState({});
    const [timer, setTimer] = useState(90);
    const [seconds, setSeconds] = useState(90);
    const [form] = Form.useForm();
    const [registerApiResponse, setRegisterApiResponse] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values) => {
        console.log("Success:", values);
        setRegisterObj(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const getVarifactionCode = () => {
        if (registerObj?.phone || 1) {
            console.log(registerObj.phone);
            // setOtpMobNo(registerObj.phone);
            axios.post(
                `${BASE_URL}/api/user/get_varifaction_code`,
                {
                    // phone: registerObj.phone ,
                    phone: '6387465973',
                }
            )
                .then((result) => {
                    console.log(result.data);

                    setVarifaction_code_id(result.data?.varifaction_code_id);
                    setOtpToggle(true);
                })
                .catch((error) => {
                    console.log(error.response.data);
                    setErrorHandle(true);
                });
        }
    };

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(
                [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
            );
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));

    const setSponcerIdHandler = (e) => {
        setErrorHandle(false);
        setSponcerId(e.target.value);
    };

    const submitSponcerHandler = () => {
        console.log("Received SponcerId Handler : ", sponcerId, BASE_URL);
        if (sponcerId != "") {
            axios.post(
                `${BASE_URL}/api/user/valid_sponcer_id`,
                {
                    refer_sponcer_id: sponcerId,
                }
            )
                .then((result) => {
                    console.log(result.data);
                    setSponcerToggle(true);
                })
                .catch((error) => {
                    setErrorHandle(true);
                });
        }
    };

    const resendOtp = () => {
        setSeconds(90);
        getVarifactionCode();
    };

    const handleRegister = () => {
        // axios.post(
        //     `${BASE_URL}/api/user/verify_varifaction_code`,
        //     {
        //       varifaction_code: Number(otp),
        //       varifaction_code_id: varifaction_code_id,
        //     }
        //   )
        // .then((result) => {
        // console.log(result.data);
        axios.post(`${BASE_URL}/api/user/register`,
            {
                "refer_sponcer_id": sponcerId,
                "position": "left",
                "name": "sonu verma",
                "father_name": "Rajitrem verma",
                "phone": registerObj.phone || '6387465973',
                "email": "sonu@gmail.com",
                "gender": "MALE",
                "country": "india",
                "state": "up",
                "city": "gonda",
                "pincode": "271604",
                "address": "",
                "date_of_birth": "03-07-2000",
                "password": "AD123"
            }
        ).then((result) => {
            console.log(result)
            setRegisterApiResponse(result.data.result)
            // setShowSuccess(true)
            showModal()
        }).catch((error) => {
            console.log(error.response.data?.message)
        })
        // })
        // .catch((error) => {
        //   console.log(error.response.data);
        //   setOtpErrorMsg(error.response.data?.message);
        // });
        // console.log("registerObj", registerObj, { otp }, varifaction_code_id);
    };
















    return (
        <div className="w-full flex justify-center items-center  min-h-[80vh] ">
            <Card style={{ boxShadow: "20px" }}>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="edit"
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

                    <div className=" w-[100%]  flex justify-between items-center ">
                        <Form.Item
                            className="w-[190px]"
                            name="name"
                            label="Name"
                            initialValue={message?.name}
                            rules={[
                                {
                                    type: "name",
                                    message: "The input is not a valid name!",
                                },
                            ]}
                        >
                            <Input className="w-[230px] ml-3 justify-between items-center" />
                        </Form.Item>
                        <Form.Item
                            name="father_name"
                            label="Father Name"
                            className="w-[380px] "
                            initialValue={message?.father_name}
                            rules={[
                                {
                                    type: "name",
                                    message: "The input is not valid Father Name !",
                                },
                            ]}
                        >
                            <Input className="w-[230px] ml-2 justify-between items-center" />
                        </Form.Item>
                    </div>

                    <div className=" w-[100%]  flex justify-between items-center ">



                        <Form.Item
                            name="gender"
                            className="w-[220px] "
                            label="Gender"
                            initialValue={message?.gender?.toLowerCase()}
                            // initialValue="male"
                            rules={[
                                {
                                    type: "radio",
                                    message: "The input is not valid Gender !",
                                },
                            ]}
                        >
                            <Radio.Group className="w-[230px] ml-1 justify-between items-center">
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                                <Radio value="other">Other</Radio>
                            </Radio.Group>
                        </Form.Item>
                        
                        
                        
                        <Form.Item
                            name="email"
                            label="Email"
                            type="email"
                            className="w-[440px] "
                            initialValue={message?.email}
                            rules={[
                                {
                                    type: "email",
                                    message: (
                                        <p className="w-[200px]  ml-[65px] flex ">
                                            The input is not valid Email !
                                        </p>
                                    ),
                                },
                            ]}
                        >
                            <Input className="w-[235px] ml-10 justify-between items-center" />
                        </Form.Item>
                    </div>

                    <div className=" w-[100%]  flex justify-between items-center ">
                        <Form.Item
                            name="phone"
                            label="Contact"
                            className="w-[220px] "
                            initialValue={message?.phone}
                            rules={[
                                {
                                    type: "contact",
                                    message: "The input is not valid Contact No !",
                                },
                                {
                                    pattern: new RegExp(/^(0|91)?[6-9][0-9]{9}$/),
                                    message: (
                                        <p className="w-[200px]  ml-[52px] flex ">
                                            Invalid Contact No !
                                        </p>
                                    ),
                                },
                            ]}
                            hasFeedback
                        >
                            <Input className="w-[230px] ml-2 justify-between items-center" />
                        </Form.Item>

                        <Form.Item
                            name="country"
                            label="Country"
                            className="w-[420px] "
                            initialValue={message?.country}
                            rules={[
                                {
                                    type: "name",
                                    message: "The input is not valid Country !",
                                },
                            ]}
                        >
                            <Input className="w-[235px] ml-6 justify-between items-center" />
                        </Form.Item>
                    </div>

                    <div className=" w-[100%]  flex justify-between items-center ">
                        <Form.Item
                            name="state"
                            label="State"
                            className="w-[170px] "
                            initialValue={message?.state}
                            rules={[
                                {
                                    type: "name",
                                    message: "The input is not valid State !",
                                },
                            ]}
                        >
                            <Input className="w-[230px] ml-5 justify-between items-center" />
                        </Form.Item>
                        <Form.Item
                            name="city"
                            label="City"
                            className="w-[460px] "
                            initialValue={message?.city}
                            rules={[
                                {
                                    type: "name",
                                    message: "The input is not valid City !",
                                },
                            ]}
                        >
                            <Input className="w-[235px] ml-12 justify-between items-center" />
                        </Form.Item>
                    </div>

                    <div className=" w-[100%]  flex justify-between items-center ">
                        <Form.Item
                            name="address"
                            label="Address"
                            className="w-[220px] "
                            initialValue={message?.address}
                            rules={[
                                {
                                    type: "address",
                                    message: (
                                        <p className="w-[200px]  ml-[60px] flex ">
                                            The input is not valid Address !
                                        </p>
                                    ),
                                },
                            ]}
                        >
                            <Input className="w-[230px] ml-1 justify-between items-center" />
                        </Form.Item>
                        <Form.Item
                            name="pincode"
                            label="Pincode"
                            className="w-[430px] "
                            initialValue={message?.pincode}
                            rules={[
                                {
                                    type: "name",
                                    message: "The input is not valid Pincode !",
                                },
                            ]}
                        >
                            <Input className="w-[240px] ml-6 justify-between items-center" />
                        </Form.Item>
                    </div>
                </Form>
                <Button
                    className="ml-[300px] bg-[blue] text-white"
                    onClick={getVarifactionCode}
                    htmlType="submit"
                >
                    Update
                </Button>

            </Card>

        </div >
    );
};
export default EditProfile;

//5.4.2