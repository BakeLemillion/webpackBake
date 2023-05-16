import {HeaderLayoutStyle, HeaderLayoutTopStyle, HeaderSideContentStyle} from "../style"

function HeaderLayout({children}: {children: React.ReactElement}) {
    return (
        <HeaderLayoutStyle>
            <HeaderLayoutTopStyle>

            </HeaderLayoutTopStyle>
            <HeaderSideContentStyle>
                {children}
            </HeaderSideContentStyle>
        </HeaderLayoutStyle>
    )
}

export default HeaderLayout