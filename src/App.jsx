import React, { useEffect, useState } from "react";
import "./App.css";
import ChatInput from "./components/ChatInput";
import MainChat from "./components/MainChat";
import Header from "./components/Header";
import { fetchCompletions } from "./services/completions";

function App() {
  const [valueInput, setValueInput] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = React.useState(null);
  const [previousChats, setPreviousChats] = React.useState([]);
  const [currentTitle, setCurrentTitle] = React.useState(null);
  const el = document.getElementById("messages");
  // el.scrollTop = el.scrollHeight;

  const getMessage = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetchCompletions(valueInput);
      setMessage(response);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const createNewChat = () => {
    setMessage(null);
    setValueInput([]);
    setCurrentTitle(null);
  };
  const handleTitle = (title) => {
    setCurrentTitle(title);
    setMessage(null);
    setValueInput([]);
  };

  useEffect(() => {
    if (!currentTitle && valueInput && message) {
      setCurrentTitle(valueInput);
    }
    if (currentTitle && valueInput && message) {
      setPreviousChats((prev) => [
        ...prev,
        {
          title: currentTitle,
          role: "user",
          content: valueInput,
        },
        {
          title: currentTitle,
          role: message?.role,
          content: message.content,
        },
      ]);
    }
  }, [message, currentTitle]);

  const currentChat = previousChats?.filter(
    (chat) => chat.title === currentTitle
  );

  const uniqueTitles = Array.from(
    new Set(previousChats.map((prevChat) => prevChat.title))
  );

  return (
    <body>
      <div id="app" class="relative h-screen p-2 gap-3">
        <aside class="[grid-area:aside] flex-col flex  bg-zinc-900">
          <Header
            createNewChat={createNewChat}
            uniqueTitles={uniqueTitles}
            handleTitle={handleTitle}
          />
        </aside>
        <main class="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto w-full svgChat">
          <MainChat currentChat={currentChat} />
        </main>
        <footer class="[grid-area:player] h-[80px]">
          <ChatInput
            loading={loading}
            getMessage={getMessage}
            valueInput={valueInput}
            setValueInput={setValueInput}
          />
        </footer>
      </div>
    </body>
  );
}

export default App;
