import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';


const Userdata = () => {


    const [data, setData] = useState([]);


    const FetchData = async () => {

        //error handling
        try {
            const result = await Axios.get('http://localhost:3000/EMP');
            // console.log(result);
            // console.log(result.data);

            setData(result.data);
            console.log("Success");
        }

        catch (error) {
            console.log(error);
            // console.log(error.message);
        }


    }
    //called after rendering

    useEffect(() => {
        FetchData();
    }, []);



    const DeleteData = async (id) => {
        // alert(id);

        try {
            // filter
            var res = data.filter(val => val.id !== id)
            setData(res);

            await Axios.delete(`http://localhost:3000/Emp/${id}`);
        }

        catch (Error) {
            console.log(Error);
        }

    }

    console.log(data);

    return (
        <>
            <h1 className='my-3 text-center'>Employee Records</h1>


            <table className='table table-bordered table-hover table-striped table-responsive-sm text-center '>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>CTC</th>
                        <th>Skill</th>
                        <th>DOC</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>

                <tbody>
                    {

                        data.map((val, index) => {
                            return (
                                <>

                                    <tr>

                                        <td key={val.id}>{val.id}</td>
                                        <td>{val.emp_name}</td>
                                        <td>{val.emp_email}</td>
                                        <td>{val.emp_role}</td>
                                        <td>{val.emp_ctc}</td>
                                        <td>{val.emp_skill}</td>
                                        <td>{val.emp_doc}</td>
                                        <td><i className='fa fa-trash fw-bold text-danger ' onClick={() => DeleteData(val.id)}></i></td>
                                        <td><NavLink to={`/EditUser/${val.id}`}><i className='fa fa-edit text-success fw-bold'></i></NavLink></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Userdata




