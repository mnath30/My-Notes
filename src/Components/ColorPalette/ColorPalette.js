import "./color-palette.css";
import { useNotes } from "../../Context";

const ColorPalette = ({ design, noteCard, page }) => {
  const { noteDispatch } = useNotes();
  const changeColorHandler = (colorSelected) => {
    if (page === "allnotes") {
      noteDispatch({
        type: "CHANGE_NOTE_COLOR_ALLNOTES",
        item: noteCard,
        payload: colorSelected,
      });
    }
    if (page === "archive") {
      noteDispatch({
        type: "CHANGE_NOTE_COLOR_ARCHIVED",
        item: noteCard,
        payload: colorSelected,
      });
    }
    if (page === "trash") {
      noteDispatch({
        type: "CHANGE_NOTE_COLOR_TRASH",
        item: noteCard,
        payload: colorSelected,
      });
    }
  };
  return (
    <div className={`flex palette ${design}`}>
      <div
        className="palette-color crimson-color"
        onClick={() => changeColorHandler("crimson-background")}
      ></div>
      <div
        className="palette-color yellow-color"
        onClick={() => changeColorHandler("yellow-background")}
      ></div>
      <div
        className="palette-color green-color"
        onClick={() => changeColorHandler("green-background")}
      ></div>
      <div
        className="palette-color purple-color"
        onClick={() => changeColorHandler("purple-background")}
      ></div>
      <div
        className="palette-color blue-color"
        onClick={() => changeColorHandler("blue-background")}
      ></div>
      <div
        className="palette-color inherit-background"
        onClick={() => changeColorHandler("")}
      ></div>
    </div>
  );
};

export { ColorPalette };
