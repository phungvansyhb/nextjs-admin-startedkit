import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./index"), { ssr: false });

export function EditorCSR() {
    return (
        <div>
            <Editor />
        </div>
    );
}