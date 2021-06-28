import { Experiment, Variant } from "@tstmkrs/nextjs-ab-test";
import Page1 from "./page1";
import Page2 from "./page2";
export default function Home() {
   
    return (
        <Experiment name="Experiment-test">
            <Variant name="A">
                
                    <Page1 />
               
            </Variant>
            <Variant name="B">
                
                    <Page2 />
              
            </Variant>
        </Experiment>
    );
}