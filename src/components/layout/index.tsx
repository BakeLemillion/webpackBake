import React from "react"
import {LayoutStyle} from "./style"
import HeaderLayout from "./header/index"
import FooterBlock from "./footer/index"


export default function Layout ({children }: { children: React.ReactElement })  {
    return (
        <>
            <LayoutStyle>
                <HeaderLayout>
                    {children }
                </HeaderLayout>
                <FooterBlock />
            </LayoutStyle>
        </>
    )
}