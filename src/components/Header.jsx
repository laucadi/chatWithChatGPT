import React from "react";

const Header = ({ createNewChat, uniqueTitles, handleTitle }) => {
  return (
    <div class="bg-gray-100 border-r h-screen border-gray-300 rounded-xl">
      <header class="px-4 border-b border-gray-300 flex justify-between items-center bg-indigo-400 m-2 text-white rounded-xl mx-2">
        <h1 class="text-2xl font-semibold">New Chat</h1>
        <div class="relative rounded-2xl text-indigo-700 bg-indigo-100  w-10 h-10 flex items-center justify-center hover:bg-gray-100">
          <button
            id="menuButton"
            class="focus:outline-none"
            onClick={createNewChat}
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      <div class="overflow-y-auto  p-3 mb-9 pb-20">
        {uniqueTitles?.map((title, key) => (
          <div
            class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md bg-gray-200 shadow"
            onClick={() => handleTitle(title)}
          >
            <div class="relative rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10 flex items-center justify-center">
              <button
                id="menuButton"
                class="focus:outline-none"
                onClick={createNewChat}
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex-1 ml-2">
              <h2 class="text-md font-semibold text-gray-600">{title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
