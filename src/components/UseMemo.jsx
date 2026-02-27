import React, { useMemo } from "react";

function expfun() {
    let num = 0;
    for (let i = 0; i <= 1000000000; i++) {
        num += i;
    }
    return num;
}

function UseMemo() {
    const value = useMemo(() => expfun(), []);
    return (<>
        <h2>Expensive Calculation</h2>
        {value}
    </>)
}

export default UseMemo;