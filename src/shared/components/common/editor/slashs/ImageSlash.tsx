import { DefaultBlockSchema } from "@blocknote/core";
import { ReactSlashMenuItem } from "@blocknote/react";
import { ImageBlock } from "../blocks/ImageBlock";
import { ImageIcon } from "lucide-react";
import { ConfirmDialog } from "../../dialog/ConfirmDialog";
import ReactDOM from "react-dom";

export const insertImageSlash = (ref: any) => new ReactSlashMenuItem<
    DefaultBlockSchema & { image: typeof ImageBlock }
>(
    "Insert Image",
    (editor) => {
        if (ref.current) {
            ref.current.click()
        }
    },
    ["image", "img", "picture", "media"],
    "Media",
    <ImageIcon />,
    "Insert an image"
);

function pickImagefromMaching(editor: any) {
    const inputFile = document.createElement('input')
    inputFile.type = 'file'
    inputFile.accept = 'image/*'
    inputFile.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        const selectedFile = target.files?.[0];
        if (selectedFile) {
            // Call api upload then pass to src 
            const reader = new FileReader();
            reader.onload = () => {
                editor.insertBlocks(
                    [
                        {
                            type: "image",
                            props: {
                                src: reader.result as string || "https://via.placeholder.com/1000",
                                alt: selectedFile.name
                            },
                        },
                    ],
                    editor.getTextCursorPosition().block,
                    "before"
                );
            };
            reader.readAsDataURL(selectedFile);
        }
    });
    inputFile.click()
}