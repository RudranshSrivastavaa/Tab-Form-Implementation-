const Profile = ({data,setdata}) => {
    const{name,age,email}=data;
    const handlleChange=(e,item)=>{
        setdata((prevState)=>({
            ...prevState,
            [item]:e.target.value,
        }));
    }
    return (<div>
        <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e)=>handlleChange(e,"name")}/>
        </div>
        <div>
            <label>Age:</label>
            <input type="number" value={age} onChange={(e)=>handlleChange(e,"age")}/>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e)=>handlleChange(e,"email")}/>
        </div>
    </div>);
};
export default Profile;
