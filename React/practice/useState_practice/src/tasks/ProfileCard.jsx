import React from 'react'

const ProfileCard = (props) => {
  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-white shadow-lg rounded-xl text-center">
      <img
        className="w-24 h-24 mx-auto rounded-full"
        src={props.img} // Placeholder image
        alt="Profile"
      />
      <h2 className="text-xl font-bold mt-2">{props.name}</h2> {/* Name */}
      <p className="text-gray-600"> {props.role} </p> {/* Role */}
    </div>
  )
}

export default ProfileCard