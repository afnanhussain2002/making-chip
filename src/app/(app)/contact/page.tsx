"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

function ContactForm() {
  const [state, handleSubmit] = useForm("xrbgppka");
  if (state.succeeded) {
    return <div className="card bg-primary text-primary-content w-96">
    <div className="card-body">
      <h2 className="card-title">Thanks For Submit</h2>
      <p>Your Message Has Been Sent</p>
      <div className="card-actions justify-end">
       <Link href={"/"}>
       <button className="btn bg-base-200">Go Home</button>
       </Link> 
      </div>
    </div>
  </div>;
  }
  return (
    <form
      action="https://fabform.io/f/{form-id}"
      method="post"
      onSubmit={handleSubmit}
      className="h-screen"
    >
      <div className="pt-10 md:pt-20">
        <div className="p-4 md:p-8">
          <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <div className="flex flex-col items-center">
            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="flex flex-col md:flex-row">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="my-2 py-2 px-4 rounded-md bg-primary text-white w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-white"
                  placeholder="Name"
                  required
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="my-2 py-2 px-4 rounded-md bg-primary text-white w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-white"
                  placeholder="Email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-xs italic"
                />
              </div>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="my-2 py-2 px-4 rounded-md bg-primary text-white w-full outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-white"
              />
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Say Something"
                className="my-2 py-2 px-4 rounded-md bg-primary text-white w-full outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-primary"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
