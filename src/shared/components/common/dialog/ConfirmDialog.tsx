import {Button} from "@/components/common/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/common/ui/dialog"
import {useState} from "react"

type Props = {
    title?: React.ReactNode,
    content?: React.ReactNode,
    triggerCpn: React.ReactNode,
    onOk?: () => void
}

export function ConfirmDialog(props: Props) {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={() => setOpen(!open)}>
            <DialogTrigger asChild>
                {props.triggerCpn}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{props.title}</DialogTitle>
                    <DialogDescription>
                        {props.content}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit" onClick={() => {
                        setOpen(false)
                        props.onOk && props.onOk()
                    }}>Đồng ý</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
