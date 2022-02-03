import React from 'react';
import './About.css';
import {Link} from 'react-router-dom';
function About() {
  return(
    <div className='aboutPage'>
      <div className='about'>
        <h1>Despre</h1>
        <p>
          Primul proiect de Java Script - React include trei pagini 
          (Acasa, Despre si pagina de eroare). In <em>Acasa</em> este 
          afisata o lista cu utilizatori/postari, care poate fi comutata, 
          cu ajutorul butoanelor <em>Postari</em> si <em>Utilizatori</em>.
          In partea dreapta a paginii exista doua butoane prin care poate
          fi modificata culoarea fundalului paginii, respectiv a textului.
          Pentru fiecare utilizator exista un buton de stergere. In partea
          dreapta se afla un formular pentru adaugarea de noi utilizatori, 
          cu tot cu pozica! (Si acesta isi schimba culorile odata cu textul 
          si fundalul paginii, dar pe dos!)
        </p>

        <p>
          Pentru completarea cu date a array-urilor ce contin utilizatorii 
          cu "poze" si a postarilor, am folosit fake API-ul 
          <em>JSON Placeholder</em> - am facut 3 fetch-uri pentru ca URL-urile
          pozelor le-am luat din alta parte decat restul datelor legate de useri. 
        </p>
        <div className='info'>
          <img src='https://avatarfiles.alphacoders.com/108/108672.gif'/>
          <h2>Je...</h2>
          <p id='p1'>
            ...m'appelle Paduche Chel! 
          </p>
          <p id='p2'>
              Sunt Alexandra si ma aflu in a 27-a iarna a vietii. Sunt inscrisa 
              la cursul Web Developer ONLINE si pana acum este foarte distractiv!
              Sunt, in prezent, inginer in domeniul aerospatial, insa sper la un 
              viitor mai bun, in care sa scriu cod. Sunt satula de cuvantul 'sunt'.
          </p>
          
        </div>
      </div>
        <div className='footer'>
          <Link to='/'>Home</Link>
        </div>
    </div>
  ) 
}

export default About;
