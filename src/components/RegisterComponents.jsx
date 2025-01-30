import { Link } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

const RegisterComponents = () => {
  return (
    <>
    <HeaderComponent />
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title'>Register</h5>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Full Name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Username</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Role</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                        
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                    <Link to="/login" className="nav-link active" > <span style={{ fontSize: "17px"}}>Login</span></Link>
                                    <Link to="/register" className="nav-link active" > <span style={{ fontSize: "17px"}}>Register</span></Link>
                                    <Link to="/home" className="nav-link active" > <span style={{ fontSize: "17px"}}>Home</span></Link>
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
