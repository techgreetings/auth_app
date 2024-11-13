import React from "react";
import Link from "next/link";
const LoginPage: React.FC = () => {
  return (
    <>
      {/* <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="./output.css" rel="stylesheet" /> */}
      <title>Login</title>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /> */}
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
       */}
      <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
        <div className="grid gap-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4">
            <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg p-10 m-2">
              <h1 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
                Log in
              </h1>
              
              <form action="#" method="post" className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">
                    Email
                  </label>
                  <input
                    id="email"
                    className="border p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">
                    Password
                  </label>
                  <input
                    id="password"
                    className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                
                <Link className="group text-blue-400 transition-all duration-100 ease-in-out" href="#">
                  <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Forget your password?
                  </span>
                </Link>
                
                <button
                  className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                  type="submit"
                >
                  LOG IN
                </button>
              </form>
              
              <div className="flex flex-col mt-4 items-center justify-center text-sm">
                <h3 className="dark:text-gray-300">
                  Don&apos;t have an account?
                  <Link className="group text-blue-400 transition-all duration-100 ease-in-out" href="/auth/signup">
                    <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Sign Up
                    </span>
                  </Link>
                </h3>
              </div>
              
              {/* <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                <p className="cursor-default">
                  By signing in, you agree to our 
                  <Link className="group text-blue-400 transition-all duration-100 ease-in-out" href="/auth/terms">
                    <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Terms
                    </span>
                  </Link>  */}
                  {/* and  */}
                  {/* <Link className="group text-blue-400 transition-all duration-100 ease-in-out" href="/auth/privacypolicy">
                    <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      
                     Privacy Policy
                    </span>
                  </Link> */}
                {/* </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
