function Header(){
    let menus=["HOME","CONTACT","SERVICES","PORTFOLIO"]
return (
    <>
    <h1>header</h1>
    <ul>
      {
        menus.map(
            (element) => <li>{element}</li>
            
        )
      }
        </ul>
        </>
)
}
export default Header;