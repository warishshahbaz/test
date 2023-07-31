import moment from 'moment';
import { Button, Card } from "antd";
import { useLocation, useNavigate } from 'react-router-dom';

const MyProfile = ({ message }) => {
    return (
        <div className="justify-center items-center w-[50vh] ml-[600px] mt-[150px] ">
            <Card style={{ boxShadow: "20px" }}>



                {/* <img
                className="position-right shadow-lg grid row-span-2 md:h-[400px] md:w-[400px] object-contain h-[100%] object-cover"
                src={message.pro}
                alt="sonu"
                style={{ float: 'right', marginRight: '10px', marginTop: '10px' }}
            /> */}


                <table className='assoc-table'>
                    <tr>

                        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <td className='font-bold italic text-black text-xl'>My Sponcer ID :</td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.my_sponcer_id}</td>
                        <img
                            className=" shadow-lg   grid row-span-2 md:h-[600px] md:w-[100%]  object-contain h-[100%]  object-cover"
                            src="./image/sonu.jpg"
                            alt="sonu"
                        />
                    </div> */}

                        <td className='font-bold italic text-black text-xl'>My Sponcer ID :</td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.my_sponcer_id}</td>

                    </tr>
                    <tr>
                        <td className='font-bold italic text-black text-xl'>Name :</td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.name}</td>
                    </tr>
                    <tr>
                        <td className='font-bold italic text-black text-xl' >Father Name :</td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.father_name}</td>
                    </tr>
                    <tr>
                        <td className='font-bold italic text-black text-xl' >Phone NO :</td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.phone}</td>
                    </tr>
                    <tr>
                        <td className='font-bold italic text-black text-xl' >Email : </td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.email}</td>
                    </tr>
                    <tr>
                        <td className='font-bold italic text-black text-xl' >Gender :</td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.gender}</td>
                    </tr>
                    <tr>
                        <td className='font-bold italic text-black text-xl' >Country : </td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.country}</td>
                    </tr>
                    <tr>
                        <td className='font-bold italic text-black text-xl' >State : </td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.state}</td>
                    </tr>
                    <tr>
                        <td className='font-bold italic text-black text-xl' >City :</td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.city}</td>
                    </tr>
                    <tr>
                        <td className='font-bold italic text-black text-xl' >Pincode :</td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.pincode}</td>
                    </tr>
                    <tr>
                        <td className='font-bold italic text-black text-xl' >Address :</td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.address}</td>
                    </tr>
                    <tr>
                        <td className='font-bold italic text-black text-xl' >DOB :</td>
                        <td className='font-bold text-blue-800 text-xl'>{message?.date_of_birth}</td>
                    </tr>


                </table>



                {/* </> */}

            </Card>

        </div >
    );
};

export default MyProfile;

// flex-row
