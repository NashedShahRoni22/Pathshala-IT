import React from "react";

export default function Register() {
  const handleRegisteration =(e)=>{
    e.preventDefault();
    
  }
  return (
    <section className="mx-5 md:container md:mx-auto my-10 lg:my-20">
      <h2 className="text-3xl">Join the competition</h2>
      <form onSubmit={handleRegisteration} action="" className="md:w-1/2 flex flex-col gap-2 mt-5">
        <input
          className="px-4 py-2 rounded border border-blue focus:outline-blue"
          placeholder="Enter Name"
          type="text"
          name="name"
          required
        />
        <input
          className="px-4 py-2 rounded border border-blue focus:outline-blue"
          placeholder="Enter Email"
          type="email"
          name="email"
          required
        />
        <input
          className="px-4 py-2 rounded border border-blue focus:outline-blue"
          placeholder="Enter Phone Number"
          type="number"
          name="number"
          required
        />
        <input
          className="px-4 py-2 rounded border border-blue focus:outline-blue"
          placeholder="Enter Password"
          type="password"
          name="password"
          required
        />
        <input
          className="px-4 py-2 rounded border border-blue focus:outline-blue"
          placeholder="Confirm Password"
          type="password"
          name="confirm_password"
          required
        />
        <button className="py-2 bg-blue border border-blue hover:bg-transparent rounded text-white hover:text-blue duration-300 ease-linear font-semibold">
          Register
        </button>
      </form>
    </section>
  );
}
