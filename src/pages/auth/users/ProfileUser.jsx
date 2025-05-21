import React, { useState } from "react";
import {
  FaCamera,
  FaEdit,
  FaSave,
  FaTimes,
  FaLock,
  FaUser,
} from "react-icons/fa";
import imageDefaultUser from "../../../assets/images/user.png";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Profile = () => {
  const { register, handleSubmit, setValue } = useForm();

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(imageDefaultUser);

  // 🧪 Données fictives pour simulation
  const fakeUser = {
    full_name: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "+33 6 12 34 56 78",
    pays: "France",
    birthday: "1995-08-22",
    bio: "Étudiant passionné par la tech et le développement web. À la recherche d’opportunités dans le monde du digital.",
    avatar: null, // ou "/uploads/avatar.jpg"
  };

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

      setIsEditing(false);
      toast.success("Modification réussie (simulation)");
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto p-8 bg-white rounded-xl my-6 space-y-6 max-w-4xl"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <img
            src={previewImage || imageDefaultUser}
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
            {fakeUser.full_name}
          </h2>
          <p className="text-sm text-gray-500">{fakeUser.email}</p>
          <p className="text-sm text-gray-500 bg-gray-100 rounded-md mt-2 inline-block px-2 py-1">
            Étudiant
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {["full_name", "phone", "pays", "birthday"].map((field, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded-md shadow-sm">
            <label className="block text-gray-700 mb-1 capitalize">
              {field.replace("_", " ")}
            </label>
            {isEditing ? (
              <input
                type="text"
                {...register(field)}
                defaultValue={fakeUser[field]}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-lg text-gray-800">{fakeUser[field]}</p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-3 rounded-md shadow-sm h-32 overflow-y-auto">
        <label className="block text-gray-700 mb-1">Bio</label>
        {isEditing ? (
          <textarea
            {...register("bio")}
            defaultValue={fakeUser.bio}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        ) : (
          <p className="text-lg text-gray-800">{fakeUser.bio}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button className="flex items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200">
          <FaUser className="text-gray-500" />
          <span className="ml-2 text-gray-700">Télécharger mon CV</span>
        </button>
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
            <span>Mot de passe</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
