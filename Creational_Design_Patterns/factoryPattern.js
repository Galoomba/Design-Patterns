/**
 * BasketBall class 
 */
class BasketBall {
    name = 'basketBall';
}


/**
 * footBall Class
 */
class FootBall {
    name = 'football';
}

/**
 * INIT the ball factory 
 */
class BallFactory {
    static createBall (ballType){
        // return instance of class based on conditions 
        if(ballType === 'football') return new FootBall();
        else if (ballType === 'basketBall') return new BasketBall();
    }
} 
/**
 * init object from factory 
 */
const footBall = BallFactory.createBall('football');
const basketBall = BallFactory.createBall('basketBall');
/**
 * test it's value
 */
console.log(footBall.name);
console.log(basketBall.name);