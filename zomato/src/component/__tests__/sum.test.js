import { add } from "../add";

test("sum function caculate the sum of the number",()=>{

    const result=add(4,5);

    expect(result).toBe(9);
});