import React from "react";

function ImageOptimize() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Image Optimization!</h1>
          <p className="py-6">
            Welcome to our Image Optimization page! Here, you can easily
            compress and resize images without compromising quality, making them
            faster to load and more efficient for your website. Optimize your
            images with just a few clicks to enhance performance and improve
            user experience.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
            <div className="form-control mt-6">
              <button className="btn btn-primary">Optimize</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImageOptimize;
