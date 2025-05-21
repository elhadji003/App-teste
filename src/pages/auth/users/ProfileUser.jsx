import React, { useEffect, useState } from "react";
import {
  FaCamera,
  FaEdit,
  FaSave,
  FaTimes,
  FaLock,
  FaUser,
} from "react-icons/fa";
import imageDefaultUser from "../../../assets/images/user.png";
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from "../../../backend/features/auth/authAPI";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Profile = () => {
  const { data: user, error, refetch } = useGetMeQuery();
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const { register, handleSubmit, setValue } = useForm();

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(imageDefaultUser);

  useEffect(() => {
    if (user) {
      setValue("full_name", user?.full_name || "");
      setValue("email", user?.email || "");
      setValue("phone", user?.phone || "");
      setValue("pays", user?.pays || "");
      setValue("birthday", user?.birthday || "Exp: 1990-01-01");
      setValue("bio", user?.bio || "");
      setPreviewImage(user.avatar || imageDefaultUser);
    }
  }, [user, setValue]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (formData) => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      if (profileImage) data.append("avatar", profileImage);

      await updateProfile({ userId: user?.id, formData: data });
      refetch();
      setIsEditing(false);
      toast.success("Modification réussie");
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto p-8 bg-white rounded-xl my-6 space-y-6"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <img
            src={`http://127.0.0.1:8000${user?.avatar}`}
            onError={(e) => {
              e.currentTarget.src = imageDefaultUser;
            }}
            alt="User Avatar"
            className="w-44 h-44 rounded-full object-cover border-2 border-gray-100 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          {isEditing && (
            <div className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="profileImageInput"
              />
              <label htmlFor="profileImageInput" className="cursor-pointer">
                <FaCamera color="white" />
              </label>
            </div>
          )}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {user?.full_name}
          </h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
          <p className="text-sm text-gray-500 bg-gray-100 rounded-md mt-2">
            Etudiant
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {["full_name", "phone", "pays", "birthday"].map((field, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded-md shadow-sm">
            <label className="block text-gray-700 mb-1">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {isEditing ? (
              <input
                type="text"
                {...register(field)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-lg text-gray-800">{user?.[field]}</p>
            )}
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-3 rounded-md shadow-sm h-32 overflow-y-auto">
        <label className="block text-gray-700 mb-1">Bio</label>
        {isEditing ? (
          <textarea
            {...register("bio")}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        ) : (
          <p className="text-lg text-gray-800">{user?.bio}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button className="flex items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200">
          <FaUser className="text-gray-500" />
          <span className="ml-2 text-gray-700">Telecharger mon CV</span>
        </button>{" "}
        <div className="flex justify-end space-x-4 mt-4">
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 text-white bg-gray-600 rounded-md flex items-center space-x-2"
          >
            {isEditing ? <FaTimes /> : <FaEdit />}
            <span>{isEditing ? "Annuler" : "Modifier"}</span>
          </button>
          {isEditing && (
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-md flex items-center space-x-2"
            >
              <FaSave />
              <span>Sauvegarder</span>
            </button>
          )}
          <button
            type="button"
            className="px-4 py-2 text-white bg-blue-500 rounded-md flex items-center space-x-2"
          >
            <FaLock />
            <span>Modifier mot de passe</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
