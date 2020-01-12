// const geoCode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             longitude: 0,
//             latitude: 0
//         };
//         callback(data);
//     }, 2000);
// };
// geoCode("Nepal", data => {
//     console.log(data);
// });

const Addition = (num1, num2, callback) => {
    setTimeout(() => {
        const value = num1 + num2;
        callback(value);
    }, 2000);
};
Addition(1, 4, sum => {
    console.log(sum);
});