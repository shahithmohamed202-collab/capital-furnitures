import { CyanButton } from "./CyanButton";

export function HeroCopy() {
  return (
    <>
      <h1 className="h1 l1" id="h1a">
        Streamline the shop
      </h1>
      <h1 className="h1" id="h1b">
        Process
      </h1>
      <p className="sub s1" id="sub1">
        <b>
          Restructuring store systems / <span className="nb">E-commerce</span>
        </b>{" "}
        orchestrated with
      </p>
      <p className="sub" id="sub2">
        checkouts, performance, a sustainable expansion.
      </p>
      <CyanButton className="btn cta2" labelId="vpLabel" label="See prices" />
    </>
  );
}
