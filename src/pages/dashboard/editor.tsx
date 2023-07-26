import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useEffect } from "react";
import { Button } from "@/shared/components/common/ui/button";

// const initialContent: string | null = localStorage.getItem("editorContent");

export default function Editor() {
    // Creates a new editor instance.
    const editor: BlockNoteEditor | null = useBlockNote({
        theme: "light",
        // If the editor contents were previously saved, restores them.
        // initialContent: initialContent ? JSON.parse(initialContent) : undefined,
        // Serializes and saves the editor contents to local storage.
        // onEditorContentChange: (editor) => {
        //     localStorage.setItem(
        //         "editorContent",
        //         JSON.stringify(editor.topLevelBlocks)
        //     );
        // }
    });

    // Renders the editor instance.
    return <div className="w-full">
        <BlockNoteView editor={editor} />
        <Button onClick={() => console.log(editor?.topLevelBlocks)}>Log content</Button>
    </div>;
}