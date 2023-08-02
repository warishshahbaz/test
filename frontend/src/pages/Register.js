import { Button, Card, Form, Input, Radio, Modal } from "antd";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import Timer from "../components/Timer";
import axios from "axios";
import { BASE_URL } from "../config/config";
import SuccessRegister from "./SuccessRegister";

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

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('ooooooooooooooooooooooooooooooooo', location.state)
  const refer_sponcer_id = location?.state?.refer_sponcer_id;

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
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [payload, setPayload] = useState({});

  const [pageCardStyle, setpageCardStyle] = useState(
    JSON.stringify({
      boxShadow: "20px",
      marginBottom: "10px",
      marginTop: "10px",
      minHeight: "10vh",
    })
  );
  const cardStyle = JSON.parse(pageCardStyle);

  const onFinish = (values) => {
    values.refer_sponcer_id = refer_sponcer_id;
    console.log("Success:", values);
    setRegisterObj(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const showModal = () => {
  //     setIsModalOpen(true);
  // };

  // const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  // const handleCancel = () => {
  //     setIsModalOpen(false);
  // };

  const getVarifactionCode = () => {
    console.log(registerObj.phone, registerObj);
    if (registerObj?.phone) {
      console.log(registerObj.phone);
      setOtpMobNo(registerObj.phone);
      axios
        .post(`${BASE_URL}/api/user/get_varifaction_code`, {
          // phone: registerObj.phone ,
          phone: "6387465973",
        })
        .then((result) => {
          console.log(result.data);

          setVarifaction_code_id(result.data?.varifaction_code_id);
          setpageCardStyle(
            JSON.stringify({
              boxShadow: "20px",
              minHeight: "105vh",
              marginTop: "8px",
              marginBottom: "10px",
            })
          );
          setOtpToggle(true);
        })
        .catch((error) => {
          console.log(error.response.data);
          setErrorHandle(true);
        });
    }
  };

  const resendOtp = () => {
    setSeconds(90);
    getVarifactionCode();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleRegister = () => {
    axios
      .post(`${BASE_URL}/api/user/verify_varifaction_code`, {
        varifaction_code: Number(otp),
        varifaction_code_id: varifaction_code_id,
      })
      .then((result) => {
        // setIsModalOpen(true)
        console.log(registerObj, "{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{");
        axios
          .post(
            `${BASE_URL}/api/user/register`,
            registerObj
            // {
            //     "refer_sponcer_id": registerObj.refer_sponcer_id,
            //     "position": "left",
            //     "name": "sonu verma",
            //     "father_name": "Rajitrem verma",
            //     "phone": registerObj.phone || '6387465973',
            //     "email": "sonu@gmail.com",
            //     "gender": "MALE",
            //     "country": "india",
            //     "state": "up",
            //     "city": "gonda",
            //     "pincode": "271604",
            //     "address": "",
            //     "date_of_birth": "03-07-2000",
            //     "password": "AD123"
            // }
          )
          .then((result) => {
            console.log(result);
            setRegisterApiResponse(result.data.result);
            // setPagePropertyColor('white')
            // setfillDetailsColor('white')
            setShowSuccess(true);
            showModal();
          })
          .catch((error) => {
            console.log(error.response.data?.message);
          });
      })
      .catch((error) => {
        console.log(error.response.data);
        setOtpErrorMsg(error.response.data?.message);
      });
    // console.log("registerObj", registerObj, { otp }, varifaction_code_id);
  };

  return (
    <div className="w-full over-flow-[auto] flex justify-center items-center min-h-[100vh] bg-[#ffd6e7]">
      <Card style={cardStyle} className="over-flow-[auto]">
        <Form
          {...formItemLayout}
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
          <h3 className="text-center mb-4 text-[green] bg-[white]">
            Fill Your Details
          </h3>

          <div className=" w-[100%]  flex justify-between items-center ">
            <Form.Item
              className="w-[190px]"
              name="name"
              label="Name"
              rules={[
                {
                  type: "name",
                  message: "The input is not valid Name !",
                },
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[52px] flex ">
                      Please fill your Name !
                    </p>
                  ),
                },
              ]}
              hasFeedback
            >
              <Input className="w-[230px] ml-3 justify-between items-center" />
            </Form.Item>
            <Form.Item
              name="father_name"
              label="Father Name"
              className="w-[380px] "
              rules={[
                {
                  type: "name",
                  message: "The input is not valid Father Name !",
                },
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[28px] flex ">
                      Please fill your Father Name !
                    </p>
                  ),
                },
              ]}
              hasFeedback
            >
              <Input className="w-[230px] ml-2 justify-between items-center" />
            </Form.Item>
          </div>
          <div className=" w-[100%]  flex justify-between items-center ">
            <Form.Item
              className="w-[220px] "
              name="position"
              label="Position"
              rules={[
                {
                  type: "radio",
                  message: "The input is not valid Position !",
                },
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[10px] flex ">
                      Please choose your Position !
                    </p>
                  ),
                },
              ]}
              hasFeedback
            >
              <Radio.Group className="w-[230px] ml-1 justify-between items-center">
                <Radio value="Left">Left</Radio>
                <Radio value="Right">Right</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="date_of_birth"
              label="DOB"
              className="w-[450px] "
              rules={[
                {
                  type: "date",
                  message: "The input is not valid DOB !",
                },
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[100px] flex ">
                      Please fill your DOB !
                    </p>
                  ),
                },
              ]}
              hasFeedback
            >
              <Input
                type="date"
                className="w-[235px] ml-12 justify-between items-center"
              />
            </Form.Item>
          </div>
          <div className=" w-[100%]  flex justify-between items-center ">
            <Form.Item
              name="gender"
              className="w-[220px] "
              label="Gender"
              rules={[
                {
                  type: "radio",
                  message: "The input is not valid Gender !",
                },
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[22px] flex ">
                      Please choose your Gender !
                    </p>
                  ),
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
              rules={[
                {
                  type: "email",
                  message: (
                    <p className="w-[200px]  ml-[65px] flex ">
                      The input is not valid Email !
                    </p>
                  ),
                },
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[90px] flex ">
                      Please fill your Email !
                    </p>
                  ),
                },
              ]}
              hasFeedback
            >
              <Input className="w-[235px] ml-10 justify-between items-center" />
            </Form.Item>
          </div>
          <div className=" w-[100%]  flex justify-between items-center ">
            <Form.Item
              name="phone"
              label="Contact"
              className="w-[220px] "
              rules={[
                {
                  type: "contact",
                  message: "The input is not valid Contact No !",
                },
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[32px] flex ">
                      Please fill your Contact No !
                    </p>
                  ),
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
              hasFeedback
              rules={[
                {
                  type: "name",
                  message: "The input is not valid Country !",
                },
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[60px] flex ">
                      Please fill your Country !
                    </p>
                  ),
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
              hasFeedback
              rules={[
                {
                  type: "name",
                  message: "The input is not valid State !",
                },
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[60px] flex ">
                      Please fill your State !
                    </p>
                  ),
                },
              ]}
            >
              <Input className="w-[230px] ml-5 justify-between items-center" />
            </Form.Item>
            <Form.Item
              name="city"
              label="City"
              className="w-[460px] "
              hasFeedback
              rules={[
                {
                  type: "name",
                  message: "The input is not valid City !",
                },
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[90px] flex ">
                      Please fill your City !
                    </p>
                  ),
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
              hasFeedback
            >
              <Input className="w-[230px] ml-1 justify-between items-center" />
            </Form.Item>
            <Form.Item
              name="pincode"
              label="Pincode"
              className="w-[430px] "
              hasFeedback
              rules={[
                {
                  type: "name",
                  message: "The input is not valid Pincode !",
                },
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[70px] flex ">
                      Please fill your Pincode !
                    </p>
                  ),
                },
              ]}
            >
              <Input className="w-[240px] ml-6 justify-between items-center" />
            </Form.Item>
          </div>
          <div className="flex w-[100%] mr-[72px] justify-between items-center">
            <Form.Item
              name="password"
              label="Password"
              className="w-[320px] ml-[12px] "
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[15px] flex ">
                      Please confirm your password !
                    </p>
                  ),
                },
              ]}
            >
              <Input.Password className="w-[230px] mr-[64px] " />
            </Form.Item>

            <Form.Item
              name="confirm_password"
              label="Confirm Password"
              className="w-[380px]   "
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: (
                    <p className="w-[200px]  ml-[50px] flex ">
                      Please confirm your password !
                    </p>
                  ),
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords not match !"));
                  },
                }),
              ]}
            >
              <Input.Password style={{ width: "250px", marginLeft: "23px" }} />
            </Form.Item>
          </div>

          {otpToggle && (
            <div className="flex justify-between items-center w-full flex-col gap-3 mt-[20px] ">
              <h4 className="text-center mt-[0px] text-[green] ">
                Varifaction code send to{" "}
                <span className="text-[black] text-xl">
                  ******{otpMobNo?.substr(6)}
                </span>
              </h4>

              <div className="flex gap-4 ">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  inputStyle={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid gray",
                    borderRadius: "6px",
                    gap: 4,
                  }}
                  numInputs={4}
                  renderSeparator={<span className="mr-4 "> </span>}
                  renderInput={(props) => <input {...props} />}
                />
                <Timer setSeconds={setSeconds} seconds={seconds} />
              </div>

              <div className="flex justify-between items-center w-full flex-col gap-3 mr-6">
                <h5 className="text-[red]">{otpErrorMsg}</h5>
              </div>
              <div className="flex justify-between gap-3 mr-8">
                <Button
                  className="bg-[blue] text-white mb-4"
                  htmlType="submit"
                  onClick={resendOtp}
                >
                  Resend code
                </Button>

                <Button
                  {...tailFormItemLayout}
                  onClick={handleRegister}
                  className="bg-[blue] text-white "
                  htmlType="submit"
                >
                  Register
                </Button>
              </div>
            </div>
          )}

          <div className="flex w-[100%] justify-center items-center ">
            <Button
              className={`bg-[blue] text-white mt-3 ${
                otpToggle ? "hidden" : "block"
              } `}
              onClick={getVarifactionCode}
              htmlType="submit"
            >
              Get Verifaction Code
            </Button>
          </div>
        </Form>
      </Card>

      {/* {showSuccess && <Modal> <SuccessRegister message={registerApiResponse} /></Modal>} */}

      <Modal footer={null} open={isModalOpen}>
        <SuccessRegister message={registerApiResponse} />
      </Modal>
    </div>
  );
}
