
function save() {

    let fullName = document.getElementById('fullName').value;
    let mssv = document.getElementById('mssv').value;
    let email = document.getElementById('email').value;
    let title = document.getElementById('title').value;

    let date = document.getElementById("date").value;
    document.getElementById("date").innerHTML = date;

    let restore = document.getElementById("restore").value;
    document.getElementById("restore").innerHTML = restore;

    if (fullName == '') {
        document.getElementById('name-error').innerHTML = '* Vui lòng nhập họ và tên!';
        console.log('Vui lòng nhập họ và tên')
    }
    if (mssv == '') {
        document.getElementById('mssv-error').innerHTML = '* Vui lòng nhập mã số sinh viên!';
        console.log('Vui lòng nhập mã số sinh viên')
    }
    if (title == '') {
        document.getElementById('title-error').innerHTML = '* Vui lòng nhập tên sách!';
        console.log('Vui lòng nhập tên sách')
    }

    if (date == '') {
        document.getElementById('date-error').innerHTML = '* Vui lòng chọn ngày mượn!';
        console.log('Vui lòng chọn ngày mượn')
    }
    if (restore == '') {
        document.getElementById('restore-error').innerHTML = '* Vui lòng chọn ngày trả!';
        console.log('Vui lòng chọn ngày trả')
    }

    console.log(fullName, mssv, email, title, date, restore);

    if (fullName && mssv && email && title && date && restore) {
        let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

        books.push({
            fullName: fullName,
            mssv: mssv,
            email: email,
            title: title,
            date: date,
            restore: restore,
        });

        localStorage.setItem('books', JSON.stringify(books));
        this.list();
    }
}
    function list() {
        let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

        console.log(fullName, mssv, email, title, date, restore);

        if (books.lenght == 0) {
            document.getElementById('list-book').style.display = 'none';
            return false;
        }
        document.getElementById('list-book').style.display = 'block';
        let tableContent = `<tr>
        <td>STT</td>
        <td>Họ và tên</td>
        <td>Mã số sinh viên</td>
         <td>Email</td>
        <td>Tựa đề</td>
        <td>Ngày Mượn</td>
        <td>Ngày Trả</td>
        <td>Edit</td>
        <td>Delete</td>
    </tr>`;

        books.forEach((book, index) => {
            id = index;
            index++;
            tableContent += `<tr>
        <td>${index}</td>
        <td>${book.fullName}</td>
        <td>${book.mssv}</td>
        <td>${book.email}</td>
        <td>${book.title}</td>
        <td>${book.date}</td>
        <td>${book.restore}</td>
        <td>
        <button class="btn btn-primary py-3 text-light" type="submit" >Edit</button> 
    </td>
    <td>
        <button class="btn btn-secondary py-3 text-dark" type="submit" onclick="deleteBook(${id})">Delete</button> 
    </td>
    </tr>`;
        });
        document.getElementById('grid-view-book').innerHTML = tableContent;
    }

    function deleteBook(id){
        let books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];
        books.splice(id, 1);
        
        localStorage.setItem("books", JSON.stringify(books));
        list();
    }
 
