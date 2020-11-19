import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import './Header.css';
import Axios from 'axios';


class Header extends Component {

handleLogout = () => {
  Axios.get('/api/logout')
  .then(() => {

    this.props.history.push('/');
  })
  .catch(err => console.log(err));
}

  render() {
    return (
      <section>
        {this.props.location.pathname !== '/'
          ? (<Nav className="justify-content-end" activeKey="/home">
            <div>
              <div>
                <Link to='/reviews'><h1 className='real-reviews-real-gamers'>
                  Real Reviews Real Gamers <Badge className='pill' pill variant="dark">beta</Badge>
                </h1></Link>
              </div>
              <img className='gamepad' alt='gamepad' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDA4NSA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMTgwMDAwMDAwMDAwMDAwMDIsMCwwLDAuMTgsMjA5LjkyMDIxMDg1MDIzODgsMjA0LjI3MTY0MDYyNTAwMDE1KSI+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNTEwLjI5Njg3NSAyMjUuNTMxMjUtMzQuMzIwMzEzLTE0NS44NDM3NWMtOS4yNDIxODctMzkuMjg5MDYyLTQ1LjQ1NzAzMS03OS42ODc1LTEwMC42MDU0NjgtNzkuNjg3NWgtMjM4LjczODI4MmMtNDAuMzYzMjgxIDAtODcuOTgwNDY4IDI2LjAwMzkwNi0xMDAuNjA5Mzc0IDc5LjY4NzVsLTM0LjMyMDMxMyAxNDUuODQzNzVjLTkuMzE2NDA2IDM5LjU4OTg0NCAyMC43MzQzNzUgNzcuNTcwMzEyIDYxLjQ1NzAzMSA3Ny41NzAzMTIgMTcuMzA0Njg4IDAgMzMuNTgyMDMyLTkuMjE4NzUgNDIuNDc2NTYzLTI0LjA1MDc4MWwyNi40Mzc1LTQ0LjA1NDY4N2M0LjUxOTUzMS03LjUzOTA2MyAxMi43ODUxNTYtMTIuMjE4NzUgMjEuNTc0MjE5LTEyLjIxODc1aDIwNC42OTkyMThjOC43ODkwNjMgMCAxNy4wNTg1OTQgNC42ODM1OTQgMjEuNTc4MTI1IDEyLjIyMjY1NmwyNi40MzM1OTQgNDQuMDQ2ODc1YzguODk4NDM3IDE0LjgzNTkzNyAyNS4xNzU3ODEgMjQuMDU0Njg3IDQyLjUgMjQuMDU0Njg3IDQwLjY2MDE1NiAwIDcwLjc2MTcxOS0zNy45NDE0MDYgNjEuNDM3NS03Ny41NzAzMTJ6bS0zMTguNTU0Njg3LTk5LjE0NDUzMWgtMTcuMTMyODEzdjE3LjEzMjgxMmMwIDguMjgxMjUtNi43MTQ4NDQgMTQuOTk2MDk0LTE1IDE0Ljk5NjA5NC04LjI4MTI1IDAtMTQuOTk2MDk0LTYuNzE0ODQ0LTE0Ljk5NjA5NC0xNC45OTYwOTR2LTE3LjEzMjgxMmgtMTcuMTMyODEyYy04LjI4MTI1IDAtMTQuOTk2MDk0LTYuNzE0ODQ0LTE0Ljk5NjA5NC0xNC45OTYwOTQgMC04LjI4NTE1NiA2LjcxNDg0NC0xNSAxNC45OTYwOTQtMTVoMTcuMTMyODEydi0xNy4xMzI4MTNjMC04LjI4MTI1IDYuNzE0ODQ0LTE0Ljk5NjA5MyAxNC45OTYwOTQtMTQuOTk2MDkzIDguMjg1MTU2IDAgMTUgNi43MTQ4NDMgMTUgMTQuOTk2MDkzdjE3LjEzMjgxM2gxNy4xMzI4MTNjOC4yODEyNSAwIDE0Ljk5NjA5MyA2LjcxNDg0NCAxNC45OTYwOTMgMTUgMCA4LjI4MTI1LTYuNzE0ODQzIDE0Ljk5NjA5NC0xNC45OTYwOTMgMTQuOTk2MDk0em0xMjguNTE1NjI0IDBjLTguMjc3MzQzIDAtMTQuOTk2MDkzLTYuNzE4NzUtMTQuOTk2MDkzLTE0Ljk5NjA5NCAwLTguMjgxMjUgNi43MjI2NTYtMTUgMTQuOTk2MDkzLTE1IDguMjgxMjUgMCAxNSA2LjcxODc1IDE1IDE1IDAgOC4yNzczNDQtNi43MTg3NSAxNC45OTYwOTQtMTUgMTQuOTk2MDk0em0zMi4xMzI4MTMgMzIuMTI4OTA2Yy04LjI3NzM0NCAwLTE1LTYuNzE4NzUtMTUtMTQuOTk2MDk0IDAtOC4yNzczNDMgNi43MjI2NTYtMTUgMTUtMTVzMTQuOTk2MDk0IDYuNzIyNjU3IDE0Ljk5NjA5NCAxNWMwIDguMjc3MzQ0LTYuNzE4NzUgMTQuOTk2MDk0LTE0Ljk5NjA5NCAxNC45OTYwOTR6bTAtNjQuMjU3ODEzYy04LjI3NzM0NCAwLTE1LTYuNzE4NzUtMTUtMTUgMC04LjI3NzM0MyA2LjcyMjY1Ni0xNC45OTYwOTMgMTUtMTQuOTk2MDkzczE0Ljk5NjA5NCA2LjcxODc1IDE0Ljk5NjA5NCAxNC45OTYwOTNjMCA4LjI4MTI1LTYuNzE4NzUgMTUtMTQuOTk2MDk0IDE1em0zMi4xMjg5MDYgMzIuMTI4OTA3Yy04LjI3NzM0MyAwLTE1LTYuNzE4NzUtMTUtMTQuOTk2MDk0IDAtOC4yODEyNSA2LjcyMjY1Ny0xNSAxNS0xNSA4LjI3NzM0NCAwIDE0Ljk5NjA5NCA2LjcxODc1IDE0Ljk5NjA5NCAxNSAwIDguMjc3MzQ0LTYuNzE4NzUgMTQuOTk2MDk0LTE0Ljk5NjA5NCAxNC45OTYwOTR6bTAgMCIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
            </div>
            <Nav.Item>
              <Link to='/profile'><Nav.Link className="profile" href="/home"> <h6 className='text'>Profile</h6></Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='about' eventKey="link-1"> <Link to='/about'> <h6 className='text'>About</h6></Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
              onClick={this.handleLogout} 
              className='logout' 
              eventKey="link-2"> 
              <Link to='/'> <h6 className='text'>Logout</h6></Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>)
          : null}
      </section>
    );
  }
}

export default withRouter(Header);