import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <>
      <section className="bg-gray">
        <div className="container">
          <div className="breadcrumb">
            <h1>CONTACT</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Welcome to contact page</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dicta
            hic nemo ullam veritatis quam ipsa at? Unde obcaecati fuga quia
            perspiciatis laborum cum expedita quos dolore asperiores nostrum
            impedit deleniti earum et at aliquam in rerum, atque beatae
            cupiditate quisquam soluta. Sit quas quod consectetur repellendus
            sint magnam tempore, omnis provident nulla sed, minus dicta
            voluptatem reprehenderit nesciunt! Enim deleniti voluptatum animi
            provident repudiandae est pariatur, voluptas sunt. Consequuntur
            commodi, harum officia quo omnis animi aliquid dignissimos.
            Architecto sunt excepturi ipsum ex quaerat amet ipsam perferendis
            impedit iusto explicabo, eos reiciendis quidem commodi sed atque
            recusandae numquam quo laborum?
          </p>
          <div className="forms-div">
            <Link to="privateform">Private Form</Link>
            <Link to="companyform">Company Form</Link>
          </div>
        </div>
        <Outlet />
      </section>
    </>
  );
}

export default Contact;
