const coin = {
    state: 0,
    flip: function() {
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
        this.state = Math.floor(Math.random() * 2)
        
    },
    toString: function() {
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
        let str = ""
        if(this.state === 0){
            str = "head "
        }else if ( this.state === 1) {
            str = "tail "
        }
        return str
    },
    toHTML: function() {
        const image = document.createElement('img');
    
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        if (this.state === 0) {
            image.style.width = "50px"
            image.style.height = "50px"
            image.src = 'images/heads.png'
            } else if (this.state === 1) {
                image.style.width = "50px"
                image.style.height = "50px"
                image.src = 'images/tails.png'
            //  console.log(image)
        }
        // console.log(image)
        return image
    }
};
function display20Flips() {
    const results = [];
    // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  
    //    After your loop completes, return an array with the result of each flip.
    
        for (let i = 0; i < 20; i++) {
            // let coin = Math.floor(Math.random() * 20)
            // let even = (coin % 2 === 0)
            coin.flip()
             results.push(coin.toString())
        }
        document.getElementById("display").textContent = JSON.stringify(results)
}
function display20Images() {
    const results = [];
    // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  
    //After your loop completes, return an array with result of each flip.

    let DOM = document.getElementById("images")

    for ( let i = 0; i < 20; i++) {
        coin.flip()
        // results.push(coin.toString());
        // images1 ===
        let images1 = coin.toHTML();
        // console.log(images1)
        
        // DOM.appendChild(images1);
        document.getElementById("images").appendChild(images1)
        // return images1

        results.push(coin.toHTML())
        
    }
    return results
}


    document.getElementById("Flipper").addEventListener("click", function(){
        location.reload()
    })





// coin.flip()
// // coin.toString()
// coin.toHTML()
display20Flips()
display20Images()