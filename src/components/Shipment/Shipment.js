import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [user] = useAuthState(auth);

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipment Information</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id=""
            />
          </div>
          <div className="input-group">
            <label htmlFor="text">Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Phone</label>
            <input
              onBlur={handlePhoneBlur}
              type="number"
              name="number"
              id=""
              required
            />
          </div>
          <input
            className="form-submit"
            type="submit"
            value="Ready To Shipment"
          />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
