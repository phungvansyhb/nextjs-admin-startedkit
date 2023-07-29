import * as React from "react";
import { X } from "lucide-react";

import { Badge } from "@/shared/components/common/ui/badge";
import {
    Command,
    CommandGroup,
    CommandItem,
} from "@/shared/components/common/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { FormField, FormItem, FormLabel } from "../ui/form";

type Item = Record<"value" | "label", string>;

type Props = {
    form: any
    fieldName: string
    label?: string
    placeHolder?: string
    options?: { value: any, label: string }[]
}

/**
 * 
 * @description if want set default value the field value must in form [{value : number , label : string}] 
 * @returns 
 */
export function InputMultiSelect({ form, label, placeHolder, fieldName, options = [] }: Props) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<Item[]>(form.getValues()[fieldName] || []);
    const [inputValue, setInputValue] = React.useState("");

    React.useEffect(() => {
        if (form.getValues()[fieldName])
            setSelected(form.getValues()[fieldName] || [])
    }, [form])
    const handleUnselect = React.useCallback((Item: Item) => {
        form.setValue(fieldName, selected.filter(s => s.value !== Item.value).map(item => item.value))
        setSelected(prev => prev.filter(s => s.value !== Item.value));
    }, []);

    const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        const input = inputRef.current
        if (input) {
            if (e.key === "Delete" || e.key === "Backspace") {
                if (input.value === "") {
                    setSelected(prev => {
                        const newSelected = [...prev];
                        newSelected.pop();
                        return newSelected;
                    })
                }
            }
            // This is not a default behaviour of the <input /> field
            if (e.key === "Escape") {
                input.blur();
            }
        }
    }, []);

    const selectables = options.filter(Item => !selected.map(item => item.value).includes(Item.value));

    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem >
                    {label && <FormLabel className='capitalize text-base'>{label}:</FormLabel>}
                    <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
                        <div
                            className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                        >
                            <div className="flex gap-1 flex-wrap">
                                {selected.map((Item) => {
                                    return (
                                        <Badge key={Item?.value} variant="secondary">
                                            {Item?.label}
                                            <button
                                                className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") {
                                                        handleUnselect(Item);
                                                    }
                                                }}
                                                onMouseDown={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                }}
                                                onClick={() => handleUnselect(Item)}
                                            >
                                                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                                            </button>
                                        </Badge>
                                    )
                                })}
                                <CommandPrimitive.Input
                                    ref={inputRef}
                                    value={inputValue}
                                    onValueChange={setInputValue}
                                    onBlur={() => setOpen(false)}
                                    onFocus={() => setOpen(true)}
                                    placeholder={placeHolder}
                                    className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
                                />
                            </div>
                        </div>
                        <div className="relative mt-2">
                            {open && selectables.length > 0 ?
                                <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                                    <CommandGroup className="h-full overflow-auto">
                                        {selectables.map((Item) => {
                                            return (
                                                <CommandItem
                                                    key={Item.value}
                                                    onMouseDown={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                    }}
                                                    onSelect={(value) => {
                                                        setInputValue("")
                                                        setSelected(prev => [...prev, Item])
                                                        form.setValue(fieldName, [...selected, Item].map(item => item.value))
                                                    }}
                                                    className={"cursor-pointer"}
                                                >
                                                    {Item.label}
                                                </CommandItem>
                                            );
                                        })}
                                    </CommandGroup>
                                </div>
                                : null}
                        </div>
                    </Command >
                </FormItem>
            )}
        />
    )
}