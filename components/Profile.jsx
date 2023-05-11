import EmploymentCard from "./EmploymentCard"

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left"><span className="blue_gradient">{name} Profile</span></h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
    {data.map((post) => (
      <EmploymentCard 
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