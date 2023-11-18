import { Editor } from "@tiptap/core";
import { Check, ChevronDown } from "lucide-react";
import { Dispatch, FC, SetStateAction } from "react";
import * as Popover from "@radix-ui/react-popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

export interface BubbleColorMenuItem {
    name: string;
    color: string;
}

interface ColorSelectorProps {
    editor: Editor;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const TEXT_ALIGN: BubbleColorMenuItem[] = [
    {
        name: "Right",
        color: "right",
    },
    {
        name: "Center",
        color: "center",
    },
    {
        name: "Left",
        color: "left",
    },
    {
        name: "Justify",
        color: "justify",
    },
];

export const TextAligment: FC<ColorSelectorProps> = ({
    editor,
    isOpen,
    setIsOpen,
}) => {
    const activeColorItem = TEXT_ALIGN.find(({ color }) =>
        editor.isActive("textStyle", { color })
    );

    return (
        <Popover.Root open={isOpen}>
            <div className="novel-relative novel-h-full">
                <Popover.Trigger
                    className="novel-flex novel-h-full novel-items-center novel-gap-1 novel-p-2 novel-text-sm novel-font-medium novel-text-stone-600 hover:novel-bg-stone-100 active:novel-bg-stone-200"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className="novel-rounded-sm novel-px-1"
                        style={{
                            color: activeColorItem?.color,
                            padding: '5px 0'
                        }}
                    >
                        <FontAwesomeIcon icon={faAlignLeft} width={14} height={14} />
                    </span>

                    <ChevronDown className="novel-h-4 novel-w-4" />
                </Popover.Trigger>

                <Popover.Content
                    align="start"
                    className="novel-z-[99999] novel-my-1 novel-flex novel-max-h-80 novel-w-48 novel-flex-col novel-overflow-hidden novel-overflow-y-auto novel-rounded novel-border novel-border-stone-200 novel-bg-white novel-p-1 novel-shadow-xl novel-animate-in novel-fade-in novel-slide-in-from-top-1"
                >
                    <div className="novel-my-1 novel-px-2 novel-text-sm novel-text-stone-500">
                        Text align
                    </div>
                    {TEXT_ALIGN.map(({ name, color }, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                editor.commands.unsetTextAlign();
                                name !== "Default" &&
                                    editor
                                        .chain()
                                        .focus()
                                        .setTextAlign(color || "")
                                        .run();
                                setIsOpen(false);
                            }}
                            className="novel-flex novel-items-center novel-justify-between novel-rounded-sm novel-px-2 novel-py-1 novel-text-sm novel-text-stone-600 hover:novel-bg-stone-100"
                            type="button"
                        >
                            <div className="novel-flex novel-items-center novel-space-x-2">
                                <div
                                    className="novel-rounded-sm novel-border novel-border-stone-200 novel-px-1 novel-py-px novel-font-medium"
                                    style={{ color }}
                                >
                                    A
                                </div>
                                <span>{name}</span>
                            </div>
                            {editor.isActive("textStyle", { color }) && (
                                <Check className="novel-h-4 novel-w-4" />
                            )}
                        </button>
                    ))}
                </Popover.Content>
            </div>
        </Popover.Root>
    );
};