import React from "react";

const Contact = () => {
  //   const handleContactForm = (e) => {
  //     e.preventDefault();
  //   };
  return (
    <>
      <div
        className="  mt-4 mx-auto sm:w-full md:w-1/2 "
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h1
          id="contact"
          className="uppercase text-center text-4xl  font-extrabold  "
        >
          Contact
        </h1>
        <div className="mt-4 mx-auto w-8 bg-primary p-[2px]"></div>
        <p className="text-center ">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <div
        className="my-20 "
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <form
          action="https://formspree.io/f/xzbwnyjj"
          method="POST"
          //   onSubmit={handleContactForm}
          className="bg-white p-10 sm:w-full md:w-1/2  mx-auto rounded-lg shadow-lg dark:bg-transparent dark:text-white dark:border-2 dark:border-y-white dark:border-x-blue-700"
        >
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text uppercase">What is your name?</span>
            </label>
            <input
              type="text"
              name="name "
              placeholder="Enter Your Name"
              className="input input-bordered w-full p-8  dark:bg-black dark:border-y-white dark:border-x-blue-700"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text uppercase">Email</span>
            </label>
            <input
              type="Email"
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full p-8  dark:bg-black dark:border-y-white dark:border-x-blue-700"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text uppercase">Your Message</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered h-24  dark:bg-black dark:border-y-white dark:border-x-blue-700"
              placeholder="Leave your message here"
              autoComplete="off"
              required
              minLength={10}
            ></textarea>
          </div>
          <div className="">
            <input
              className="btn btn-primary mt-4 "
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
