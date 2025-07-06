import Link from "next/link";

const LINKS = ['blue', 'hotpink', 'white', 'lavender'];

async function ScreenSaverExercise() {
    return (
        <main>
            <p>Choose your color:</p>
            <ul>
                {LINKS.map((item, i) => (
                    <li key={i}>
                        <Link href={`/exercises/01-screensaver/${item}`}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ScreenSaverExercise;
