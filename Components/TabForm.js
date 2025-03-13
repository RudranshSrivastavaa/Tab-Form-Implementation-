import React, {useState } from 'react';
import Profile from './Profile';
import Setting from './Setting';
import Interests from './Interests';


const TabForm = () => {
    const tabs = [
        {
            name: "Profile",
            component: Profile,
        },
        {
            name: "Interests",
            component: Interests,
        },
        {
            name: "Setting",
            component: Setting,
        },
    ];
    const [activetab, setactivetab] = useState(0);
    const [data,setdata]=useState({
    name:"Rudransh",
    age:"20",
    email:"rudranshatwork@gmail.com",
    interests:["coding","swimming"],
    theme:"dark",
});
    const ActiveTabComponent = tabs[activetab].component; 

    return (
        <div>
            <div className='heading-container'>
                {tabs.map((t, index) => (
                    <div className='heading' key={index} onClick={() => setactivetab(index)}>
                        {t.name}
                    </div>
                ))}
            </div>
            <div className='tab-body'>
                <ActiveTabComponent data={data} setdata={setdata} /> 
            </div>
        </div>
    );
};

export default TabForm;
