import preloader from "../../pic/200px.svg";
import s from "./Preloader.module.css"

let Preloader =(props) => {
	return <div className={s.preloader}>
		<img src={preloader} />
	</div> 
}

export default Preloader;