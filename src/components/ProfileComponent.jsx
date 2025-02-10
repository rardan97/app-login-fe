import { useEffect, useState } from "react";


const ProfileComponent = () => {

   const [users, setUsers] = useState([]);
     
   useEffect(() => {
       
    const userTemp = localStorage.getItem("userData");
    if(userTemp){
        const parsedUserTemp = JSON.parse(userTemp);
        setUsers({username: parsedUserTemp.userName, roles: parsedUserTemp.roles})
    } else{
        console.log("user nullll");
    }
         
        
        
      }, []);

  // console.log(user);
  return (
    <>
    <div className="container-fluid">
    <div className="card border-0">
      <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-center">
              <div>
               
              <img src="..." className="rounded mx-auto d-block" alt="..."></img>
              <h5>{users.username}</h5>

              </div>
              
              </div>
            </div>
           
          </div>
        </div>
        <div className="col-sm-9">
          <div className="card">
            <div className="card-body">
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Full Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="staticEmail" value={users.username}/>
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="staticEmail" value={users.username}/>
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="staticEmail" value={users.username}/>
              </div>
            </div>
            
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" value={users.username}/>
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Role</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="staticEmail" value={users.roles}/>
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

export default ProfileComponent
