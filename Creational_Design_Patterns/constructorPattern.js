/**
 *  ES5 fuction declration 
 */
function baseClass(){
    this.name = 'baseClass';
    this.getName = function(){
        return this.name;
    }
}
/**
 * Chain a method to base class prototype to add setName functionalty 
 */
baseClass.prototype.setName = function(name){
    this.name = name;

}
/**
 * Init a instance from the base class 
 */
const test = new baseClass()
test.setName('dsa');
console.log(test.getName());

/////////////////////////////////////////////////////////////////////////////////
/**
 * ES6 class
 */
class baseClassES6 {
    name = 'baseClass';
    getName () {return this.name;}
    setName (name) { this.name = name; }
}
/**
 * Init a instance from the base class 
 */
const test2 = new baseClassES6();
test2.setName('sasa')
console.log(test2.getName())