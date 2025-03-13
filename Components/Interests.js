const Interests = ({ data, setdata }) => {
    const { interests } = data;

    const handleDataChange = (e) => {
        setdata((prevState) => ({
            ...prevState,
            interests: e.target.checked
                ? [...prevState.interests, e.target.name]
                : prevState.interests.filter((i) => i !== e.target.name),
        }));
    };

    return (
        <div>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="coding" 
                        checked={interests.includes("coding")} 
                        onChange={handleDataChange}
                    />
                    Coding
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="music" 
                        checked={interests.includes("music")} 
                        onChange={handleDataChange}
                    />
                    Music
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="javascript" 
                        checked={interests.includes("javascript")} 
                        onChange={handleDataChange}
                    />
                    JavaScript
                </label>
            </div>
        </div>
    );
};

export default Interests;
