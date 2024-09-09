function generate(){
    var quotes = {
        "-Jim Morrison" : '"Expose yourself to your deepest fear; after that, fear has no power, and the fear of freedom shrinks and vanishes."',
        "- C.S Catti" : '"Freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed."',
        "- Sadika M.s-Muneeb" : '"Gam Ky Sahary Jiya Nahi Karty.Gam Ky Payaloun Ko Piya Nahi Karty.Apnu Na Jo Diya Houn Zakham Un Zakhmu Ko Kabi Siya Nai Karty."',
           "- Jenny Valentine" : '"Freedom is not worth having if it does not include the freedom to make mistakes."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
