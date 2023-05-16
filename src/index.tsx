import { createRoot } from 'react-dom/client';
import { App } from './App'
import GlobalStyle from "./ui-kit/global-style"

const root = createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <>
        <GlobalStyle />
        <App />
    </>
)
