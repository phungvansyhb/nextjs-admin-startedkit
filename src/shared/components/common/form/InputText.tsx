import React from 'react'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '../ui/form'
import {Input} from '../ui/input'
import {UseFormReturn} from "react-hook-form";

type Props = {
    form: UseFormReturn<any>
    fieldName: string
    label?: string
    placeHolder?: string
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export default function InputText({ fieldName, form, label, placeHolder, inputProps }: Props) {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel className='capitalize text-base'>{label}</FormLabel>}
                    <FormControl>
                        <Input placeholder={placeHolder} {...field} {...inputProps} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}