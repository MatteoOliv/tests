import styles from "./styles/page.module.scss";
import Header from "./component/header";
import { ROW } from "./_constants";
import AllMovies from "./component/allMovies";

const PAGE_TITLE = "MOVIES";
const BACK_TEXT = "Favorites ->";
const NAVIGATE = "/favorites";

export default async function Home() {
    return (
        <main className={styles.main}>
            <Header
                direction={ROW}
                title={PAGE_TITLE}
                callbackText={BACK_TEXT}
                navigation={NAVIGATE}
            />
            <AllMovies />
        </main>
    );
}
