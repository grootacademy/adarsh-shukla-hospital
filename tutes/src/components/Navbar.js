import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAction } from '../redux/action'

function Navbar() {
    const dispatch = useDispatch()
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)

    const addition = (e) => {

        e.preventDefault();

        dispatch(addAction(parseInt(num1), parseInt(num2)))

    }

    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="number" placeholder="num 1" aria-label="Search" value={num1} onChange={(e) => setNum1(e.target.value)} />
                        <input class="form-control mr-sm-2" type="number" placeholder="num 2" aria-label="Search" value={num2} onChange={(e) => setNum2(e.target.value)} />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={addition}>Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar