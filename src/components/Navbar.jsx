import React from 'react'

function Navbar() {
  return (
    <div className="navbar  absolute top-0 glass">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-white">INDORE GER</a>
  </div>
  <div className="flex-none">
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://media.licdn.com/dms/image/D4D03AQGN4bg-coLl7A/profile-displayphoto-shrink_200_200/0/1673882493271?e=1683158400&v=beta&t=TNu9j-HOmLKK0vc1g2H7DZbcvJCU2lnkgoj1fMkgVBo" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar