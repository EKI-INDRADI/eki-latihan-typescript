//8. Generic Constraints

class Customer {
 firstName : string;
 lastName : string;

 constructor(fname :string, lname: string){
     this.firstName = fname;
     this.lastName = lname;
 }

}

function customerLogger <T extends Customer>(customer: T): void {
    console.log(`${customer.firstName} ${customer.lastName}`);
}

let customer = new Customer('Jane', 'Doe');
customerLogger(customer);



// customerLogger('Jane Doe'); //Compiler Error
// customerLogger(1); //Compiler Error