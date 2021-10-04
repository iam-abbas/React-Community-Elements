import { ChevronDoubleDownIcon } from '@heroicons/react/outline';

function Newsletter() {
  return (
    <div className="flex rounded-lg shadow-2xl bg-pink-300 py-2 px-1 m-2 flex-col w-2/5 justify-center items-center">
      <div className="my-2 text-center w-4/6">
        <p className="text-gray-700 text-lg font-bold mb-1">
          Signup for my Newsletter!
        </p>
        <ChevronDoubleDownIcon className="h-5 mx-auto w-5 animate-bounce" />
      </div>

      <p className="w-4/5 text-center my-1">
        Lorem ipsum dolor sit amet, consectetur adip inc lorem, sed do eiusmod
        tempor incididunt ut labore amet lorem ipsum dolor sit amet lorem ipsum
        dolor.
      </p>

      <form className="flex flex-col my-2">
        <input
          placeholder="johndoe@gmail.com"
          className="rounded-xl p-2 outline-none bg-pink-100"
        />
        <button
          className="bg-pink-500 hover:bg-pink-600 hover:font-bold hover:scale-105 transform ease-linear text-pink-100 p-2 rounded-xl mt-2"
          type="submit"
        >
          Signup!
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
