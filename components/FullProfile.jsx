import LongEmploymentCard from "./LongEmploymentCard"

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="m-10">
      <h1 className="head_text text-left"><span className="blue_gradient">{name} Profile</span></h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 p-8 border border-gray-100 shadow-lg rounded-md">
    {data.map((post) => (
      <LongEmploymentCard 
      key={post._id}
      post={post}
      handleEdit={() => handleEdit(post)}
      handleDelete={() => handleDelete(post)}
      />
    ))}
    </div>
    </section>
  )
}

export default Profile