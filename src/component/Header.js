import './Header.css';


function Header() {
    return (
        <>
            <header>

                <div id="icon-div">
                    <p id="icon">
                        <picture>
                            <source media="(min-width: 700px)" srcset="https://i.ibb.co/5FfmDbL/Frame-big.png" />
                            <source media="(min-width: 450px)" srcset="https://i.ibb.co/QbZZGCW/Frame-small.png" />
                            <img src="https://i.ibb.co/QbZZGCW/Frame-small.png" alt="loading" />
                        </picture>
                    </p>
                </div>

                <div id="icon-div-2">
                    <p>
                        <picture>
                            <source media="(min-width: 700px)" srcset="https://i.ibb.co/tc8LqmF/Icon-bg.png" />
                            <source media="(min-width: 450px)" srcset="https://i.ibb.co/LSnYtVv/Icon-sm.png" />
                            <img src="https://i.ibb.co/LSnYtVv/Icon-sm.png" alt="loading" />
                        </picture>
                    </p>
                </div>

            </header>

        </>
    )
}

export default Header;