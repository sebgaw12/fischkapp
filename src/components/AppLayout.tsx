import React from "react";
import {Layout} from "./AppLayout.style";

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({children}) => {

    return (
        <>
            <Layout>{children}</Layout>
        </>
    );
}
