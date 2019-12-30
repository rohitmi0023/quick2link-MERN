import React, { Fragment, useContext } from "react";
import { UserProfileContext } from "./UserProfileContext";

const UserProfile = () => {
    const [userInfo, setUserInfo] = useContext(UserProfileContext);
    return (
        <Fragment>
            {userInfo.map(list => {
                const { _id, name, avatar } = list;
                return (
                    <div key={_id}>
                        <img 
                        src={avatar} 
                        style={{ 
                            float: "right", maxHeight:'44px', maxWidth:'44px', borderRadius:'50%',
                            display:'block', margin: '10px 14px'
                            }}
                        />
                    </div>
                );
            })}
        </Fragment>
    );
};

export default UserProfile;
