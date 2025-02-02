import './Footer.css';


function Footer(){
    return(
        <>
            <footer>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1"><i className="fa-solid fa-chevron-left"></i> Prev</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next <i className="fa-solid fa-chevron-right"></i></a>
                        </li>
                    </ul>
                </nav>
            </footer>

        </>
    )
}

export default Footer;