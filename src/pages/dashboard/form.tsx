
import InputDatePicker from "@/shared/components/common/form/InputDatePicker"
import InputSelect from "@/shared/components/common/form/InputSelect"
import InputText from "@/shared/components/common/form/InputText"
import InputTextArea from "@/shared/components/common/form/InputTextArea"
import { Button } from "@/shared/components/common/ui/button"
import { Form } from "@/shared/components/common/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"


const formSchema = z.object({
    name: z.string(),
    age: z.number(),
    birth: z.date(),
    active: z.boolean()
})

type Props = {
    initialValue?: any
}

export default function FormDemo({ initialValue }: Props) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValue
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // beforeCreate(values)
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} onError={e => { console.log(e) }} className="space-y-4">
                <InputText form={form} fieldName="name" label="Name" />
                <InputTextArea form={form} fieldName="textArea" label="TextArea" />
                <InputDatePicker form={form} fieldName="datePicker" />
                <InputSelect form={form} fieldName="select" options={[{ value: 1, label: 'A' }, { value: 2, label: 'B' }]} />


                <Button type="submit" > <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Cập nhật</Button>
            </form>
        </Form>
    )
}
