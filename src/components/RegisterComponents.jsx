import { Link } from 'react-router-dom';

const RegisterComponents = () => {
  return (
    <>
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                <div className='col-xl-5 col-lg-5 col-md-8 col-sm-12'>
                    <div className='card card-custome' style={{backgroundColor: "rgba(138, 194, 204, 0.06)"}}>
                            <div className='card-body'>
                                
                                <div className='content-auth'>
                                    <div className='text-center'>
                                    <h4>Register</h4> 
                                    
                                    </div>
                                    <div className='auth'>
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Full Name</label>
                                            <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" style={{backgroundColor: "rgba(28, 53, 32, 0.08)"}} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Username</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{backgroundColor: "rgba(28, 53, 32, 0.08)"}}/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{backgroundColor: "rgba(28, 53, 32, 0.08)"}}/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Role</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{backgroundColor: "rgba(28, 53, 32, 0.08)"}}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">Register</button>
                                    </form>

                                    <div className='text-center mt-4'>
                                        <span >Already have an account <Link to="/login"> Login</Link></span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>   
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RegisterComponents
