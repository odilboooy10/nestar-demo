import { useState } from "react";

const Community = () => {
  console.log("Community Component - Pages Router");
  const [title, setTitle] = useState<string>("Hello");
  return (
    <div>
      COMMUNITY{""}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        Press Me
      </button>
    </div>
  );
};

export default Community;
