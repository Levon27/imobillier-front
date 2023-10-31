const Header = () => {
  return (
    <nav className='navbar navbar-dark bg-dark p-0'>
      <div className="container-fluid">
        <a className="navbar-brand" href='/'>Imobillier</a>
        <form className="d-flex h-100">
          <button className="header-button-primary me-2">Sign-up</button>
          <button className="header-button-secondary">Login</button>
        </form>
      </div>
    </nav>
  )
}

export default Header
