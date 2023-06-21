import user2 from "../../../images/img/user-2.png";
import edit from "../../../images/icons/edit.png";
import del from "../../../images/icons/delete.png";
import eye from "../../../images/icons/eye.png";

import "./bemorlar.scss";

function Bemorlar() {
  return (
    <div className="patient">
      <h1>Bemorlar</h1>
      <div className="patient__wrapper">
        <table>
          <thead>
            <tr>
              <th>Ism-sharif</th>
              <th>Email</th>
              <th>Sana</th>
              <th>Qabul vaqti</th>
              <th>Shifokor</th>
              <th>Sabab</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="td__img">
                  <img src={user2} alt="" /> Leslie Alexander
                </div>
              </td>
              <td>lesie.alexander@example.com</td>
              <td>10/10/2020</td>
              <td>09:15-09:45am</td>
              <td>Dr. Jacob Jones</td>
              <td>Mumps Stage II</td>
              <td>
                <div className="td__icons">
                  <img src={eye} alt="" />
                  <img src={edit} alt="" />
                  <img src={del} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="td__img">
                  <img src={user2} alt="" /> Leslie Alexander
                </div>
              </td>
              <td>lesie.alexander@example.com</td>
              <td>10/10/2020</td>
              <td>09:15-09:45am</td>
              <td>Dr. Jacob Jones</td>
              <td>Mumps Stage II</td>
              <td>
                <div className="td__icons">
                  <img src={eye} alt="" />
                  <img src={edit} alt="" />
                  <img src={del} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="td__img">
                  <img src={user2} alt="" /> Leslie Alexander
                </div>
              </td>
              <td>lesie.alexander@example.com</td>
              <td>10/10/2020</td>
              <td>09:15-09:45am</td>
              <td>Dr. Jacob Jones</td>
              <td>Mumps Stage II</td>
              <td>
                <div className="td__icons">
                  <img src={eye} alt="" />
                  <img src={edit} alt="" />
                  <img src={del} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="td__img">
                  <img src={user2} alt="" /> Leslie Alexander
                </div>
              </td>
              <td>lesie.alexander@example.com</td>
              <td>10/10/2020</td>
              <td>09:15-09:45am</td>
              <td>Dr. Jacob Jones</td>
              <td>Mumps Stage II</td>
              <td>
                <div className="td__icons">
                  <img src={eye} alt="" />
                  <img src={edit} alt="" />
                  <img src={del} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="td__img">
                  <img src={user2} alt="" /> Leslie Alexander
                </div>
              </td>
              <td>lesie.alexander@example.com</td>
              <td>10/10/2020</td>
              <td>09:15-09:45am</td>
              <td>Dr. Jacob Jones</td>
              <td>Mumps Stage II</td>
              <td>
                <div className="td__icons">
                  <img src={eye} alt="" />
                  <img src={edit} alt="" />
                  <img src={del} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="td__img">
                  <img src={user2} alt="" /> Leslie Alexander
                </div>
              </td>
              <td>lesie.alexander@example.com</td>
              <td>10/10/2020</td>
              <td>09:15-09:45am</td>
              <td>Dr. Jacob Jones</td>
              <td>Mumps Stage II</td>
              <td>
                <div className="td__icons">
                  <img src={eye} alt="" />
                  <img src={edit} alt="" />
                  <img src={del} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="td__img">
                  <img src={user2} alt="" /> Leslie Alexander
                </div>
              </td>
              <td>lesie.alexander@example.com</td>
              <td>10/10/2020</td>
              <td>09:15-09:45am</td>
              <td>Dr. Jacob Jones</td>
              <td>Mumps Stage II</td>
              <td>
                <div className="td__icons">
                  <img src={eye} alt="" />
                  <img src={edit} alt="" />
                  <img src={del} alt="" />
                </div>
              </td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bemorlar;
