import React from 'react'

function ContactPage() {
  return (
    <>
    <form action="https://fabform.io/f/{form-id}" method="post">
    <div className="h-screen ">
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
                        className="btn btn-primary"
                    >
                        Send Message
                    </button>
                   
                </div>
            </div>
        </div>
    </div>
</form>

    </>
  )
}

export default ContactPage