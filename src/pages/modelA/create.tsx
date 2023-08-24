import FormA from '@/components/business/bussinessA/FormA'
import {Button} from '@/components/common/ui/button'
import {ListBulletIcon} from '@radix-ui/react-icons'
import {useRouter} from 'next/router'

type Props = {}


export default function CreateWorkLog({ }: Props) {
    const router = useRouter()
   
    function onSubmit(values: Partial<any>) {
        // beforeCreate(values)
        console.log(values)
    }
    return (
        <section className='w-full'>
            <div className='flex justify-between'>
                <div className='text-3xl font-bold'>Create worklog</div>
                <Button onClick={() => router.push('/worklog')}><ListBulletIcon className='mr-2' /> List Worklog</Button>
            </div>
            <FormA onSubmit={onSubmit} onBack={() => router.push('/worklog')} isLoading={true}  />
            
        </section>
    )
}