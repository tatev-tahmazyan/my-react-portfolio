import "./style.scss";
import FileCode from '../Icons/FileCode';

const Loader = () => {
    return (
        <div className="loader-cont d-flex justify-content-center align-items-center">
            <div className="loader">
                <span className="line"></span>
                <div className="center">
                    <div className="wrap">
                        <div className="box-1 box">
                            <FileCode className="loader-file-icon" />
                            <FileCode className="loader-file-icon"  />
                        </div>
                        <div className="box-2 box">
                            <FileCode className="loader-file-icon"  />
                            <FileCode className="loader-file-icon"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader;