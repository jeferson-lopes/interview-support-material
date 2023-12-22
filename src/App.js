import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/ad714939a201afd1f37a")
      .then((response) => response.json())
      .then((data) => setTopics(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ backgroundColor: "#282c34" }}>
      <div className="App">
        {topics?.map((topic) => (
          <>
            <h1>{topic.category.toUpperCase()}</h1>
            {topic.infos.map((info) => (
              <div
                style={{
                  marginLeft: "20px",
                  backgroundColor: "rgb(51 57 71)",
                  paddingLeft: "10px",
                  borderRadius: "5px",
                }}
              >
                <h3>{info.title}</h3>
                {info.content.map((content, index) => (
                  <div style={{ marginLeft: "20px" }}>
                    <p> {index + 1 + ". " + content}</p>
                  </div>
                ))}
              </div>
            ))}
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
