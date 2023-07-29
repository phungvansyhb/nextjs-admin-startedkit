import { Button } from "@/shared/components/common/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shared/components/common/ui/dialog"
import { useState } from "react"
import { Input } from "../ui/input"
import { BlockNoteEditor } from "@blocknote/core"

type Props = {
    title?: React.ReactNode,
    content?: React.ReactNode,
    onOk?: () => void,
    triggerCpn: React.ReactNode,
    editor: BlockNoteEditor
}

export function ImgPickDialog(props: Props) {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    return (
        <Dialog open={open} onOpenChange={() => setOpen(!open)}>
            <DialogTrigger asChild>
                {props.triggerCpn}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <Input onChange={(e) => setText(e.target.value)} />
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit" onClick={() => {
                        setOpen(false)
                        props.editor.insertBlocks([
                            {
                                // @ts-ignore
                                type: "image",
                                props: {
                                    // @ts-ignore
                                    src: text,
                                    alt: "hello"
                                },
                            },
                        ],
                            props.editor.getTextCursorPosition().block,
                            "before")
                    }}>Đồng ý</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
