export function print(value, qty) {
    var winPrint = window.open('', '', 'left=0,top=0,width=800,height=600,toolbar=0,scrollbars=0,status=0');
    winPrint.document.write('<html><head> <script src="https://kit.fontawesome.com/a076d05399.js"></script> </head><body>');
    winPrint.document.write(value.repeat(qty));
    winPrint.document.write('</body></html>');
    setTimeout(() => {
        winPrint.document.close();
        winPrint.print();
        winPrint.close();
    }, 1000);

}