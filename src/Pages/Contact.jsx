import React, { useRef, useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setData((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname} . My mobile Number is ${data.phone} Email is ${data.email} and Message is ${data.msg}`
    );
    setData("");
  };

  const nameElement = useRef();
  const numberElement = useRef();
  const emailElement = useRef();
  const messageElement = useRef();

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div text">
        <div className="row ">
          <div className="col-md-6 col-10 mx-auto">
            <form action="" onSubmit={formSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your full name"
                  ref={nameElement}
                  onChange={inputChange}
                  value={data.fullname}
                  name="fullname"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  ref={numberElement}
                  id="exampleFormControlInput1"
                  placeholder="Enter your Mobile number"
                  onChange={inputChange}
                  value={data.phone}
                  name="phone"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  ref={emailElement}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  onChange={inputChange}
                  value={data.email}
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  ref={messageElement}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message me"
                  onChange={inputChange}
                  value={data.msg}
                  name="msg"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
