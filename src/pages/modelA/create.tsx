import InputDatePicker from '@/shared/components/common/form/InputDatePicker'
import InputSelect from '@/shared/components/common/form/InputSelect'
import InputText from '@/shared/components/common/form/InputText'
import InputTextArea from '@/shared/components/common/form/InputTextArea'
import { Button } from '@/shared/components/common/ui/button'
import { Form } from '@/shared/components/common/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ListBulletIcon } from '@radix-ui/react-icons'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type Props = {}

const formSchema = z.object({
    description: z.string().optional(),
    staff: z.any(),
    projectName: z.any({ required_error: 'Vui lòng điền tên project' }),
    task: z.any({ required_error: 'Vui lòng điền tên task' }),
    phaseName: z.any({ required_error: 'Vui lòng điền tên phase' }),
    from: z.date({ required_error: 'Vui lòng điền thời gian bắt đầu' }),
    to: z.date({ required_error: 'Vui lòng điền thời gian kết thúc' })
})

export default function CreateWorkLog({ }: Props) {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // beforeCreate(values)
        console.log(values)
    }
    return (
        <section className='w-full'>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold'>Create worklog</div>
                <Button onClick={() => router.push('/worklog')}><ListBulletIcon className='mr-2' /> List Worklog</Button>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} onError={e => { console.log(e) }} className="space-y-4">
                    <InputSelect form={form} fieldName="staff" options={[{ value: 1, label: 'A' }, { value: 2, label: 'B' }]} label='Nhân viên' />

                    <div className='grid grid-cols-2 gap-4'>
                        <InputDatePicker form={form} fieldName="from" label='From' />
                        <InputDatePicker form={form} fieldName="to" label='To' />
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <InputSelect form={form} fieldName="projectName" options={[{ value: 1, label: 'A' }, { value: 2, label: 'B' }]} label='Project name' />
                        <InputSelect form={form} fieldName="phaseName" options={[{ value: 1, label: 'A' }, { value: 2, label: 'B' }]} label='phaseName' />
                        <InputText form={form} fieldName="task" label='Task' />
                    </div>
                    <InputTextArea form={form} fieldName="description" label="description" />

                    <Button type="submit" > <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Cập nhật</Button>
                </form>
            </Form>
        </section>
    )
}