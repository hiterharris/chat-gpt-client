import '../App.css';
import { useGenerator } from '../hooks';

const Generator = () => {
    const { generate, storyPrompt, setStoryPrompt, result, loading } = useGenerator();
    return (
        <div className="generator">
            <form onSubmit={generate}>
                <input
                    type="text"
                    name="prompt"
                    placeholder="Enter an story topic"
                    value={storyPrompt}
                    onChange={(e) => setStoryPrompt(e.target.value)}
                />
                <input type="submit" value="Generate story" />
            </form>
            {loading ? <div className="result">Generating story...</div> : <div className="result">{result}</div>}
        </ div>
    );
}

export default Generator;
