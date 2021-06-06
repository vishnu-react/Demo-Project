import React from "react";
import Cataloguebrands from "../Cataloguebrands/Cataloguebrands";
import CataloguesHeader1 from "../CataloguesHeader1/CataloguesHeader1";
import CataloguesHeader2 from "../CataloguesHeader2/CataloguesHeader2";
import Cataloguesmain1 from "../Cataloguesmain1/Cataloguesmain1";

function CataloguesHome() {
  return (
    <div>
      <CataloguesHeader1 />
      <CataloguesHeader2 />
      <Cataloguesmain1 />
      <Cataloguebrands />
    </div>
  );
}

export default CataloguesHome;
