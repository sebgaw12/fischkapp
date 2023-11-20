import React, {useState} from "react";
import {AddNewCartBtn, Header, LogoContainer, NumOfCards} from "./AppHeader.style";
import AddNewCartBtnImage from "../images/addNewCartBtn.tsx";
import LogoImg from "../images/LogoImg.tsx";

export const AppHeader = (): React.JSX.Element => {

    const [numOfCards, setNumOfCards] = useState(0);

    return (
        <Header>
            <LogoContainer>
                <LogoImg/>
                <NumOfCards>
                    Cards: {numOfCards}
                </NumOfCards>
            </LogoContainer>
            <AddNewCartBtn>
                <AddNewCartBtnImage/>
            </AddNewCartBtn>
        </Header>
    );
}
