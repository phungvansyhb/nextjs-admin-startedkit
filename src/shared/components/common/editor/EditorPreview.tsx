import React from 'react'
import Blocks, {DataProp} from 'editorjs-blocks-react-renderer';

type Props = {
    data: DataProp
}


const CssConfig = {
    code: {
        className: "language-js"
    },
    delimiter: {
        className: "border border-2 w-16 mx-auto"
    },
    embed: {
        className: "border-0"
    },
    header: {
        className: "font-bold"
    },
    image: {
        className: "w-full max-w-screen-md",
        actionsClassNames: {
            stretched: "w-full h-80 object-cover",
            withBorder: "border border-2",
            withBackground: "p-2",
        }
    },
    list: {
        className: "list-inside"
    },
    paragraph: {
        className: "text-base text-opacity-75",
        actionsClassNames: {
            alignment: "text-{alignment}", // This is a substitution placeholder: left or center.
        }
    },
    quote: {
        className: "py-3 px-5 italic font-serif"
    },
    table: {
        className: "table-auto"
    }
}

export default function EditorPreview({ data }: Props) {
    return (
        <Blocks data={data} config={CssConfig} />
    )
}