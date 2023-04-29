import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://creative-agency-server-9jtj.onrender.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("Admin added Successfully");
    document.getElementById("form-reset").reset();
    console.log(data);
  };
  return (
    <div>
      <h1 className="mb-3">Add New admin</h1>
      <form id="form-reset" onSubmit={handleSubmit(onSubmit)}>
        <div class="input-group w-25 mx-auto mb-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        {/* <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        /> */}

        <input
          className="submit-btn btn btn-outline-dark px-2 mt-2"
          type="submit"
          value="Make Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
