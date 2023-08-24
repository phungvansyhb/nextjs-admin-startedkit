import InputDatePicker from "@/components/common/form/InputDatePicker"
import {InputMultiSelect} from "@/components/common/form/InputMultiSelect"
import InputSelect from "@/components/common/form/InputSelect"
import InputText from "@/components/common/form/InputText"
import InputTextArea from "@/components/common/form/InputTextArea"
import {Button} from "@/components/common/ui/button"
import {Form} from "@/components/common/ui/form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Loader2} from "lucide-react"
import {useForm} from "react-hook-form"
import * as z from "zod"
import InputEditor from "@/components/common/form/InputEditor";


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
        defaultValues: { ...initialValue, selectMulti: [{ value: 1, label: 'A' }] }
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // beforeCreate(values)
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} onError={e => { console.log(e) }} className="space-y-4 w-full">
                <InputText form={form} fieldName="name" label="Name" />
                <InputTextArea form={form} fieldName="textArea" label="TextArea" />
                <InputDatePicker form={form} fieldName="datePicker" />
                <InputSelect form={form} fieldName="select" options={[{ value: 1, label: 'A' }, { value: 2, label: 'B' }]} />
                <InputMultiSelect form={form} fieldName="selectMulti" options={[{ value: 1, label: 'A' }, { value: 2, label: 'B' }, { value: 3, label: 'C' }, { value: 4, label: 'D' }]} />
                <InputEditor form={form} fieldName={'editor'}/>

                <Button type="submit" > <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Cập nhật</Button>
            </form>
        </Form>
    )
}
