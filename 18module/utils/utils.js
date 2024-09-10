import { array } from "./array-utils";
import { collection } from "./collection";
import { date } from "./date-utils";
import { math } from "./math-utils";
import { timer } from "./timer-utils";

import json from "../localdata.json" assert { type: "json" };

array();
collection();
date();
math();
timer();

console.log(json.LINE2);
