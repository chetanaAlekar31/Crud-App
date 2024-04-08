import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';



const Edituser = () => {


    const [emp_name, Setemp_name] = useState('');
    const [emp_role, Setemp_role] = useState('');
    const [emp_email, Setemp_email] = useState('');
    const [emp_ctc, Setemp_ctc] = useState('');
    const [emp_skill, Setemp_skill] = useState('');



    const data = useParams();
    console.log(data);

    const { emp_id } = useParams();


    const nav = useNavigate();


    const getData = async () => {
        var result = await axios.get(`http://localhost:3000/EMP/${emp_id}`);
        console.log(result.data);

        Setemp_name(result.data.emp_name);
        Setemp_email(result.data.emp_email);
        Setemp_ctc(result.data.emp_ctc);
        Setemp_role(result.data.emp_role);
        Setemp_skill(result.data.emp_skill);
    }

    useEffect(() => {
        getData();
    }, [])




    const UpdateForm = async (e) => {

        e.preventDefault();

        alert('congrats successfully updated your data');

        await axios.put(`http://localhost:3000/EMP/${emp_id}`, {
            emp_name: emp_name,
            emp_email: emp_email,
            emp_ctc: emp_ctc,
            emp_role: emp_role,
            emp_skill: emp_skill
        })


        Setemp_name('');
        Setemp_email('');
        Setemp_ctc('');
        Setemp_role('');
        Setemp_skill('');


        nav('/userdata');
    }


    return (
        <>
            <h1 className='text-center my-1  text-dark'>Edit User</h1>

            <form action="" onSubmit={(e) => UpdateForm(e)} >
                <div className="container-fluid">
                    <div className="row">


                        <div className="col-md-12">
                            <div className="row text-dark p-4 fw-bold">
                                <div className="col-md-6 my-2">
                                    <div className="form-group">
                                        <label htmlFor="">Update Your Name:</label>
                                        <input type="text" name="name" className='form-control' value={emp_name} onChange={(e) => Setemp_name(e.target.value)} placeholder='Enter your name' />

                                    </div>
                                </div>

                                <div className="col-md-6 my-2">
                                    <div className="form-group">
                                        <label htmlFor="">Update Your Email:</label>
                                        <input type="email" name="email" className='form-control' value={emp_email} onChange={(e) => Setemp_email(e.target.value)} placeholder='chetana@gmail.com' />

                                    </div>
                                </div>
                                <div className="col-md-6 my-2">
                                    <div className="form-group">
                                        <label htmlFor="">Update Your Role:</label>
                                        <input type="text" name="text" className='form-control' value={emp_role} onChange={(e) => Setemp_role(e.target.value)} placeholder='Full-time' />

                                    </div>
                                </div>
                                <div className="col-md-6 my-2">
                                    <div className="form-group">
                                        <label htmlFor="">Update Your CTC:</label>
                                        <input type="Number" name="CTC" className='form-control' value={emp_ctc} onChange={(e) => Setemp_ctc(e.target.value)} placeholder='Enter your CTC' />

                                    </div>
                                </div>
                                <div className="col-md-12  my-2">
                                    <div className="form-group">
                                        <label htmlFor="">Choose Your Skill:</label>
                                        <select name="Skill" id="Skill" className='form-control' value={emp_skill} onChange={(e) => Setemp_skill(e.target.value)}
                                        >
                                            <option value="_Select_">_Select_</option>
                                            <option value="FrontEnd Developer">FrontEnd Developer</option>
                                            <option value="BackEnd Developer">BackEnd Developer</option>
                                            <option value="MERN Developer">MERN Developer</option>
                                            <option value="Android Developer">Android Developer</option>
                                            <option value="Other">Other</option>
                                        </select>

                                    </div>
                                </div>

                                <div className="col-md-12  my-2">
                                    <div className="form-group">
                                        <label htmlFor="">Upload Your Document:</label>
                                        <input type="file" className='form-control' name="info" id="" />

                                    </div>
                                </div>
                                <div className="col-md-12 text-center my-3">
                                    <button className="btn btn-danger px-4 my-4" type='submit'>Submit</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </form>


        </>
    )
}

export default Edituser