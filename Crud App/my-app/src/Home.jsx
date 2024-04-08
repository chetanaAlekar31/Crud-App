import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [state, setState] = useState({
        emp_name: '',
        emp_email: '',
        emp_role: '',
        emp_ctc: '',
        emp_skill: '',
        emp_doc: null
    });

    const saveForm = async (e) => {
        alert('Congrats Successfully Submitted Your Data!!');
        e.preventDefault();
        console.log(state);
        await axios.post('http://localhost:3000/EMP', state);
        setState({
            emp_name: '',
            emp_email: '',
            emp_role: '',
            emp_ctc: '',
            emp_skill: '',
            emp_doc: null
        });
        e.target.info.value=''
    };
    console.log(state);
      
    return (
        <>
            <form action="" onSubmit={(e) => saveForm(e)}>
            <div className="container-fluid">
                <div className="row">
                    
                        
                        <div className="col-md-12">
                            <div className="row text-dark p-4 fw-bold">
                                <div className="col-md-6 my-2">
                                    <div className="form-group">
                                        <label htmlFor="">Enter Your Name:</label>
                                        <input type="text" name="name" className='form-control'value={state.emp_name} onChange={(e) => setState({ ...state, emp_name: e.target.value })} placeholder='Enter your name' />
                                        
                                    </div>
                                </div>
                                
                                <div className="col-md-6 my-2">
                                    <div className="form-group">
                                        <label htmlFor="">Enter Your Email:</label>
                                        <input type="email" name="email" className='form-control'  value={state.emp_email} onChange={(e) => setState({ ...state, emp_email: e.target.value })} placeholder='chetana@gmail.com'  />
                                        
                                    </div>
                                </div>
                                <div className="col-md-6 my-2">
                                    <div className="form-group">
                                        <label htmlFor="">Enter Your Role:</label>
                                        <input type="text" name="text" className='form-control' value={state.emp_role} onChange={(e) => setState({ ...state, emp_role: e.target.value })} placeholder='Full-time' />
                                        
                                    </div>
                                </div>
                                <div className="col-md-6 my-2">
                                    <div className="form-group">
                                        <label htmlFor="">Enter Your CTC:</label>
                                        <input type="Number" name="CTC" className='form-control' value={state.emp_ctc} onChange={(e) => setState({ ...state, emp_ctc: e.target.value })} placeholder='Enter your CTC' />
                                       
                                    </div>
                                </div>
                                <div className="col-md-12  my-2">
                                    <div className="form-group">
                                        <label htmlFor="">Choose Your Skill:</label>
                                        <select name="Skill" id="Skill" className='form-control'  value={state.emp_skill}
                                            onChange={(e) => setState({ ...state, emp_skill: e.target.value })} >
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
                                        <input type="file" className='form-control' name="info" id="info" onChange={(e) => setState({ ...state, emp_doc: e.target.files[0].name })} />
                                      
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
    );
};

export default Home;
