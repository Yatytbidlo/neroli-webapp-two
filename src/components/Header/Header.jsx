import React from 'react';
import "./Header.css"
import {useTelegram} from "../../hooks/useTelegram";
const Header = () => {

    const {user} = useTelegram()

    return (
        <div>
            <h3>Авторский парфюм от Neroli</h3>
            <span className={"username"}>Добро пожаловать {user?.username}!</span>
        </div>
    );
};

export default Header;