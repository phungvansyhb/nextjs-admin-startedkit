'use client';

import {useState} from 'react';
import {CheckIcon, ChevronsUpDown} from 'lucide-react';

import {Avatar, AvatarFallback, AvatarImage} from '@/components/common/ui/avatar';
import {Button} from '@/components/common/ui/button';
import {Command, CommandGroup, CommandItem, CommandList, CommandSeparator,} from '@/components/common/ui/command';

import {Popover, PopoverContent, PopoverTrigger,} from '@/components/common/ui/popover';

import {cn} from '@/utils/tailwind/functions';

const groups = [
    {
        label: 'English',
        value: 'en',
    },
    {
        label: 'Vietnam',
        value: 'vi',
    },
];

type Team = (typeof groups)[number];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
    typeof PopoverTrigger
>;

interface TeamSwitcherProps extends PopoverTriggerProps { }

const LanguageSwitcher = ({ className }: TeamSwitcherProps) => {
    const [open, setOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState<Team>(groups[0]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    aria-label="Select a team"
                    className={cn('w-[140px] justify-between ml-6', className)}
                >
                    <Avatar className="mr-2 h-5 w-5">
                        <AvatarImage
                            src={`https://avatar.vercel.sh/${selectedTeam.value}.png`}
                            alt={selectedTeam.label}
                        />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    {selectedTeam.label}
                    <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[140px] p-0">
                <Command>
                    <CommandList>

                        {groups.map((group) => (
                            <CommandGroup key={group.value}>
                                <CommandItem
                                    key={group.value}
                                    onSelect={() => {
                                        setSelectedTeam(group);
                                        setOpen(false);
                                    }}
                                    className="text-sm"
                                >
                                    <Avatar className="mr-2 h-5 w-5">
                                        <AvatarImage
                                            src={`https://avatar.vercel.sh/${group.value}.png`}
                                            alt={group.label}
                                            className="grayscale"
                                        />
                                        <AvatarFallback>SC</AvatarFallback>
                                    </Avatar>
                                    {group.label}
                                    <CheckIcon
                                        className={cn(
                                            'ml-auto h-4 w-4',
                                            selectedTeam.value === group.value
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        )}
                                    />
                                </CommandItem>
                            </CommandGroup>
                        ))}
                    </CommandList>
                    <CommandSeparator />
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default LanguageSwitcher;
