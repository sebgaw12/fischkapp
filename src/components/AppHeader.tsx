import React from "react";
import {AddNewCartBtn, Header} from "./AppHeader.style";

export const AppHeader = (): React.JSX.Element => (
    <Header>
        <div>Logo and number of cards</div>
        <AddNewCartBtn>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#161616"/>
                <path d="M25 20H15" stroke="white" strokeLinecap="round"/>
                <path d="M20 25V15" stroke="white" strokeLinecap="round"/>
            </svg>
        </AddNewCartBtn>
    </Header>
);
