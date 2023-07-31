import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
// import Content from './Content';
// import {  } from 'react-router-dom';
import Dashboard from './Dashboard';
import MyTeam from "./MyTeam";
import Mykyc from "./Mykyc";
import EditKyc from "./EditKyc";
import MyBackAccount from "./MyBackAccount";
import EditbankAccount from "./EditbankAccount";
import MyPayout from "./MyPayout";
import MyProfile from "./MyProfile";
import EditProfile from "./EditProfile";
import WelcomeLetter from "./WelcomeLetter";
import ChangePassword from "./ChangePassword";

import {
  VerifiedOutlined,
  DashboardOutlined,
  EditOutlined,
  TeamOutlined,
  UserOutlined,
  FundViewOutlined,
  BankOutlined,
  LogoutOutlined,
  PayCircleOutlined,
  GiftOutlined,
  KeyOutlined
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;


const Home = () => {

  const { SubMenu } = Menu;
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [myProfile, setMyProfile] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('/dashboard');
  const [key, setKey] = useState('');
  const [editProfile, setEditProfile] = useState(false);
  const location = useLocation();
  //   const payload = location.state?.result;
  const payload = {
    "_id": "6429a793c633df47be57114a",
    "my_sponcer_id": "AD123",
    "refer_sponcer_id": "AD123",
    "position": "LEFT",
    "name": "sonu verma",
    "father_name": "K Kumar",
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
    console.log('544444444444444444444444444444444444444444444444444444444555555555555555555')
    // setMyProfile(true)
    navigate('/dashboard/profile', { state: payload })
  };
  const handleDashboard = ({ key }) => {
    console.log(key)
    navigate(key);
    setActiveMenuItem(key);

  };

  // const handleEditProfile = () => {
  //   setEditProfile(true)
  //   setMyProfile(false)
  // };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div>
          <h2 className="text-white justify-center items-center ml-7 mt-2">GV</h2>
        </div>
        <Menu className="mt-[10px]" theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleDashboard}>
          <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="/dashboard/team/view" icon={<TeamOutlined />}>
            My Team
          </Menu.Item>

          <SubMenu key="3" icon={<VerifiedOutlined />} title="KYC Details">

            <Menu.Item key="/dashboard/kyc/view" icon={<FundViewOutlined />}>
              View Details
            </Menu.Item>

            <Menu.Item key="/dashboard/kyc/edit" icon={<EditOutlined />}>
              Edit Details
            </Menu.Item>

          </SubMenu>


          <SubMenu key="6" icon={<BankOutlined />} title="Bank Details">

            <Menu.Item key="/dashboard/bank/view" icon={<FundViewOutlined />}>
              View Details
            </Menu.Item>

            <Menu.Item key="/dashboard/bank/edit" icon={<EditOutlined />}>
              Edit Details
            </Menu.Item>

          </SubMenu>


          <Menu.Item key="/dashboard/payout/view" icon={<PayCircleOutlined />}>
            Payout
          </Menu.Item>

          <SubMenu key="10" icon={<UserOutlined />} title="My Account">
            <Menu.Item icon={<FundViewOutlined />} key="/dashboard/profile/view" >My Profile</Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="/dashboard/profile/edit" >Edit Profile</Menu.Item>
            <Menu.Item icon={<GiftOutlined />} key="/dashboard/profile/welcome">Welcome Letter</Menu.Item>
            <Menu.Item icon={<KeyOutlined />} key="/dashboard/profile/password/change">Change Password</Menu.Item>
          </SubMenu>

          <Menu.Item key="/home" icon={<LogoutOutlined />}>
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

        <Content style={{ margin: '0 16px' }}>
          {activeMenuItem === '/dashboard' && (
            /* Component content for Dashboard */
            // <div>Dashboard Content</div>
            <Dashboard />
          )}
          {activeMenuItem === '/dashboard/team/view' && (
            /* Component content for My Team */
            // <div>My Team Content</div>
            <MyTeam />
          )}
          {activeMenuItem === '/dashboard/kyc/view' && (
            /* Component content for View KYC Details */
            // <div>View KYC Details Content</div>
            <Mykyc />
          )}
          {activeMenuItem === '/dashboard/kyc/edit' && (
            /* Component content for Edit KYC Details */
            // <div>Edit KYC Details Content</div>
            <EditKyc />
          )}
          {activeMenuItem === '/dashboard/bank/view' && (
            /* Component content for Edit KYC Details */
            // <div>Edit KYC Details Content</div>
            <MyBackAccount />
          )}
          {activeMenuItem === '/dashboard/bank/edit' && (
            /* Component content for Edit KYC Details */
            // <div>Edit KYC Details Content</div>
            <EditbankAccount />
          )}
          {activeMenuItem === '/dashboard/payout/view' && (
            /* Component content for Edit KYC Details */
            // <div>Edit KYC Details Content</div>
            <MyPayout />
          )}
          {/* Add more conditions for other menu items */}
          {activeMenuItem === '/dashboard/profile/view' && (
            /* Component content for My Profile */
            <MyProfile message={payload} />
          )}
          {activeMenuItem === '/dashboard/profile/edit' && (
            /* Component content for Edit Profile */
            <EditProfile message={payload} />
          )}
          {activeMenuItem === '/dashboard/profile/welcome' && (
            /* Component content for Edit Profile */
            <WelcomeLetter message={payload} />
          )}
          {activeMenuItem === '/dashboard/profile/password/change' && (
            /* Component content for Edit Profile */
            <ChangePassword message={payload} />
          )}
          {activeMenuItem === '/home' && (
            /* Component content for Edit Profile */
            // <ChangePassword message={payload} />
            navigate('/home')
          )}
          {/* Add more conditions for other menu items */}
        </Content>





        <Footer style={{ textAlign: 'center' }}><span className='text-red-500 font-bold text-xl' >Copyright © 2023 Gramin Vikas. All rights reserved</span></Footer>



      </Layout>
    </Layout>
  );
};

export default Home;

// import React, { useState } from 'react';
// import { Layout, Menu } from 'antd';
// import { useLocation, useNavigate } from 'react-router-dom';
// // import Content from './Content';
// // import {  } from 'react-router-dom';
// import MyProfile from './MyProfile'
// import EditProfile from './EditProfile';
// import {
//   VerifiedOutlined,
//   DashboardOutlined,
//   EditOutlined,
//   TeamOutlined,
//   UserOutlined,
//   FundViewOutlined,
//   BankOutlined,
//   LogoutOutlined,
//   PayCircleOutlined,
//   GiftOutlined,
//   KeyOutlined
// } from '@ant-design/icons';


// const { Header, Content, Footer, Sider } = Layout;


// const Dashboard = () => {

//   const { SubMenu } = Menu;
//   const navigate = useNavigate();
//   const [collapsed, setCollapsed] = useState(false);
//   const [myProfile, setMyProfile] = useState(false);
//   const [activeMenuItem, setActiveMenuItem] = useState('/dashboard');
//   const [key, setKey] = useState('');
//   const [editProfile, setEditProfile] = useState(false);
//   const location = useLocation();
//   //   const payload = location.state?.result;
//   const payload = {
//     "_id": "6429a793c633df47be57114a",
//     "my_sponcer_id": "AD123",
//     "refer_sponcer_id": "AD123",
//     "position": "LEFT",
//     "name": "sonu verma",
//     "father_name": "K Kumar",
//     "phone": "6387713231",
//     "email": "sonu@gmail.com",
//     "gender": "female",
//     "country": "india",
//     "state": "up",
//     "city": "gonda",
//     "date_of_birth": "03-07-2000",
//     "pincode": "271604",
//     "address": "jay blr ind",
//     "password": "AD123",
//     "is_deleted": false,
//     "createdAt": "2023-04-02T16:04:35.412Z",
//     "updatedAt": "2023-04-02T16:04:35.412Z",
//     "__v": 0
//   }

//   const onCollapse = (collapsed) => {
//     setCollapsed(collapsed);
//   };

//   const handleLogout = () => {
//     navigate('/home')
//   };

//   const handleMyProfile = () => {
//     console.log('544444444444444444444444444444444444444444444444444444444555555555555555555')
//     // setMyProfile(true)
//     navigate('/dashboard/profile', { state: payload })
//   };
//   const handleDashboard = ({ key }) => {
//     console.log(key)
//     navigate(key);
//     setActiveMenuItem(key);

//   };

//   // const handleEditProfile = () => {
//   //   setEditProfile(true)
//   //   setMyProfile(false)
//   // };

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
//         <div>
//           <h2 className="text-white justify-center items-center ml-7 mt-2">GV</h2>
//         </div>
//         <Menu className="mt-[10px]" theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleDashboard}>
//           <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
//             Dashboard
//           </Menu.Item>
//           <Menu.Item key="/dashboard/team/view" icon={<TeamOutlined />}>
//             My Team
//           </Menu.Item>

//           <SubMenu key="3" icon={<VerifiedOutlined />} title="KYC Details">

//             <Menu.Item key="/dashboard/kyc/view" icon={<FundViewOutlined />}>
//               View Details
//             </Menu.Item>

//             <Menu.Item key="/dashboard/kyc/edit" icon={<EditOutlined />}>
//               Edit Details
//             </Menu.Item>

//           </SubMenu>


//           <SubMenu key="6" icon={<BankOutlined />} title="Bank Details">

//             <Menu.Item key="/dashboard/bank/view" icon={<FundViewOutlined />}>
//               View Details
//             </Menu.Item>

//             <Menu.Item key="/dashboard/bank/edit" icon={<EditOutlined />}>
//               Edit Details
//             </Menu.Item>

//           </SubMenu>


//           <Menu.Item key="/dashboard/payout/view" icon={<PayCircleOutlined />}>
//             Payout
//           </Menu.Item>

//           <SubMenu key="10" icon={<UserOutlined />} title="My Account">
//             <Menu.Item icon={<FundViewOutlined />} key="/dashboard/profile/view" >My Profile</Menu.Item>
//             <Menu.Item icon={<EditOutlined />} key="/dashboard/profile/edit" >Edit Profile</Menu.Item>
//             <Menu.Item icon={<GiftOutlined />} key="/dashboard/profile/welcome">Welcome Letter</Menu.Item>
//             <Menu.Item icon={<KeyOutlined />} key="/dashboard/profile/password/change">Change Password</Menu.Item>
//           </SubMenu>

//           <Menu.Item key="15" icon={<LogoutOutlined />}>
//             Logout
//           </Menu.Item>

//         </Menu>
//       </Sider>
//       <Layout className="site-layout">
//         <Header className="site-layout-background" style={{ padding: 0 }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <h3 className="text-white mt-2"> Welcome
//               <span className="text-green-500"> MR {payload?.name?.toUpperCase()} - {payload?.my_sponcer_id} </span>
//             </h3>
//             <h3 className="text-white mt-2 mr-7">Home / Dashboard</h3>
//           </div>
//         </Header>
//         <Content style={{ margin: '0 16px' }}>
//           {activeMenuItem === '/dashboard/profile' && <MyProfile message={payload}></MyProfile>}
//           {activeMenuItem === '/dashboard/profile/edit' && <EditProfile message={payload}></EditProfile>}
//           {/* Add more conditions for other menu items */}
//         </Content>







//         <Footer style={{ textAlign: 'center' }}><span className='text-red-500 font-bold text-xl' >Copyright © 2023 Gramin Vikas. All rights reserved</span></Footer>



//       </Layout>
//     </Layout>
//   );
// };

// export default Dashboard;



