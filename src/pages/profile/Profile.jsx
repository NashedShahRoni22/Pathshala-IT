import React, { useContext, useRef, useState } from "react";
import userImg from "../../assets/about/user.png";
import { RxUpdate } from "react-icons/rx";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpdateProfile = async (id) => {
    const formData = new FormData();
    formData.append("profile_image", file);
    try {
      const headers = new Headers({
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      });
      const response = await fetch(
        `https://api.pathshalait.com/api/v1/client/admin/profile/update/${id}`,
        {
          method: "POST",
          headers,
          body: formData,
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.status === true) {
        toast.success(responseData.message);
        window.location.reload();
      } else {
        toast.error(responseData.message);
        console.log(
          "Error making POST request. Status code: " + response.status
        );
      }
    } catch (error) {
      console.log("Error making POST request: " + error);
    } finally {
    }
  };
  return (
    <section className="mx-5 md:container md:mx-auto my-10 md:flex items-center justify-center">
      <div className="shadow rounded p-8">
        <div className="flex justify-between">
          <h1 className="text-[20px] md:text-[24px]">My Profile</h1>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:gap-8 mt-8">
          {edit ? (
            <div className="flex flex-col items-center gap-2">
              <img
                className="h-[80px] w-[80px] rounded-full"
                src={file ? URL.createObjectURL(file) : ""}
                alt="Upload Image"
              />

              <input
                type="file"
                ref={inputRef}
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <div className="flex gap-1">
                <button
                  className="px-2 py-1 bg-blue text-white"
                  onClick={() => inputRef.current.click()}
                >
                  Upload
                </button>
                {file === null ? (
                  <button
                    className="px-2 py-1 bg-orange text-white"
                    onClick={() => setEdit(false)}
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    className="px-2 py-1 bg-orange text-white"
                    onClick={() => handleUpdateProfile(user?.student_id)}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              {user?.profile_image === null ? (
                <img
                  src={userImg}
                  alt=""
                  className="h-[60px] w-[60px] rounded-full"
                />
              ) : (
                <img
                  src={user?.profile_image}
                  alt=""
                  className="h-[60px] w-[60px] rounded-full"
                />
              )}

              <button
                onClick={() => setEdit(true)}
                className="flex items-center gap-1.5 px-2 py-1 bg-blue text-white rounded"
              >
                {" "}
                <RxUpdate /> Change{" "}
              </button>
            </div>
          )}

          <div className="grid md:grid-cols-2">
            <h1 className="text-[18px] md:text-[22px]">Student ID:</h1>
            <p className="text-[20px] md:text-[24px]">{user?.student_id}</p>
            <h1 className="text-[18px] md:text-[22px]">Full Name:</h1>
            <p className="text-[20px] md:text-[24px]">{user?.name}</p>
            <h1 className="text-[18px] md:text-[22px]">Date of Birth:</h1>
            <p className="text-[20px] md:text-[24px]">{user?.dob}</p>
            <h1 className="text-[18px] md:text-[22px]">Email:</h1>
            <p className="text-[20px] md:text-[24px]">{user?.email}</p>
            <h1 className="text-[18px] md:text-[22px]">Phone:</h1>
            <p className="text-[20px] md:text-[24px]">{user?.phone_number}</p>
            <h1 className="text-[18px] md:text-[22px]">Gurdian Name:</h1>
            <p className="text-[20px] md:text-[24px]">{user?.guardian_name}</p>
            <h1 className="text-[18px] md:text-[22px]">Gurdian Phone:</h1>
            <p className="text-[20px] md:text-[24px]">
              {user?.guardian_number}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
