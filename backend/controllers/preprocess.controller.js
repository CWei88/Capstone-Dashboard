const {PythonShell} =require('python-shell');

export const preprocessFile = async(req, res) => {
    const { file, compName, year} = req.body;

    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
          scriptPath: '../preprocess', //If you are having python_test.py script in same folder, then it's optional.
        args: [file] //An argument which can be accessed in the script using sys.argv[1]
    };
     
 
    PythonShell.run('preprocess.py', options, function (err, result){
        if (err) throw err;
        // result is an array consisting of messages collected
        //during execution of script.
        console.log('result: ', result.toString());
        res.send(result.toString())

    });
}