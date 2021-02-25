let names_anyx: any = []
let names_anyx2: any = ["asdsda", 1231231, "!@&^$!&^@%"]




    







    console.log(names_anyx2[2])

    names_anyx2[7] = 12
    //erorr
    names_anyx2.push(3)
    names_anyx2.push("asdas")
    
    delete names_anyx[0]
    delete names_anyx[1]
    
    
    
    if (names_anyx2[0] == null) {
        names_anyx2.push("tipe data null")

        console.log(names_anyx2)
    }
    
    
    
    if (names_anyx2[1] == undefined) {
        names_anyx2.push("tipe data undefined")

        console.log(names_anyx2)
    }
    

    // https://blog.logrocket.com/async-await-in-typescript/#:~:text=Since%20TypeScript%20is%20a%20superset,on%20in%20the%20development%20process.&text=An%20async%20function%20always%20returns%20a%20promise.
    setTimeout(() => {
        console.log(names_anyx2)
    }, 1000)
 




