export class LoggingService{

    logStatusChange(status: string){
        console.log("A Server status Changed, the new status is : " + status);
    }
    
}