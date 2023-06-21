// import './shifokor.scss'

import user2 from "../../../images/img/user-2.png";
import edit from "../../../images/icons/edit.png";
import del from "../../../images/icons/delete.png";

function Shifokorlar() {
  return (
    <div className="patient">
      <h1>Shifokorlar</h1>
      <div className="patient__wrapper">
        <table>
          <thead>
            <tr>
              <th>Ism-sharif</th>
              <th>Email</th>
              <th>Mutaxasisligi</th>
              <th>Bolim</th>
              <th>Qabul kunlari</th>

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
              <td>Terapevt</td>
              <td>Endokrinologiya</td>
              <td>Du / Se / Chor</td>
              <td>
                <div className="td__icons">
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
              <td>Terapevt</td>
              <td>Endokrinologiya</td>
              <td>Du / Se / Chor</td>
              <td>
                <div className="td__icons">
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
              <td>Terapevt</td>
              <td>Endokrinologiya</td>
              <td>Du / Se / Chor</td>
              <td>
                <div className="td__icons">
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
              <td>Terapevt</td>
              <td>Endokrinologiya</td>
              <td>Du / Se / Chor</td>
              <td>
                <div className="td__icons">
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
              <td>Terapevt</td>
              <td>Endokrinologiya</td>
              <td>Du / Se / Chor</td>
              <td>
                <div className="td__icons">
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

export default Shifokorlar;
