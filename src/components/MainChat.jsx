import React from "react";

const MainChat = ({ currentChat }) => {
  return (
    <section class="bg-indigo-900/10 mx-10 xl:mx-72">
      <div
        key={currentChat.content}
        id="messages"
        class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        {currentChat?.map((message, index) => (
          <div class="chat-message my-2">
            <div
              class={`flex items-end ${
                message.role === "user" ? "justify-end" : ""
              }`}
            >
              <div
                class={`flex flex-col space-y-2 text-xs max-w-xs mx-2 order-${
                  message.role === "user" ? "1" : "2"
                } items-end`}
              >
                <div>
                  <span
                    class={`px-4 py-2 rounded-lg inline-block rounded-br-none text-base leading-4 ${
                      message.role === "user"
                        ? "bg-gray-300 text-gray-600"
                        : "bg-indigo-500 text-slate-200"
                    }  `}
                  >
                    {message.content}
                  </span>
                </div>
              </div>
              <div
                class={`w-7 h-7 flex justify-center items-center rounded-full bg-indigo-300 order-${
                  message.role === "user" ? "2" : "1"
                }`}
              >
                {message.role === "user" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainChat;
