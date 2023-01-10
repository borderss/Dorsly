import { container, info_container, table_row } from "../static/css/profile.module.css"

export default function profile() {
const data = [{
    name: "Hasana kebabs",
    time: "11:03",
    date: "12.02.2003",
    person: 1
}, {
    name: "Hasana kebabs",
    time: "11:03",
    date: "12.02.2004",
    person: 1
}]
  return (
    <div className={container}>
      <h1>Vārds uzvārds</h1>

      <div className={info_container}>
        <div>
            <span>Your e-mail</span>
            <span>janis.berzins@inbox.lv</span>
        </div>
        <div>
            <span>Your phone</span>
            <span>+371 22334455</span>
        </div>
      </div>

      <div>
        <input type="text" placeholder="New password"/>
        <button>Change password</button>
      </div>
      <div>
        <input type="text" placeholder="New address"/>
        <button>Change address</button>
        <input type="checkbox"/>
      </div>

      <table>
        <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Person</th>
        </tr>
        {data.map(({name,time,date,person})=>(
            <tr key={date}>
            <td>{name}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>{person}</td>
        </tr>
))}
      </table>
    </div>
  )
}
