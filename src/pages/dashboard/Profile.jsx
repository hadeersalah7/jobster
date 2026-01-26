import React from 'react'
import { useState } from "react";
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from '../../features/user/userSlice';
const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastName, email, location } = userData;
    console.log("data: ", userData)
    if (!name || !lastName || !email || !location) {
      toast.error("Please Provide All Values!")
      return;
    }
    dispatch(updateUser({name, lastName, email, location}))
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  }
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>

        <div className="form-center">
          <FormRow
            name="name"
            value={userData.name}
            type="text"
            handleChange={handleChange}
          />

          <FormRow
            name="lastName"
            value={userData.lastName}
            type="text"
            handleChange={handleChange}
            labelText="Last Name"
          />

          <FormRow
            name="email"
            value={userData.email}
            type="email"
            handleChange={handleChange}
          />

          <FormRow
            name="location"
            value={userData.location}
            type="text"
            handleChange={handleChange}
          />

          <button className='btn btn-block' type="submit" disabled={isLoading}>
                {isLoading ? "Loading, Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Profile