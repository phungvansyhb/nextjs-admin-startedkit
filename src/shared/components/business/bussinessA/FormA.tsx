import InputText from '@/components/common/form/InputText'
import InputTextArea from '@/components/common/form/InputTextArea'
import {Form} from '@/components/common/ui/form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Loader2, MoveLeft} from 'lucide-react'
import React, {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {Button} from '../../common/ui/button'
import {IArticle} from '@/schemas/models/IArticle'

type Props = {
    onSubmit: (value: Partial<IArticle>) => void
    isLoading?: boolean,
    defaultValue?: IArticle,
    onBack?: () => void

}
const formSchema = z.object({
    name: z.string().min(1, { message: "Vui lòng điền tên đăng nhập" }),
    description: z.any(),
    task: z.any({ required_error: 'Vui lòng điền tên task' }),
})
export default function FormA({ onSubmit, isLoading, defaultValue , onBack }: Props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValue
    })
    useEffect(() => {
        if (defaultValue) {
            for (const [key, value] of Object.entries(defaultValue)) {
                form.setValue(key as any, value, {
                    shouldValidate: true,
                    shouldDirty: true
                })
            }
        }
    }, [defaultValue])
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} onError={e => { console.log(e) }} className="space-y-4">
                <InputText form={form} fieldName="name" label='Name' />
                <InputTextArea form={form} fieldName="description" label='Description' />
                <div className='flex justify-center gap-4'>
                    <Button type='reset' onClick={() => onBack && onBack()} variant={'outline'}> {isLoading && <MoveLeft className="mr-2 h-4 w-4 animate-spin" />} Hủy</Button>
                    <Button type="submit" > {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Lưu</Button>
                </div>
            </form>
        </Form>
    )
}