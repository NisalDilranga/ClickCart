import React from 'react';

const RePassword = () => {
  return (
    <>
    

    <div className="container">
			<h1 className="mb-5">Manage Your Password</h1>
			<div className="bg-white shadow rounded-lg d-block d-sm-flex">
				<div className="profile-tab-nav border-right">
					<div className="p-4">
						
						<h4 className="text-center">Nisal Dilranga</h4>
					</div>
					<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a className="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
							<i className="fa fa-home text-center mr-1"></i> 
							Password
						</a>
					

					</div>
				</div>
				<div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
					<div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
						<h3 className="mb-4">Password Settings</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label> Old Password</label>
								  	<input type="password" className="form-control" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>New Password</label>
								  	<input type="password" className="form-control" />
								</div>
							</div>
							
					
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div><br/>
                        <a href="">Go Back</a>
					</div>
					     
				  </div>
				 </div>
				</div>
             <div/>           
			
            
		
    
    </>
  )
}

export default RePassword