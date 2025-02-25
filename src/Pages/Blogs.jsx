import Footer from "../components/Footer";
import BlogsList from "../components/BlogsList";

function Blogs() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kerala%2Fsunset-1139293_1920.webp?alt=media&token=829f892c-fcde-47ff-8822-854e2b2e7e50"
          alt="Blogs"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center p-6 mt-10 text-[#8c6d31]">
          BLOGS
        </h1>
        <BlogsList />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Blogs;
