import {beforeEach, describe, it} from "vitest";
import {render, screen} from "@testing-library/react";

import { HomePage } from "./HomePage";

beforeEach(()=>render(<HomePage/>));

describe("HomePage Component", ()=>{
    it("Should have a heading with the text EventsAndConferencs ", ()=>{
        screen.getByRole("heading", {name: "EventsAndConferencs"});
                                        //   name: /MovieFlix/i
    })
})