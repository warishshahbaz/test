
import {
  Button,
  Card,
  Form,
  Input,
} from "antd";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config/config'


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

const Register = () => {
  const navigate = useNavigate();
  const [sponcerToggle, setSponcerToggle] = useState(false);

  const [sponcerId, setSponcerId] = useState("");
  const [errorHandle, setErrorHandle] = useState(false);


  const [registerObj, setRegisterObj] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    setRegisterObj(values);
  };


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  const setSponcerIdHandler = (e) => {
    setErrorHandle(false);
    setSponcerId(e.target.value);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const submitSponcerHandler = () => {
    console.log("Received SponcerId Handler : ", sponcerId);
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
    setIsModalOpen(true);
  };

  return (
    <div className="w-full flex justify-center items-center  min-h-[100vh] bg-[#ffd6e7]">
      <Card style={{ boxShadow: "20px" }}>
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
          {!sponcerToggle ? (
            <>
              <h1 className="text-center mb-3 text-[green] ">
                Verify Sponcer ID
              </h1>
              <div className=" w-[100%] min-w-[400px] h-[40px] flex justify-around  content-start ">
                <Form.Item
                  name="sponcer_id"
                  label={<h6 className="mb-2 font-med">Sponcer ID :</h6>}
                  rules={[
                    {
                      type: "name",
                      message: "The input is not valid Sponcer ID !",
                    },
                    {
                      required: true,
                      message: (
                        <p className="w-[200px]  ml-[8px] flex ">
                          Please fill your Sponcer ID !
                        </p>
                      ),
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    type="primary"
                    className="w-[170px] ml-2"
                    onChange={setSponcerIdHandler}
                  />
                </Form.Item>
                <Button
                  onClick={submitSponcerHandler}
                  className="bg-[blue] text-white mb-4 "
                  htmlType="submit"
                >
                  Verify
                </Button>
                {/* <Button
                  onClick={submitSponcerHandler}
                  style={{ background: '#0070f3', color: 'white', marginBottom: '4px' }}
                  htmlType="submit"
                >
                  Verify
                </Button> */}


              </div>
              {errorHandle && (
                <h5 className="text-[red] ">Invalid Sponcer ID !</h5>
              )}
            </>
          ) : navigate('/register', { state: { refer_sponcer_id: sponcerId } })}
        </Form>
      </Card>
    </div >
  );
};
export default Register;