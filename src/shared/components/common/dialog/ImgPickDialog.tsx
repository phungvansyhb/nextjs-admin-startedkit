import {Button} from "@/components/common/ui/button"
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger,} from "@/components/common/ui/dialog"
import {useState} from "react"
import {Input} from "../ui/input"

type Props = {
   onOk: ()=>void
}

export function ImgPickDialog(props : Props) {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    return (
        <Dialog open={true} >
            <DialogContent className="sm:max-w-[425px]" hideCloseIcon>
                <DialogHeader>
                    <Input onChange={(e) => setText(e.target.value)} />
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit" onClick={() => {
                        props.onOk()
                    }}>Đồng ý</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
