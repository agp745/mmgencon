import { ReactNode } from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

interface QuotePopoverProps {
    Trigger: ReactNode
}

export function QuotePopover({ Trigger }: QuotePopoverProps) {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                {Trigger}
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="flex flex-col gap-1 bg-slate-800 p-2 rounded text-neutral-200 border border-neutral-200 border-collapse">
                    <DropdownMenu.Label />
                    <DropdownMenu.Item asChild>
                        <a href="https://form.jotform.com/230184112380141" target="_blank" className="hover:brightness-125">Residential Quote</a>
                    </DropdownMenu.Item>

                    <DropdownMenu.Label />
                    <DropdownMenu.Item asChild>
                        <a href="mailto: mike.a@mmgencon.com" className="hover:brightness-125">Commercial Quote</a>
                    </DropdownMenu.Item>

                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}
