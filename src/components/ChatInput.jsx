import React from "react";

const ChatInput = ({ getMessage, valueInput, setValueInput, loading }) => {
  return (
    <form>
      <label for="chat" class="sr-only">
        Your message.....
      </label>
      <div class="flex items-center  py-3  rounded-sm">
        <textarea
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          id="chat"
          rows="2"
          class="block p-2.5 w-full text-sm text-gray-900  mr-6
          bg-white rounded-lg border border-gray-300 focus:ring-blue-500 
          focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600
           dark:placeholder-gray-400 dark:text-white 
           dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
        {loading ? (
          <button
            type="button"
            class="bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]"
            disabled
          >
            <div class="flex items-center justify-center m-[10px]">
              <div class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
            </div>
          </button>
        ) : (
          <button
            disabled={loading}
            onClick={getMessage}
            type="submit"
            class="inline-flex justify-center p-2 text-indigo-400 rounded-full cursor-pointer hover:bg-indigo-100 dark:text-indigo-400 dark:hover:bg-gray-600"
          >
            <svg
              class="w-6 h-6 rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        )}
      </div>
    </form>
  );
};

export default ChatInput;
