import { InlineContent, createReactBlockSpec } from "@blocknote/react";

export const ImageBlock = createReactBlockSpec({
    type: "image",
    propSchema: {
        src: {
            default: "https://via.placeholder.com/1000",
        },
        alt: {
            default: "image"
        }
    },
    containsInlineContent: true,
    render: ({ block }) => (
        <div className="flex flex-col items-center">
            <img
                className="border border-slate-50 rounded-lg shadow-md"
                style={{
                    width: 'auto',
                    position: 'relative',
                    height: '100%',
                }}
                loading="lazy"
                src={block.props.src}
                alt={block.props.alt}
                contentEditable={false}
            />
            <InlineContent as={'caption'} />
        </div>
    ),
});
