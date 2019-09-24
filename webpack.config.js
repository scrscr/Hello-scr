const path=require("path")
const htmlplugins=require("html-webpack-plugin")
module.exports={
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"main.js"
    },
    module:{
        rules:[
            {
                test:""
            }
        ]
    },
    plugins:[new htmlplugins({
        template:"./src/index.html",
        filename:"index.html"
    })]
}


