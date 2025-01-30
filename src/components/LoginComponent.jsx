
import { Link } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

const LoginComponent = () => {
  return (
    <>
    <HeaderComponent />
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title'>Login</h5>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                            <div id="emailHelp" className="form-text">ll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>

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

export default LoginComponent
