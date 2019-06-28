import {Route} from "../../utils";
import formidable from "formidable";
import util from "util";
import fs from 'fs';
const routing: Route[] = [
    {
        path: "/upload",
        method: "get",
        handler: (req, res) => {
            res.send({"test": "xxx"})
        }
    },
    {
        path: "/upload",
        method: "post",
        handler: (req, res) => {
            const form = new formidable.IncomingForm();
            form.parse(req, (err, fields, files) => {
                const oldpath = files.upload.path;
                const newpath = 'C:\\Users\\jacktok\\Desktop\\devjs\\tmp\\' + files.upload.name;
                fs.rename(oldpath, newpath, function (err) {
                    console.log('write file at ' + newpath);

                    if (err) throw err;
                    res.write('File uploaded and moved!');
                    res.end();
                });
            });

        }
    }
];
export default routing;
