import { useState } from "react";

const endpoint = "http://localhost:3001/api/generate"

const useGenerator = () => {
    const [storyPrompt, setStoryPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const generate = async (event) => { 
      event.preventDefault();
      setLoading(true)

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: storyPrompt }),
        });
  
        const data = await response.json();

        if (response.status !== 200) {
          throw data.error || new Error(`Request failed with status ${response.status}`);
        }
    
        setResult(data.result);
        setLoading(false)
        setStoryPrompt("");
      } catch(error) {
          console.error(error);
          alert(error.message);
          setLoading(false)
      }
  }

  return { generate, storyPrompt, setStoryPrompt, result, loading }
}

export default useGenerator;
