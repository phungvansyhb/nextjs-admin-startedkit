import { BlockNoteEditor } from "@blocknote/core";
import {
  BlockNoteView,
  createReactFormattingToolbarFactory,
  ToggledStyleButton,
  Toolbar,
  ToolbarButton,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";

export const CustomFormattingToolbar = (props: { editor: BlockNoteEditor }) => {
  return (
    <Toolbar>
      {/*Default button to toggle bold.*/}
      <ToggledStyleButton editor={props.editor} toggledStyle={"bold"} />
      {/*Default button to toggle italic.*/}
      <ToggledStyleButton editor={props.editor} toggledStyle={"italic"} />
      {/*Default button to toggle underline.*/}
      <ToggledStyleButton editor={props.editor} toggledStyle={"underline"} />
      {/*Custom button to toggle blue text & background color.*/}
      <ToolbarButton
      mainTooltip={"Blue Text & Background"}
      onClick={() => {
        props.editor.toggleStyles({
          textColor: "blue",
          backgroundColor: "blue",
        });
      }}
      isSelected={
        props.editor.getActiveStyles().textColor === "blue" &&
        props.editor.getActiveStyles().backgroundColor === "blue"
      }>
        Blue
      </ToolbarButton>
    </Toolbar>
  );
};

