import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { UseFormReturn } from 'react-hook-form'
import { Input } from '../ui/input'

type Props = {
    form: any
    fieldName: string
    label?: string
    placeHolder?: string
}

export default function InputText({ fieldName, form, label, placeHolder }: Props) {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Input placeholder={placeHolder} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}