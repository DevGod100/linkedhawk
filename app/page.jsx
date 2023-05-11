// import Feed from '@components/Feed';
import Link from "next/link"

const page = () => {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
      Filter Efficiently
       <br></br>
        <span className="blue_gradient text-center">
         & hire faster than ever </span>
      </h1>
      <p className="desc text-center">
         Sift through thousands of profiles in seconds, and find the right people. 
      </p>

<Link href='/candidates-search' className=" text-lg head_text green_gradient bg-gray-200 p-10 border  border-black rounded-md mt-50">Find Candidates!</Link>
{/* <Feed /> */}
    </section>
  )
}

export default page