import React from 'react';
import './style.css';
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';



function App() {
    return (
      <div className="App">
        <header className="App-header">
        <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo">Hasna Zahidah</a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav_item"><a href="#home" class="nav_link active">Home</a></li>
                        <li class="nav_item"><a href="#about" class="nav_link">Profile</a></li>
                        <li class="nav_item"><a href="#skills" class="nav_link">Morris21</a></li>
                        <li class="nav_item"><a href="#contact" class="nav_link">Contact</a></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
          
    
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Halo Masyarakat</h1>
          <p className="lead">Work hard and focus on yourself, be you and don't worry about what others think. Trust God's plan. You did your best today. You did what you could and you've made it through the day. I'm proud of you for that. You've got to do what's right for you because in the end, life goes on, people lose interest and you deserve to live your life to the fullest everyday.</p>
        </Container>
      </Jumbotron>
    </div>
    
            
        

        
        
            
            <div>
            <section class="about section" id="about">
                <h2 class="section-title">About Me</h2>

                

                    <div>
                        <h2 class="about__subtitle">I'am Hasna Zahidah</h2>
                        <span class="about__profession">Student</span>
                        <p class="abouttext">Hello, My name is Hasna Zahidah, you can call me hasna. But most people mispronounced my name. I was born in Rembang City on July 5, 2002. I live at bogor, West Java.  I am Muslim, my hobbies are trying something new, singing, listening to music and many other things. Besides, I enjoy watching K-dramas and disney movies.</p>
                        <p class="abouttext">I am the 2nd child of 3 siblings. My father's name is Ahmad Yasir Amir and my mother's name is Turmi. I am a 2020 graduate from SMA PLUS PGRI CIBINONG which is an excellent private high school in one of my cities. And then I continued my Diploma 4 education at the Pos Indonesia Polytechnic Campus, majoring in Informatics Engineering and followed one of the UKMs at the Indonesian Postal Polytechnic, namely K-radio in the Music Director division. One of the reasons I joined K-radio was because I like listening to music and wanted to recommend the music I enjoy to others.</p>

                        <div class="about__social">
                            <a href="https://www.instagram.com/hsnaaaz__/" class="about__social-icon"><i class='bx bxl-instagram' ></i></a>
                           
                        </div>
                    </div>
                
            </section>
            </div>

           <div>
            <section class="skills section" id="skills">
                <h2 class="section-title">Morris21</h2>

                <div class="skills__container bd-grid">
                    <div class="skills__box">
                        <h3 class="skills__subtitle">Materi 1</h3>
                        <p class="about__text"><b>Pengertian :</b></p>
                        <p class="about__text">Basis data adalah kumpulan data yang dapat berupa angka, huruf, gambar, simbol yang dikumpulkan dalam 1 tempat yang dimana datanya tersusun berdasarkan fakta, dan data tersebut harus saling berelasi.</p>
                        <p class="about__text"><b>Beberapa contoh database :  :</b></p>
                        <p class="about__text"><li>Sql : Mysql, postgresql, MariaDB, OracleDB</li></p>
                        <p class="about__text"><li>No. Sql : MangoDB, Firebase, CouchDB, Cassandra, Redis</li></p>
                        <p class="about__text"><b>Data Definition Language (DDL)</b></p>
                        <p class="about__text">DDL adalah perintah (QUERY) dalam SQL yang berfungsi untuk membuat dan membangun databse dan membuat tabel itu sendiri. Jadi perintah ini berguna untuk membuat kerangka dari data yang akan dibuat. </p>
                        <p class="about__text"><b>Data Definition Language (DDL)</b></p>
                        <p class="about__text">DML (Data Manipulation Language) adalah sebuah perintah (Query) dalam bahasa pemrograman SQL yang digunakan untuk memanipulasi data dalam database.</p>
                        <p class="about__text"><b>Data Control Language (DCL)</b></p>
                        <p class="about__text">Data Control Language (DCL) adalah sebuah perintah dalam SQL yang berguna untuk pengontrolam dan memanipulasi dari hak akses database itu sendiri. Sederhannya Data Control Language (DCL) berfugsi untuk mengontrol hak akses (Priveleges) dan memaniulasi USER Database. </p>
                        

                        
                        
                        <h3 class="skills__subtitle">Materi 2</h3>
                        <p class="about__text"><b>Definisi Jaringan Komputer</b></p>
                        <p class="about__text"><b>Layer OSI </b></p>
                        <p class="about__text">OSI yang artinya Open System Interconnection merupakan sebuah konsep yang terdiri dari tujuh layer, yang setiap layer tersebut memiliki fungsi yang spesifik, sehingga setiap tugas yang diberikan dapat diimplementasikan secara independen. Konsep ini tidak akan mempengaruhi tiap layer secara langsung, melainkan konsep ini akan melakukan proses secara berututan pada tiap layer nya.</p>
                        <p class="about__text"><b>Layer Atas</b></p>
                        <p class="about__text">Layer ini memiliki peran bagaimana aplikasi berkomunikasi satu sama lain dan juga menduduki urutan teratas karena berhubungan langsung dengan komunikasi pengguna terhadap aplikasi. </p>
                        <p class="about__text"><b>Layer Bawah</b></p>
                        <p class="about__text">Layer ini berperan dalam melakukan skema layanan terhadap layer atas, yang dimaksud ialah bagaimana data tersebut dipindahkan dari satu tempat ke tempat lain. </p>

                        
                        
                        <h3 class="skills__subtitle">Materi 3</h3>
                        <p class="about__text"><b>Pengertian</b></p>
                        <p class="about__text">PHP ialah Personal Home Page. Merupakan Bahasa pemrograman yang popular, digunakan  untuk membuat website yang sederhana dan power full.</p>
                        <p class="about__text"><b>Sejarah PHP</b></p>
                        <p class="about__text"><b>Tahun 1995</b></p>
                        <p class="about__text">Pada awalnya PHP mempunyai singkatan yaitu personal home page untuk rasmus Lerdort nya sendiri. program yang tadinya dibuat untuk dirinya sendiri dia kembangkan untuk dapat digunakan oleh orang lain dalam bentuk open source dengan nama PHP Tools v.1, 1995.</p>
                        <p class="about__text"><b>Tahun 1997</b></p>
                        <p class="about__text">Rasmus Lerdort mengembangkan menjadi PHP Tools v.2, 1997 pada tahap inilah banyak orang-orang yang membantu untuk mengembangkan bahasa pemrograman PHP tersebut.</p>
                        <p class="about__text"><b>Tahun 1998 </b></p>
                        <p class="about__text">pada versi 3 ini ada dua orang yang membantu mengembangkan yaitu Zeev Suraski dan Andi Gutmans dua orang ini yang pada nantinya membuat suatu perusahaan dengan nama Zend Technologies. Dua orang tersebut yang berjasa membuat parser pada pemrograman PHP, parser tersebut merupakan sebuah program untuk membaca syntax php supaya program dapat mengenali systax php atau kodingan yang kita ketik. Sejak saat itulah nama PHP berubah yang asalnya Personal Home Page menjadi PHP: Hypertext Preprocessor yang pertama dicetuskan pada PHP versi 3.</p>
                        <p class="about__text"><b>Tahun 2000</b></p>
                        <p class="about__text">pada tahun 2000 muncul versi terbaru yaitu versi 4 yang didalamnya sudah ada Zend Engine, suatu teknologi untuk megelola script PHP.</p>
                        <p class="about__text"><b>Tahun 2004</b></p>
                        <p class="about__text">pada tahun 2004 dikembangkan menjadi PHP versi 5. Pada versi ini merupakan suatu updatean secara besar besaran karena didalamnya banyak ditambahkan fitur dan funsionalitas-fungsionalitas kedalam librarynya sendiri. Pada versi PHP 5 Zend Enginya sudah menjadi versi 2 yang dapat dikatakan merupakan suatu updatetan paling hebat karena didalamnya PHP sudah dapat melakukan Object Oriented Programming (OOP) atau yang kita kenal dengan sebutan pemrograman berorientasi objek. Walaupun untuk konsep OOPnya masih belum sempurna, tetapi disana kita sudah dapat membuat suatu abstraksi seperti class, inheritance dan lain-lain.
                        Selanjuntya pada PHP versi 5 juga sudah dikembangkan dengan menambahkan PDO (PHP Data Object) yang merupakan mesin didalam PHP yang dapat mengeloba beragam database.
                        </p>
                        <p class="about__text"><b>Tahun 2008</b></p>
                        <p class="about__text">Pada tahun 2008, PHP 4 Resmi di hentikan, tadinya untuk perkembangan dari PHP ini secara pararel PHP 5 dikembangkan dan PHP 4 dikembangkan. Karena pada saat ini masih banyak server yang menggunakan PHP 4, Selanjutnya ada gerakan GoPHP 5 jadi semua disarankan untuk menggunakan PHP versi 5.</p>
                        <p class="about__text"><b>Tahun 2010</b></p>
                        <p class="about__text">Pada PHP 6 ini pengembangannya ditunda dan pada akhirnya diabaikan. Selanjutnya PHP memfokuskan untuk mengembangkan PHP versi 5 dan pada tahun 2010 diupdatelah PHP versi 5.4 dan pada saat ini masih dikembangkan.</p>
                        <p class="about__text"><b>Tahun 2014</b></p>
                        <p class="about__text">pada tahun 2014 PHP melai mengembangkan versi 7, pada versi 7 tersebut teknologi yang dikembangkan sudah sangat baik yaitu menggunakan Zend Engine 3, lebih cepat, lebih bagus untuk performance nya dan lebih secure.</p>






                        
                        
                    </div>
                    
                    
                </div>
                
            </section>
                    </div>
                    <section class="contact section" id="contact">
                <h2 class="section-title">Contact</h2>

                <div class="contact__container bd-grid">
                    <div class="contact__info">
                        <h3 class="contact__subtitle">EMAIL</h3>
                        <span class="contact__text">Zahidahasma002@gmail.com</span>

                        <h3 class="contact__subtitle">PHONE</h3>
                        <span class="contact__text">+6289652096152</span>

                        <h3 class="contact__subtitle">ADRESS</h3>
                        <span class="contact__text">Jl. KH Nawawi Cibinong, Bogor. </span>
                    </div>
</div>
                    </section>
                    </header>
                    </div>

                    
                       
    

     )
    


    }

 
export default App;
