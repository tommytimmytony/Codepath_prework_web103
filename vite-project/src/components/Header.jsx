import "../styles/Header.css"

export default function Header() {
    return (
      <div className="headerContainer">
        <div style={{ marginTop: "7rem" }}>
          <h1>Creatorverse</h1>
          <nav>
            <ul>
              <li>
                <a href="/" className="headerLink">View All Creators</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/add" className="headerLink">Add a Creator</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}