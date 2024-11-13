// import react from React
import Image from 'next/image';
import Link from 'next/link'
export default function signUp(){
return(
<>
  {/* <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="./output.css" rel="stylesheet" /> */}
  <title>Sign Up</title>
  {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  /> */}
  {/* <link
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  /> */}
  <div className="grid gap-8 justify-center items-center">
    <div
      id="back-div"
      className=" bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 "style={{width:500}}
    >
      <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
        <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
          Sign Up
        </h1>
        <form action="#" method="post" className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">
              Email
            </label>
            <input
              id="email"
              className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
              type="email"
              placeholder="Email"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 dark:text-gray-400 text-lg"
            >
              Password
            </label>
            <input
              id="password"
              className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
              type="password"
              placeholder="Password"
              required={true}
            />
          </div>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
            type="submit"
          >
            SIGN UP
          </button>
        </form>
        <div className="flex flex-col mt-4 items-center justify-center text-sm">
          <h3>
            <span className="cursor-default dark:text-gray-300">
              Have an account?
            </span>
            <Link
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="/auth/login"
            >
              <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Log In
              </span>
            </Link>
          </h3>
        </div>
        {/* Third Party Authentication Options */}
        <div
          id="third-party-auth"
          className="flex items-center justify-center mt-5 flex-wrap"
        >
          <Link
            href="#"
            className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
            <Image 
              className="max-w-[25px]"
              src="/google.svg"
              alt="Google"
              width={25}
              height={25}
            />
          </Link>
          <Link
            href="#"
            className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
          >
            <Image
              className="max-w-[25px]"
              src="/linkedin.svg"
              alt="Linkedin"
              width={25}
              height={25}
            />
          </Link>
            <Link 
            href="#"
            className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
          >
            <Image
              className="max-w-[25px] filter dark:invert"
              src="/github.svg"
              alt="Github"
              width={25}
              height={25}
            />
          </Link>
          <Link
            href="#"
            className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
          >
            <Image
              className="max-w-[25px]"
              src="/facebook.svg"
              alt="Facebook"
              width={25}
              height={25}
            />
          </Link>
          <Link
            href="#"
            className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
          >
            <Image
              className="max-w-[25px] dark:gray-100"
              src="/twitter.svg"
              alt="twitter"
              width={25}
              height={25}
            />
          </Link>
          <Link
            href="#"
            className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
          >
            <Image
              className="max-w-[25px]"
              src="/apple.svg"
              alt="apple"
              width={25}
              height={25}
            />
          </Link>
        </div>
        <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
          <p className="cursor-default">
            By signing in, you agree to our
            <Link
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="/auth/terms"
            >
              <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Terms
              </span>
            </Link>
            and
            <Link
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="/auth/privacypolicy"
            >
              <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Privacy Policy
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</>
)
}