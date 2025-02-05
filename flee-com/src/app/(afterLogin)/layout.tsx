import { Children } from "react";

export default function AfterLoginLayout({children}){

    return(
        <div>
            <p>(afterLogin) 레이아웃</p>
            {children}
        </div>
    )
};