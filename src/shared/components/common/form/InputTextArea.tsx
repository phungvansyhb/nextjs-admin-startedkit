import React from 'react'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '../ui/form'
import {Textarea} from '../ui/textarea'
import {UseFormReturn} from "react-hook-form";

type Props = {
    form: UseFormReturn<any>
    fieldName: string
    label?: string
    placeHolder?: string
    inputProps?: React.InputHTMLAttributes<HTMLTextAreaElement>

}

export default function InputTextArea({ fieldName, form, label, placeHolder , inputProps }: Props) {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Textarea
                            className="resize-y"
                            placeholder={placeHolder}
                            {...field}
                            {...inputProps}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}