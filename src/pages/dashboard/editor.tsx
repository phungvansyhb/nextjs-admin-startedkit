import { EditorCSR } from "@/shared/components/common/editor/EditorCSR";
import "@blocknote/core/style.css";
import { useEffect } from "react";


export default function Editor(props: any) {

    return <div className="w-full">
        <EditorCSR />
    </div>;
}

