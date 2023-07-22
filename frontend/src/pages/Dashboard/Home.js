import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useLocation , useNavigate} from 'react-router-dom';
import MyProfile from './MyProfile'
// import {  } from 'react-router-dom';
import {
    VerifiedOutlined  ,
  DashboardOutlined ,
  EditOutlined ,
  TeamOutlined,
  UserOutlined,
  FundViewOutlined ,
  BankOutlined ,
  LogoutOutlined ,
  PayCircleOutlined ,
  GiftOutlined ,
  KeyOutlined 
} from '@ant-design/icons';
import EditProfile from './EditProfile';

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
    const { SubMenu } = Menu;
    const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [myProfile, setMyProfile] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const location = useLocation();
//   const payload = location.state?.result;
  const payload = {
    "_id": "6429a793c633df47be57114a",
    "my_sponcer_id": "AD123",
    "refer_sponcer_id": "AD123",
    "position": "LEFT",
    "name": "sonu verma",
    "father_name":"K Kumar",
    "phone": "6387713231",
    "email": "sonu@gmail.com",
    "gender": "female",
    "country": "india",
    "state": "up",
    "city": "gonda",
    "date_of_birth": "03-07-2000",
    "pincode": "271604",
    "address": "jay blr ind",
    "password": "AD123",
    "is_deleted": false,
    "createdAt": "2023-04-02T16:04:35.412Z",
    "updatedAt": "2023-04-02T16:04:35.412Z",
    "__v": 0
}
  
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleLogout = () => {
    navigate('/home')
  };

  const handleMyProfile = () => {
    setMyProfile(true)
    setEditProfile(false)
  };

  const handleEditProfile = () => {
    setEditProfile(true)
    setMyProfile(false)
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div>
          <h2 className="text-white justify-center items-center ml-7 mt-2">GV</h2>
        </div>
        <Menu className="mt-[10px]" theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined  />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            My Team
          </Menu.Item>

          <SubMenu key="3" icon={<VerifiedOutlined  />} title="KYC Details">

            <Menu.Item key="4" icon={<FundViewOutlined />}>
                View Details
            </Menu.Item>
            
            <Menu.Item key="5" icon={<EditOutlined  />}>
                Edit Details
            </Menu.Item>

          </SubMenu>


         <SubMenu key="6" icon={<BankOutlined  />} title="Bank Details">

            <Menu.Item key="7" icon={<FundViewOutlined />}>
                View Details
            </Menu.Item>

            <Menu.Item key="8" icon={<EditOutlined />}>
                Edit Details
            </Menu.Item>

         </SubMenu>


          <Menu.Item key="9" icon={<PayCircleOutlined />}>
            Payout
          </Menu.Item>
      
            <SubMenu  key="10" icon={<UserOutlined />} title="My Account">
                <Menu.Item icon={<FundViewOutlined />}  key="11" onClick={handleMyProfile}>My Profile</Menu.Item>
                <Menu.Item icon={<EditOutlined />} key="12" onClick={handleEditProfile}>Edit Profile</Menu.Item>
                <Menu.Item icon={<GiftOutlined  />} key="13">Welcome Letter</Menu.Item>
                <Menu.Item icon={<KeyOutlined  />} key="14">Change Password</Menu.Item>
            </SubMenu>
       
          <Menu.Item key="15" icon={<LogoutOutlined />} onClick={handleLogout}>
            Logout
          </Menu.Item>
          
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3 className="text-white mt-2"> Welcome 
                <span className="text-green-500"> MR {payload?.name?.toUpperCase()} - {payload?.my_sponcer_id} </span>
            </h3>
            <h3 className="text-white mt-2 mr-7">Home / Dashboard</h3>
          </div>
        </Header>
        <Content style={{ margin: '0 16px' }} >
          {/* {myProfile && <MyProfile {payload} ></MyProfile> } */}
          {myProfile && <MyProfile message={payload} />}
          {editProfile && <EditProfile message={payload} />}
        </Content>


        


<Footer style={{ textAlign: 'center'  }}><span className='text-red-500 font-bold text-xl' >Copyright © 2023 Gramin Vikas. All rights reserved</span></Footer>



      </Layout>
    </Layout>
  );
};

export default Dashboard;























































// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { useLocation } from 'react-router-dom';





// import {
//     DesktopOutlined,
//     PieChartOutlined,
//     FileOutlined,
//     TeamOutlined,
//     UserOutlined,
// } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;

// class Dashboard extends React.Component {
//     state = {
//         collapsed: false,
//     };

//     onCollapse = (collapsed) => {
//         this.setState({ collapsed });
//     };

//     render() {
        
//         // console.log(payload, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
//         const { collapsed } = this.state;

//         return (
            
//             <Layout style={{ minHeight: '100vh' }}>

//                 <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
//                     {/* <div className="logo" /> */}
//                     {/* <p className='font-bold italic text-white text-[30px]'>Gramin Vikas</p> */}
//                     <div>
//                         <h2 className='text-white justify-center items-center ml-[15px] mt-[10px] '>GV</h2>
//                     </div>
//                     <Menu className='mt-[10px]' theme="dark" defaultSelectedKeys={['1']} mode="inline">
//                         <Menu.Item key="1" icon={<PieChartOutlined />}>
//                             Option 1
//                         </Menu.Item>
//                         <Menu.Item key="2" icon={<DesktopOutlined />}>
//                             Option 2
//                         </Menu.Item>
//                         <Menu.Item key="3" icon={<FileOutlined />}>
//                             Option 3
//                         </Menu.Item>
//                         <Menu.Item key="4" icon={<TeamOutlined />}>
//                             Option 4
//                         </Menu.Item>
//                         <Menu.Item key="5" icon={<UserOutlined />}>
//                             Option 5
//                         </Menu.Item>
//                     </Menu>
//                 </Sider>
//                 <Layout className="site-layout">
//                     <Header className="site-layout-background" style={{ padding: 0 }} >

//                         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                             <h3 className="text-white mt-[10px]">Welcome {{}?.name} </h3>
//                             {/* <h3 className="text-white mt-[10px] mr-[15px]">Home =&gt; Dashboard</h3> */}
//                             <h3 className="text-white mt-[10px] mr-[15px]">Home / Dashboard</h3>
//                         </div>

//                     </Header>



//                     <Content style={{ margin: '0 16px' }}>
//                         <div className="site-layout-background" style={{ padding: 20, minHeight: 400 }} >
//                             Content
//                         </div>
//                     </Content>
//                     <Footer style={{ textAlign: 'center' }}>
//                         Ant Design ©2023 Created by Example
//                     </Footer>
//                 </Layout>
//             </Layout>
//         );
//     }
// }

// export default Dashboard;
