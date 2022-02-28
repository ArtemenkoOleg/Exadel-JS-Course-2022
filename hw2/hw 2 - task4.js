const vovelsCounter = (str) => {
    	    const vovels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    	    /* The problem was that the upper case was forgotten*/
    	    let counter = 0
    	    for(letter of str){
             if(vovels.includes(letter)){
                 counter = counter + 1
        	  }
    	    }
    	    return counter
}

console.log(vovelsCounter('The current directory is AD-123'))
