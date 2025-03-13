const Setting = ({ data, setdata }) => {
    const { theme } = data; // ✅ Corrected object reference

    const handleDataChange = (e) => {
        setdata((prevState) => ({ ...prevState, theme: e.target.name }));
    };

    return (
        <div>
            <div>
                <label>
                    <input 
                        type="radio" 
                        name="dark" 
                        checked={theme === "dark"} 
                        onChange={handleDataChange}
                    />
                    Dark
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="light" 
                        checked={theme === "light"} 
                        onChange={handleDataChange}
                    />
                    Light
                </label>
            </div>
        </div>
    );
};

export default Setting;
