import Headings from "./Elements/headings";
import Lists from "./Elements/lists";
import Paragraphs from "./Elements/paragraphs";
import Tables from "./Elements/tables";
import Images from "./Elements/images";
import Forms from "./Elements/forms";
import Buttons from "./Elements/buttons";
import OtherFields from "./Elements/otherFields";
import AnchorTag from "./Elements/anchorTag";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <Headings />
      <Paragraphs />
      <Lists />
      <Tables />
      <Images />
      <Forms />
      <Buttons />
      <OtherFields />
      <AnchorTag />
    </div>
  );
}
