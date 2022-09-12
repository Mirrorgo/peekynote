import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { getCurrent, WebviewWindow } from "@tauri-apps/api/window";
import { mockBingSearchResult, SUBSCRIPTION_KEY } from "./helper/bingSearch";
import { Button } from "@mui/material";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  const bingSearch = async (value: string) => {
    console.log(mockBingSearchResult.webPages.value, "value");
    // axios.get(`https://api.bing.microsoft.com//v7.0/search?q=${value}`,{
    //     headers:
    //     { 'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY }
    //   }).then((res)=>{
    //     console.log(res,'res')
    //   })
  };

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  const handleEnterMyApp = () => {
    const webview = new WebviewWindow("theUniqueLabel", {
      url: "https://bing.com",
      width: 375,
      height: 667,
      // resizable: false,
    });
    webview.once("tauri://created", function () {
      // webview window successfully created
      // const customUserAgent =
      //   "User-Agent: Opera/9.80 (Android 2.3.4; Linux; Opera Mobi/build-1107180945; U; en-GB) Presto/2.8.149 Version/11.10 Android Pad Moto Xoom";
      // Object.defineProperty(navigator, "userAgent", {
      //   value: customUserAgent,
      //   writable: false,
      // });
    });
    webview.once("tauri://error", function (e) {
      // an error happened creating the webview window
    });
  };
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <div className="container">
      <h1 onClick={handleEnterMyApp} style={{ cursor: "pointer" }}>
        Welcome to Tauri!
      </h1>
      <input
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
      />
      <Button onClick={() => bingSearch(searchInputValue)}>搜索</Button>
      <Button
        onClick={() => {
          new WebviewWindow("bing", {
            url: "/src/pages/bing/index.html",
          });
        }}
      >
        to bing
      </Button>
      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="button" onClick={() => greet()}>
            Greet
          </button>
        </div>
      </div>
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
