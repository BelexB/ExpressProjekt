import React from "react";
import ReactDom from "react-dom";

import Main from "./views/Main/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./styles/index.scss";

library.add(faArrowLeft);

ReactDom.render(<Main />, document.getElementById("app"));
