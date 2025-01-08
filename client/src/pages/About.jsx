export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Tech Thread
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p style={{textAlign: "left"}}>
            Welcome to Tech Thread! Created as a personal project by a passionate developer, 
            Tech Thread aims to share ideas, insights, and experiences in the world of technology.
             Whether it's web development, software engineering, or programming languages, 
             Tech Thread covers a wide range of topics, with a special focus on MERN stack development. 
             With a constant drive to learn and experiment with new technologies, the blog is updated regularly with articles, 
             tutorials, and tips to help you stay ahead in the tech world.
            </p>

            <p style={{textAlign: "left"}}>
            Tech Thread isn't just about sharing knowledge; it's about building a community. 
            We encourage you to interact by leaving comments, liking posts, and engaging with other readers. 
            By learning together, we believe that we can all grow, improve, and keep evolving in this ever-changing field. 
            Join us in exploring the latest trends, tools, and techniques in web development and beyond!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}