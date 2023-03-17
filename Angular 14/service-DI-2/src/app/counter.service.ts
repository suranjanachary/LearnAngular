export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive(){
        this.activeToInactiveCounter++;
        console.log( 'Inactive to Active : ' + this.activeToInactiveCounter)
    }
    incrementInactiveToActive(){
        this.inactiveToActiveCounter++;
        console.log('Active to Inactive : '+ this.inactiveToActiveCounter)
    }


}