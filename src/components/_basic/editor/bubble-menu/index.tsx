import { BubbleMenu, BubbleMenuProps, isNodeSelection } from "@tiptap/react";
import { FC, useState } from "react";
import {
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
    StrikethroughIcon,
    CodeIcon,
} from "lucide-react";
import { NodeSelector } from "./node-selector";
import { ColorSelector } from "./color-selector";
import { LinkSelector } from "./link-selector";
import { cn } from "../lib/utils";
import { TextAligment } from "./text-aligment";

export interface BubbleMenuItem {
    name: string;
    isActive: () => boolean;
    command: () => void;
    icon: typeof BoldIcon;
}

type EditorBubbleMenuProps = Omit<BubbleMenuProps, "children">;

export const EditorBubbleMenu: FC<EditorBubbleMenuProps> = ({ editor }) => {

    const [isNodeSelectorOpen, setIsNodeSelectorOpen] = useState<boolean>(false);
    const [isColorSelectorOpen, setIsColorSelectorOpen] = useState<boolean>(false);
    const [isLinkSelectorOpen, setIsLinkSelectorOpen] = useState<boolean>(false);
    const [isTextAligmentSelectorOpen, setIsTextAligmentSelectorOpen] = useState<boolean>(false);

    const items: BubbleMenuItem[] = [
        {
            name: "bold",
            isActive: () => editor == undefined ? false : editor?.isActive("bold"),
            command: () => editor?.chain().focus().toggleBold().run(),
            icon: BoldIcon,
        },
        {
            name: "italic",
            isActive: () => editor == undefined ? false : editor?.isActive("italic"),
            command: () => editor?.chain().focus().toggleItalic().run(),
            icon: ItalicIcon,
        },
        {
            name: "underline",
            isActive: () => editor == undefined ? false : editor?.isActive("underline"),
            command: () => editor?.chain().focus().toggleUnderline().run(),
            icon: UnderlineIcon,
        },
        {
            name: "strike",
            isActive: () => editor == undefined ? false : editor?.isActive("strike"),
            command: () => editor?.chain().focus().toggleStrike().run(),
            icon: StrikethroughIcon,
        },
        {
            name: "code",
            isActive: () => editor == undefined ? false : editor?.isActive("code"),
            command: () => editor?.chain().focus().toggleCode().run(),
            icon: CodeIcon,
        },
    ];

    const bubbleMenuProps: EditorBubbleMenuProps = {
        editor,
        shouldShow: ({ state, editor }) => {
            const { selection } = state;
            const { empty } = selection;

            // don't show bubble menu if:
            // - the selected node is an image
            // - the selection is empty
            // - the selection is a node selection (for drag handles)
            if (editor.isActive("image") || empty || isNodeSelection(selection)) {
                return false;
            }
            return true;
        },
        tippyOptions: {
            moveTransition: "transform 0.15s ease-out",
            onHidden: () => {
                setIsNodeSelectorOpen(false);
                setIsColorSelectorOpen(false);
                setIsLinkSelectorOpen(false);
            },
        },
    };

    return (
        <BubbleMenu
            {...bubbleMenuProps}
            className="novel-flex novel-w-fit novel-divide-x novel-divide-stone-200 novel-rounded novel-border novel-border-stone-200 novel-bg-white novel-shadow-xl"
        >
            {editor !== undefined && <>
                <NodeSelector
                    editor={editor}
                    isOpen={isNodeSelectorOpen}
                    setIsOpen={() => {
                        setIsNodeSelectorOpen(!isNodeSelectorOpen);
                        setIsColorSelectorOpen(false);
                        setIsLinkSelectorOpen(false);
                        setIsTextAligmentSelectorOpen(false);
                    }}
                />
                <LinkSelector
                    editor={editor}
                    isOpen={isLinkSelectorOpen}
                    setIsOpen={() => {
                        setIsLinkSelectorOpen(!isLinkSelectorOpen);
                        setIsColorSelectorOpen(false);
                        setIsNodeSelectorOpen(false);
                        setIsTextAligmentSelectorOpen(false)
                    }}
                />
            </>
            }

            <div className="novel-flex">
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={item.command}
                        className="novel-p-2 novel-text-stone-600 hover:novel-bg-stone-100 active:novel-bg-stone-200"
                        type="button"
                    >
                        <item.icon
                            className={cn("novel-h-4 novel-w-4", {
                                "novel-text-blue-500": item.isActive(),
                            })}
                        />
                    </button>
                ))}
            </div>
            {editor !== undefined && <ColorSelector
                editor={editor}
                isOpen={isColorSelectorOpen}
                setIsOpen={() => {
                    setIsColorSelectorOpen(!isColorSelectorOpen);
                    setIsNodeSelectorOpen(false);
                    setIsLinkSelectorOpen(false);
                    setIsTextAligmentSelectorOpen(false)
                }}
            />}
            {editor !== undefined && <TextAligment
                editor={editor}
                isOpen={isTextAligmentSelectorOpen}
                setIsOpen={() => {
                    setIsTextAligmentSelectorOpen(!isTextAligmentSelectorOpen);
                    setIsNodeSelectorOpen(false);
                    setIsColorSelectorOpen(false);
                    setIsLinkSelectorOpen(false);
                }}
            />}
        </BubbleMenu>
    );
};