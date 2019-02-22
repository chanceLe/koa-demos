function getSomething(){
    return 'something'
}

async function testAsync(){
    return 'hello async';
}

async function test(){
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1,v2)
    
    
}

test();
// const result = testAsync();
// console.log(result);
