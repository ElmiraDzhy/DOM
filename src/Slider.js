class Slider{
    constructor(images, currentIndex = 0){
        this._images = images;
        this.currentIndex = currentIndex;
    }

    get currentSlide(){
        return this._images[this.currentIndex];
    }

    get currentIndex(){
        return this._currentIndex;
    }

    set currentIndex(v){
        if(typeof v !== 'number'){
            throw new TypeError('Index must be a number');
        }
        this._currentIndex = v;
    }

    get next(){
        return (this._currentIndex + 1) % this._images.length
       
    }

    get prev(){
        return (this.currentIndex - 1 + this._images.length) %  this._images.length;
    }

}

