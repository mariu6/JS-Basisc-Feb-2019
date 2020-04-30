function oldBooks(input) {
    let title = input.shift();
    let count = Number(input.shift());
    let counter = 0;
    while(counter <= count) {
        let bookName = input.shift();
        if (bookName == title){
            console.log(`You checked ${counter} books and found it.`);
            break;
        }
        counter ++;
    }
    if(counter > count) {
    console.log("The book you search is not here!");
    console.log(`You checked ${count} books.`);
    }
}
oldBooks(["The spot",4,"Stronger","Life Style","Troy","Spotify"]);