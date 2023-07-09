import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LendingPage(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const onClickLogin = () => {
        setLoggedIn(true);
    };

    const onClickLogout = () => {
        setLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{padding : 16}}>소풀과 함께하는 리액트 공부!</div>
        </div>
    );
}

export default LendingPage;