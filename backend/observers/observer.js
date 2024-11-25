class Observer {
    constructor(){
        this.observers = [];
    }
    addObserver(observer){
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs != observer);
    }
    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}
module.exports = new Observer();