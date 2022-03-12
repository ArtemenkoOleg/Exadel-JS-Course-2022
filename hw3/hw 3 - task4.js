class StringWithRemoveSpecialCharacters extends String {
    removeSpecialCharacters() {
        let my_str = this.split(' ').join('');
        return my_str.replace(/[^a-zA-Z ]/g, "");
    }
}

str = new StringWithRemoveSpecialCharacters("HE!!LL??OO")
console.log(str.removeSpecialCharacters())