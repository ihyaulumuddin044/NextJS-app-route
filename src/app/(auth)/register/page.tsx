import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center text-black">
          Register Page
        </h1>
        <form action="" className="mt-6">
          <div className="my-5 text-sm">
            <label htmlFor="username" className="block text-black">
              Username
            </label>
            <input
              type="text"
              autoFocus
              id="username"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full text-black"
              placeholder="Username"
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              type="text"
              autoFocus
              id="email"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full text-black"
              placeholder="Email"
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="text"
              id="password"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full text-black"
              placeholder="Password"
            />
          </div>

          <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
            register
          </button>
        </form>

        <p className="mt-12 text-xs text-center font-light text-gray-400">
          Do you have an account?{" "}
          <Link href="/login" className="text-black font-medium">
            Sigh up
          </Link>
        </p>
      </div>
    </div>
  );
}
