// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject('error message');
//     }, 2000);
// });

// promise.then((data)=>{
//     data+=2;
//     return data;
// }).then((newData)=>{
//     console.log(newData);
// }).catch((err)=>{
//     console.log(err);
// })

const g = ()=>{
    return new Promise((res,rej)=>{
        res(42);
    })
};

const f = ()=>{
    g().then((data)=>{
        console.log(data+' FROM THEN PROMISE');
    })
}

const fAsync = async()=>{
    const result = await g();
    console.log(result+' FROM ASYNC FUNC');
}


f(); // promise then
fAsync(); //async func