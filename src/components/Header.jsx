const Header = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className="container-fluid">
        <a className="navbar-brand" href='/'>Imobillier</a>
        <form className="d-flex">
          <button className="btn btn-danger me-2" type="submit">Sign-up</button>
          <button className="btn btn-outline-danger" type="submit">Login</button>
        </form>
      </div>
    </nav>
  )
}

export default Header
