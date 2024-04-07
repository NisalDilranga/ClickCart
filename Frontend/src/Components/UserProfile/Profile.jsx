
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./profile.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    
    const navigate = useNavigate();
  return (
    <>
    <div className="container">
			<h1 className="mb-5">Manage Your Profile</h1>
			<div className="bg-white shadow rounded-lg d-block d-sm-flex">
				<div className="profile-tab-nav border-right">
					<div className="p-4">
						
						<h4 className="text-center">Nisal Dilranga</h4>
					</div>
					<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a className="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
							<i className="fa fa-home text-center mr-1"></i> 
							Account
						</a>
					

					</div>
				</div>
				<div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
					<div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
						<h3 className="mb-4">Account Settings</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label> Name</label>
								  	<input type="text" className="form-control" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Index Number</label>
								  	<input type="text" className="form-control" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Email</label>
								  	<input type="text" className="form-control" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Phone number</label>
								  	<input type="text" className="form-control" />
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

export default Profile