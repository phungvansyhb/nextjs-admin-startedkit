import { CustomFormattingToolbar } from "@/shared/components/common/editor/ToolBar";
import { Button } from "@/shared/components/common/ui/button";
import { BlockNoteEditor, defaultBlockSchema } from "@blocknote/core";
import "@blocknote/core/style.css";
import { BlockNoteView, defaultReactSlashMenuItems, useBlockNote } from "@blocknote/react";
import { insertImageSlash } from "./slashs/ImageSlash";
import { ImageBlock } from "./blocks/ImageBlock";
import { ConfirmDialog } from "../dialog/ConfirmDialog";
import { useRef } from "react";
import { ImgPickDialog } from "../dialog/ImgPickDialog";

export default function Editor() {
    const ref = useRef<HTMLButtonElement>(null)

    //@ts-ignore
    const editor: BlockNoteEditor | null = useBlockNote({
        theme: "light",
        blockSchema: {
            ...defaultBlockSchema,
            image: ImageBlock
        },
        slashCommands: [...defaultReactSlashMenuItems, insertImageSlash(ref)],
        
        // customElements: {
        //     formattingToolbar: CustomFormattingToolbar
        // },
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
    if (editor) {
        editor.domElement.addEventListener(
            "keydown",
            (e) => {
                console.log(e)
            },
            true
        );
    }
    return <div className="w-full">
        <BlockNoteView editor={editor} />
        <div>
            <ImgPickDialog editor={editor!} triggerCpn={<Button ref={ref} className="hidden" >open modal</Button>} />
            <Button onClick={() => console.log(editor?.topLevelBlocks)} className="mt-4">Log content</Button>
        </div>
    </div>;
}