// 销售统计数据服务器
const express = require("express");
var app = express();
app.listen(3000, () => { 
    console.log("服务器创建成功！！！");
});
app.use(express.static(__dirname + "/public"));
app.get("/sales", (req, res) => { 
    var obj = [
        {name:"东口",value:190}, 
        {name:"北口",value:110}, 
        {name:"南口",value:120}, 
        {name:"地铁口",value:310}
    ]

    res.send(obj);
})
app.get("/drug", (req,res) => { 
    var obj = [
        {
            id: 1001, name: "立特灵", price: 19.00,
            January : 1900,
            February :893,
            march : 1892,
            may : 759,
            June : 895,
            July : 5620,
            August :4562,
            October : 8952,
            November :765,
            December:12560
        },
        {
            id: 1001, name: "立特灵", price: 19.00,
            January : 1900,
            February :893,
            march : 1892,
            may : 759,
            June : 895,
            July : 5620,
            August :4562,
            October : 8952,
            November :765,
            December:12560
        },
        {
            id: 1002, name: "六味地黄丸", price: 56.00,
            January : 34556,
            February :566,
            march : 3456,
            may : 788,
            June : 35436,
            July : 2220,
            August :5678,
            October : 1234,
            November :4365,
            December:4578
        },
        {
            id: 1003, name: "阿莫西林", price: 29.00,
            January : 1900,
            February :4561,
            march : 2365,
            may : 759,
            June : 895,
            July : 5620,
            August :4562,
            October : 8952,
            November :765,
            December:2568
        },
    ]
    res.send(obj);
})